import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
// Import logo assets
import MP from "../assets/ICONS/MP.png";
import LFR from "../assets/ICONS/LFR.png";
import PE from "../assets/ICONS/PE.png";
import SW from "../assets/ICONS/SW.png";
import BB from "../assets/ICONS/BB.png";
import CW from "../assets/ICONS/CW.png";
import GC from "../assets/ICONS/GC.png";
import DC from "../assets/ICONS/DC.png";
import RS from "../assets/ICONS/RS.png";

// Competitions data with actual and early bird prices.
const competitionsData = [
  { label: "Speed Wiring", value: "speed_wiring", actualPrice: 1500, earlyBird: 1275, maxMembers: 3 },
  { label: "100 Minutes Programming", value: "programming", actualPrice: 1800, earlyBird: 1530, maxMembers: 3 },
  { label: "Battle Bots", value: "battle_bots", actualPrice: 5000, earlyBird: 4250, maxMembers: 3, categories: { heavy: { actualPrice: 5000, earlyBird: 4250 }, light: { actualPrice: 3000, earlyBird: 2550 } } },
  { label: "Line Following Robot", value: "line_following", actualPrice: 3000, earlyBird: 2550, maxMembers: 3 },
  { label: "Robo Soccer", value: "robo_soccer", actualPrice: 2000, earlyBird: 1700, maxMembers: 3 },
  { label: "Drone Competition", value: "drone_competition", actualPrice: 3000, earlyBird: 2550, maxMembers: 3 },
  { label: "E-Gaming", value: "e_gaming", actualPrice: 1500, earlyBird: 1275, maxMembers: 1, games: { fifa: 1500, tekken: 1500 } },
  { label: "Project Exhibition", value: "project_exhibition", actualPrice: 3000, earlyBird: 2550, maxMembers: 3 },
  { label: "Cybersecurity Workshop+Competition", value: "cybersecurity", actualPrice: 1500, earlyBird: 1275, maxMembers: 1 },
];

const competitionLogos = {
  speed_wiring: SW,
  programming: MP,
  battle_bots: BB,
  line_following: LFR,
  robo_soccer: RS,
  drone_competition: DC,
  e_gaming: GC,
  project_exhibition: PE,
  cybersecurity: CW,
};

// Initialize Cloudinary instance.
const cld = new Cloudinary({ cloud: { cloudName: "dsjimnqnc" } });

// Helper function to upload a file to Cloudinary.
const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  // Replace 'ml_ieee' with your actual unsigned upload preset.
  formData.append("upload_preset", "ml_ieee");
  const response = await fetch("https://api.cloudinary.com/v1_1/dsjimnqnc/upload", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  return result.secure_url;
};

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [proofUploading, setProofUploading] = useState(false);
  const [cnicUploading, setCnicUploading] = useState(false);

  // Updated payment state: removed amount and teamName.
  const [formData, setFormData] = useState({
    email: "",
    competition: "speed_wiring",
    competitionCategory: "",
    competitionGame: "",
    teamName: "", // Team Name remains in Step 2 (for the team registration details)
    institute: "",
    discountCode: "",
    participants: [{ name: "", cnic: "", gender: "", phn: "", email: "" }],
    payment: {
      transactionId: "",
      iban: "",
      paymentDate: "",
      accountHolderName: "",
      bankName: "",
      proofOfPayment: "", // Cloudinary URL for proof-of-payment
      cnicPicture: "",    // Cloudinary URL for front CNIC picture
    },
  });

  // Regex patterns.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cnicRegex = /^[0-9]{13}$/;
  const phnRegex = /^[0-9]{11}$/;

  // Prevent Enter key from submitting form before step 4.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && step !== 4) {
      e.preventDefault();
    }
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        alert("Please enter a valid email address.");
        return false;
      }
    }
    if (step === 2) {
      if (!formData.teamName.trim() || !formData.institute.trim()) {
        alert("Team Name and Institute are required.");
        return false;
      }
      if (formData.competition === "battle_bots" && !formData.competitionCategory) {
        alert("Please select a category for Battle Bots.");
        return false;
      }
      if (formData.competition === "drone_competition" && !formData.competitionCategory) {
        alert("Please select a category for Drone Competition.");
        return false;
      }
      if (formData.competition === "e_gaming" && !formData.competitionGame) {
        alert("Please select a game for E-Gaming.");
        return false;
      }
    }
    if (step === 3) {
      for (let i = 0; i < formData.participants.length; i++) {
        const p = formData.participants[i];
        if (!p.name.trim() || !p.cnic.trim() || !p.gender || !p.phn.trim() || !p.email.trim()) {
          alert(`All fields are required for Participant ${i + 1}.`);
          return false;
        }
        if (!cnicRegex.test(p.cnic)) {
          alert(`Participant ${i + 1}: CNIC must be exactly 13 digits.`);
          return false;
        }
        if (!phnRegex.test(p.phn)) {
          alert(`Participant ${i + 1}: Phone Number must be exactly 11 digits.`);
          return false;
        }
        if (!emailRegex.test(p.email)) {
          alert(`Participant ${i + 1}: Please enter a valid email address.`);
          return false;
        }
      }
    }
    if (step === 4) {
      const p = formData.payment;
      if (
        !p.transactionId.trim() ||
        !p.iban.trim() ||
        !p.paymentDate ||
        !p.accountHolderName.trim() ||
        !p.bankName.trim() ||
        !p.proofOfPayment ||
        !p.cnicPicture
      ) {
        alert("All payment fields (including both image uploads) are required.");
        return false;
      }
    }
    return true;
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateCompetitionDetail = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateParticipant = (index, field, value) => {
    const updatedParticipants = formData.participants.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setFormData((prev) => ({ ...prev, participants: updatedParticipants }));
  };

  const addParticipant = () => {
    const comp = competitionsData.find((c) => c.value === formData.competition);
    if (comp && formData.participants.length < comp.maxMembers) {
      setFormData((prev) => ({
        ...prev,
        participants: [...prev.participants, { name: "", cnic: "", gender: "", phn: "", email: "" }],
      }));
    }
  };

  const removeParticipant = (index) => {
    const updatedParticipants = formData.participants.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, participants: updatedParticipants }));
  };

  const currentCompetition = competitionsData.find((c) => c.value === formData.competition);

  // Price calculation: if discount code "PUCIT30" is valid, apply 30% discount on actual price.
  const getPrice = () => {
    if (!currentCompetition) return "";
    let actualPrice = currentCompetition.actualPrice;
    let earlyBird = currentCompetition.earlyBird;

    // Check if Battle Bots and category selected
    if (formData.competition === "battle_bots" && formData.competitionCategory) {
      const category = currentCompetition.categories[formData.competitionCategory];
      if (category) {
        actualPrice = category.actualPrice;
        earlyBird = category.earlyBird;
      }
    }

    if (formData.discountCode.trim().toUpperCase() === "PUCIT30") {
      return Math.round(actualPrice * 0.7);
    }
    if (formData.competition === "programming" && formData.discountCode.trim().toUpperCase() === "ACMNU30") {
      return Math.round(actualPrice * 0.7);
    }
    if (formData.discountCode.trim().toUpperCase() === "LGU20") {
      return Math.round(actualPrice * 0.8);
    }
    if (formData.discountCode.trim().toUpperCase() === "CUI20") {
      return Math.round(actualPrice * 0.8);
    }
    if (formData.discountCode.trim().toUpperCase() === "ITU20") {
      return Math.round(actualPrice * 0.8);
    }
    if (formData.discountCode.trim().toUpperCase() === "SUPERIOR20") {
      return Math.round(actualPrice * 0.8);
    }
    if (formData.discountCode.trim().toUpperCase() === "BULC20") {
      return Math.round(actualPrice * 0.8);
    }
    return earlyBird;
  };

  // File input handler for Proof of Payment.
  const handleProofUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofUploading(true);
      try {
        const url = await uploadToCloudinary(file);
        setFormData((prev) => ({
          ...prev,
          payment: { ...prev.payment, proofOfPayment: url },
        }));
      } catch (error) {
        console.error("Proof upload error:", error);
      } finally {
        setProofUploading(false);
      }
    }
  };

  // File input handler for CNIC Picture.
  const handleCnicUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setCnicUploading(true);
      try {
        const url = await uploadToCloudinary(file);
        setFormData((prev) => ({
          ...prev,
          payment: { ...prev.payment, cnicPicture: url },
        }));
      } catch (error) {
        console.error("CNIC upload error:", error);
      } finally {
        setCnicUploading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;
    setIsLoading(true);

    const payload = {
      ...formData,
      computedPrice: getPrice(),
    };

    console.log("Submitting data:", payload);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyJwghyK153M_hkOznoyzLwqdostv_UjSkk-7pfxc0x066G2rzPw1XyRG5J1b9L4cNAww/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (response.type === "opaque" || response.ok) {
        setIsLoading(false);
        alert("Data Saved");
        window.location.href = "/";
      } else {
        setIsLoading(false);
        alert("Data Not Saved");
        window.location.href = "/";
      }
    } catch (error) {
      setIsLoading(false);
      alert("Data Not Saved");
      window.location.href = "/";
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 pt-20">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="text-white text-3xl mb-4">Submitting, may take a minute...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-center">IEEE WEEK '25 REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        {/* STEP 1: Basic Info */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 1: Basic Info</h2>
            <div className="mb-4">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Competition</label>
              <select
                value={formData.competition}
                onChange={(e) => {
                  updateCompetitionDetail("competition", e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    competitionCategory: "",
                    competitionGame: "",
                    participants: [{ name: "", cnic: "", gender: "", phn: "", email: "" }],
                  }));
                }}
                className="w-full border px-3 py-2 rounded"
                required
              >
                {competitionsData.map((comp) => (
                  <option key={comp.value} value={comp.value}>
                    {comp.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={() => { if (validateStep()) setStep(2); }} className="bg-blue-500 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Competition Details */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 2: Competition Details</h2>
            <div className="mb-4 p-4 border rounded bg-gray-100 flex items-center space-x-4">
  <div className="mb-2">
    {formData.competition && competitionLogos[formData.competition] ? (
      <img
        src={competitionLogos[formData.competition]}
        alt="Competition Logo"
        className="w-24 h-24 object-contain"
      />
    ) : (
      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center">Logo</div>
    )}
  </div>
  <div>
    <strong>Actual Price:</strong> Rs.{" "}
    {formData.competition === "battle_bots" && formData.competitionCategory
      ? currentCompetition.categories[formData.competitionCategory].actualPrice
      : currentCompetition.actualPrice}{" "}
    <br />
    <strong>Early Bird Price:</strong> Rs.{" "}
    {formData.competition === "battle_bots" && formData.competitionCategory
      ? currentCompetition.categories[formData.competitionCategory].earlyBird
      : currentCompetition.earlyBird}{" "}
    <br />
    <strong>Price to Pay:</strong> Rs. {getPrice() ? getPrice() : "Select options below"}
  </div>
</div>
            {formData.competition === "battle_bots" && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Choose Category</label>
                <select value={formData.competitionCategory} onChange={(e) => updateCompetitionDetail("competitionCategory", e.target.value)} className="w-full border px-3 py-2 rounded" required>
                  {/* <option value="">Select Category</option> */}
                  <option value="heavy">Heavy Weight</option>
                  <option value="light">Light Weight</option>
                </select>
              </div>
            )}
            {formData.competition === "drone_competition" && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Choose Category</label>
                <select value={formData.competitionCategory} onChange={(e) => updateCompetitionDetail("competitionCategory", e.target.value)} className="w-full border px-3 py-2 rounded" required>
                  <option value="">Select Category</option>
                  <option value="quadcopter">Quadcopter (Drone)</option>
                  <option value="rc_plane">RC Plane</option>
                </select>
              </div>
            )}
            {formData.competition === "e_gaming" && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Choose Game</label>
                <select value={formData.competitionGame} onChange={(e) => updateCompetitionDetail("competitionGame", e.target.value)} className="w-full border px-3 py-2 rounded" required>
                  <option value="">Select Game</option>
                  <option value="fifa">Fifa</option>
                  <option value="tekken">Tekken</option>
                </select>
              </div>
            )}
            <div className="mb-4">
              <label className="block font-medium mb-1">Team Name</label>
              <input type="text" value={formData.teamName} onChange={(e) => updateField("teamName", e.target.value)} className="w-full border px-3 py-2 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Institute</label>
              <input type="text" value={formData.institute} onChange={(e) => updateField("institute", e.target.value)} className="w-full border px-3 py-2 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Ambassador/Discount Code</label>
              <input type="text" value={formData.discountCode} onChange={(e) => updateField("discountCode", e.target.value)} className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={() => setStep(1)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Back
              </button>
              <button type="button" onClick={() => { if (validateStep()) setStep(3); }} className="bg-blue-500 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Participant Details */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 3: Participant Details</h2>
            {formData.participants.map((participant, index) => (
              <div key={index} className="p-4 border rounded mb-4 relative bg-gray-50">
                <h3 className="font-semibold mb-2">Participant {index + 1}</h3>
                {formData.participants.length > 1 && (
                  <button type="button" onClick={() => removeParticipant(index)} className="absolute top-2 right-2 text-red-500">
                    Remove
                  </button>
                )}
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">Name</label>
                  <input type="text" value={participant.name} onChange={(e) => updateParticipant(index, "name", e.target.value)} className="w-full border px-3 py-2 rounded" required />
                </div>
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">CNIC (Format: 3520211111111)</label>
                  <input type="text" value={participant.cnic} onChange={(e) => updateParticipant(index, "cnic", e.target.value)} className="w-full border px-3 py-2 rounded" required />
                </div>
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">Gender</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name={`gender-${index}`} value="male" checked={participant.gender === "male"} onChange={(e) => updateParticipant(index, "gender", e.target.value)} className="mr-1" required />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name={`gender-${index}`} value="female" checked={participant.gender === "female"} onChange={(e) => updateParticipant(index, "gender", e.target.value)} className="mr-1" required />
                      Female
                    </label>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">Phone Number (Format: 03111111111)</label>
                  <input type="text" value={participant.phn} onChange={(e) => updateParticipant(index, "phn", e.target.value)} className="w-full border px-3 py-2 rounded" required />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1">Email</label>
                  <input type="email" value={participant.email} onChange={(e) => updateParticipant(index, "email", e.target.value)} className="w-full border px-3 py-2 rounded" required />
                </div>
              </div>
            ))}
            {currentCompetition && formData.participants.length < currentCompetition.maxMembers && (
              <button type="button" onClick={addParticipant} className="mb-4 bg-green-500 text-white px-4 py-2 rounded">
                Add Participant
              </button>
            )}
            <div className="flex justify-between">
              <button type="button" onClick={() => setStep(2)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Back
              </button>
              <button type="button" onClick={() => { if (validateStep()) setStep(4); }} className="bg-blue-500 text-white px-4 py-2 rounded">
                Next
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Payment Details */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 4: Payment Details</h2>
            <div className="p-4 border rounded bg-gray-100 mb-4">
              <h3 className="font-semibold mb-2">Bank Information</h3>
              <p><strong>Bank Name:</strong> Faysal Bank</p>
              <p><strong>Account Title:</strong> BCCI- FAST NUCES (LHE OPER)</p>
              <p><strong>Account Number:</strong> PK37FAYS0169007900161007</p>
              <hr className="my-2" />
              <p className="text-sm">
                Registration Fees for Competitions with EARLY BIRD DISCOUNT OF 15% only for a LIMITED TIME.
              </p>
              <p className="text-sm mt-2">For any queries contact: Zaid Shabbir - 03332122981</p>
              <p className="text-sm mt-2">
                For Food and Accommodation contact: Zaid Shabbir - 03332122981, Anus Farooq - 03354309476
              </p>
              <p className="text-sm mt-2">Note: The registration fee is non-refundable.</p>
              <p className="text-sm mt-2">
                Complete payment details will be mailed to all team members.
              </p>
            </div>
            <div className="mt-4 text-xl font-bold">
              Amount to Pay: Rs. {getPrice()}
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Transaction ID</label>
              <input
                type="text"
                value={formData.payment.transactionId}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    payment: { ...prev.payment, transactionId: e.target.value },
                  }))
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">IBAN/Account Number</label>
              <input
                type="text"
                value={formData.payment.iban}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    payment: { ...prev.payment, iban: e.target.value },
                  }))
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Payment Date</label>
                <input
                  type="date"
                  value={formData.payment.paymentDate}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      payment: { ...prev.payment, paymentDate: e.target.value },
                    }))
                  }
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Account Holder Name</label>
                <input
                  type="text"
                  value={formData.payment.accountHolderName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      payment: { ...prev.payment, accountHolderName: e.target.value },
                    }))
                  }
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Bank Name</label>
              <input
                type="text"
                value={formData.payment.bankName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    payment: { ...prev.payment, bankName: e.target.value },
                  }))
                }
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            {/* File uploads */}
            <div className="mb-4">
              <label className="block font-medium mb-1">Upload Picture of Proof of Payment</label>
              <input type="file" onChange={handleProofUpload} className="w-full" required />
              {proofUploading && <p className="text-sm text-gray-600">Uploading Proof of Payment...</p>}
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Upload Front CNIC Picture</label>
              <input type="file" onChange={handleCnicUpload} className="w-full" required />
              {cnicUploading && <p className="text-sm text-gray-600">Uploading CNIC Picture...</p>}
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={proofUploading || cnicUploading || !formData.payment.proofOfPayment || !formData.payment.cnicPicture}
              >
                Submit Registration
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
