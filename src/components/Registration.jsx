import React, { useState } from "react";
// Import logo assets from your ICONS folder.
import MP from "../assets/ICONS/MP.png";
import LFR from "../assets/ICONS/LFR.png";
import PE from "../assets/ICONS/PE.png";
import SW from "../assets/ICONS/SW.png";
import BB from "../assets/ICONS/BB.png";
import CW from "../assets/ICONS/CW.png";
import GC from "../assets/ICONS/GC.png";
import DC from "../assets/ICONS/DC.png";
import RS from "../assets/ICONS/RS.png";

// Competition data with pricing and team settings.
const competitionsData = [
  {
    label: "Speed Wiring",
    value: "speed_wiring",
    price: 1275,
    maxMembers: 3,
  },
  {
    label: "100 Minutes Programming",
    value: "programming",
    price: 1530,
    maxMembers: 3,
  },
  {
    label: "Battle Bots",
    value: "battle_bots",
    maxMembers: 3,
    categories: { light: 2550, heavy: 4250 },
  },
  {
    label: "Line Following Robot",
    value: "line_following",
    price: 1700,
    maxMembers: 3,
  },
  {
    label: "Robo Soccer",
    value: "robo_soccer",
    price: 1530,
    maxMembers: 3,
  },
  {
    label: "Drone Competition",
    value: "drone_competition",
    price: 2550,
    maxMembers: 3,
  },
  {
    label: "E-Gaming",
    value: "e_gaming",
    maxMembers: 1,
    games: { fifa: 1275, tekken: 1275 },
  },
  {
    label: "Project Exhibition",
    value: "project_exhibition",
    price: 2550,
    maxMembers: 3,
  },
  {
    label: "Cybersecurity Workshop+Competition",
    value: "cybersecurity",
    price: 1275,
    maxMembers: 1,
  },
];

// Mapping from competition value to its corresponding logo.
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

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    // Default to Speed Wiring
    competition: "speed_wiring",
    competitionCategory: "",
    competitionGame: "",
    teamName: "",
    institute: "",
    discountCode: "",
    participants: [{ name: "", cnic: "", gender: "", phn: "", email: "" }],
    payment: {
      transactionId: "",
      amount: "",
      iban: "",
      paymentDate: "",
      accountHolderName: "",
      bankName: "",
      teamName: "",
      proofOfPayment: null, // file object
      cnicPicture: null,    // file object
    },
  });

  // Helper: Convert a File object to a Base64 string.
  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Validate required fields for each step.
  const validateStep = () => {
    if (step === 1) {
      if (!formData.email.trim()) {
        alert("Please enter your email.");
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
      if (formData.competition === "e_gaming" && !formData.competitionGame) {
        alert("Please select a game for E-Gaming.");
        return false;
      }
    }
    if (step === 3) {
      for (let i = 0; i < formData.participants.length; i++) {
        let p = formData.participants[i];
        if (!p.name.trim() || !p.cnic.trim() || !p.gender || !p.phn.trim() || !p.email.trim()) {
          alert(`All fields are required for Participant ${i + 1}.`);
          return false;
        }
      }
    }
    if (step === 4) {
      const p = formData.payment;
      if (
        !p.transactionId.trim() ||
        !p.amount ||
        !p.iban.trim() ||
        !p.paymentDate ||
        !p.accountHolderName.trim() ||
        !p.bankName.trim() ||
        !p.teamName.trim() ||
        !p.proofOfPayment ||
        !p.cnicPicture
      ) {
        alert("All payment fields are required.");
        return false;
      }
    }
    return true;
  };

  // Update top-level field.
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Update competition-specific details.
  const updateCompetitionDetail = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Update participant details.
  const updateParticipant = (index, field, value) => {
    const updatedParticipants = formData.participants.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    setFormData((prev) => ({ ...prev, participants: updatedParticipants }));
  };

  // Add a new participant if under max limit.
  const addParticipant = () => {
    const comp = competitionsData.find((c) => c.value === formData.competition);
    if (comp && formData.participants.length < comp.maxMembers) {
      setFormData((prev) => ({
        ...prev,
        participants: [
          ...prev.participants,
          { name: "", cnic: "", gender: "", phn: "", email: "" },
        ],
      }));
    }
  };

  // Remove a participant.
  const removeParticipant = (index) => {
    const updatedParticipants = formData.participants.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, participants: updatedParticipants }));
  };

  // Handle file input changes.
  const handleFileChange = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      payment: { ...prev.payment, [field]: file },
    }));
  };

  // Get the current competition object.
  const currentCompetition = competitionsData.find(
    (c) => c.value === formData.competition
  );

  // Calculate the base price then apply discount if code PUCIT30 is entered.
  const getPrice = () => {
    const basePrice = (() => {
      if (!currentCompetition) return "";
      if (currentCompetition.value === "battle_bots") {
        if (formData.competitionCategory && currentCompetition.categories) {
          return currentCompetition.categories[formData.competitionCategory];
        }
        return "";
      }
      if (currentCompetition.value === "e_gaming") {
        if (formData.competitionGame && currentCompetition.games) {
          return currentCompetition.games[formData.competitionGame];
        }
        return "";
      }
      return currentCompetition.price;
    })();

    if (basePrice === "") return "";
    if (formData.discountCode.trim().toUpperCase() === "PUCIT30") {
      return Math.round(basePrice * 0.7);
    }
    return basePrice;
  };

  // Final submission: convert files to Base64, send data, show alert, and redirect.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsLoading(true);

    // Convert file inputs to Base64 strings.
    let proofOfPaymentBase64 = "";
    let cnicPictureBase64 = "";
    let proofOfPaymentMime = "";
    let cnicPictureMime = "";
    let proofOfPaymentName = "";
    let cnicPictureName = "";

    if (formData.payment.proofOfPayment) {
      const base64String = await convertFileToBase64(formData.payment.proofOfPayment);
      proofOfPaymentBase64 = base64String.split(",")[1];
      proofOfPaymentMime = formData.payment.proofOfPayment.type;
      proofOfPaymentName = formData.payment.proofOfPayment.name;
    }

    if (formData.payment.cnicPicture) {
      const base64String2 = await convertFileToBase64(formData.payment.cnicPicture);
      cnicPictureBase64 = base64String2.split(",")[1];
      cnicPictureMime = formData.payment.cnicPicture.type;
      cnicPictureName = formData.payment.cnicPicture.name;
    }

    const payload = {
      ...formData,
      computedPrice: getPrice(),
      payment: {
        ...formData.payment,
        proofOfPaymentBase64,
        cnicPictureBase64,
        proofOfPaymentMime,
        cnicPictureMime,
        proofOfPaymentName,
        cnicPictureName,
      },
    };

    console.log("Submitting data:", payload);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz6lzlsRg8lRW6deMsYjXmJgSlidDAe5R6zwt4QdLOTqY4tWF8R9pSmnpc4TgNls76Saw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      // With no-cors mode, response is opaque so we assume success if no error is thrown.
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
          {/* You can add a spinner here if desired */}
        </div>
      )}
      <h1 className="text-3xl font-bold mb-6 text-center">
        IEEE WEEK '25 REGISTRATION FORM
      </h1>
      <form onSubmit={handleSubmit}>
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
              <button
                type="button"
                onClick={() => {
                  if (validateStep()) setStep(2);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
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
                  <div className="w-24 h-24 bg-gray-300 flex items-center justify-center">
                    Logo
                  </div>
                )}
              </div>
              <div>
                <strong>Price: </strong>
                {getPrice() ? `Rs. ${getPrice()}` : "Select options below"}
              </div>
            </div>
            {formData.competition === "battle_bots" && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Choose Category</label>
                <select
                  value={formData.competitionCategory}
                  onChange={(e) =>
                    updateCompetitionDetail("competitionCategory", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="light">Light Weight</option>
                  <option value="heavy">Heavy Weight</option>
                </select>
              </div>
            )}
            {formData.competition === "e_gaming" && (
              <div className="mb-4">
                <label className="block font-medium mb-1">Choose Game</label>
                <select
                  value={formData.competitionGame}
                  onChange={(e) =>
                    updateCompetitionDetail("competitionGame", e.target.value)
                  }
                  className="w-full border px-3 py-2 rounded"
                  required
                >
                  <option value="">Select Game</option>
                  <option value="fifa">Fifa</option>
                  <option value="tekken">Tekken</option>
                </select>
              </div>
            )}
            <div className="mb-4">
              <label className="block font-medium mb-1">Team Name</label>
              <input
                type="text"
                value={formData.teamName}
                onChange={(e) => updateField("teamName", e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Institute</label>
              <input
                type="text"
                value={formData.institute}
                onChange={(e) => updateField("institute", e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Ambassador/Discount Code</label>
              <input
                type="text"
                value={formData.discountCode}
                onChange={(e) => updateField("discountCode", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  if (validateStep()) setStep(3);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
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
                  <button
                    type="button"
                    onClick={() => removeParticipant(index)}
                    className="absolute top-2 right-2 text-red-500"
                  >
                    Remove
                  </button>
                )}
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">Name</label>
                  <input
                    type="text"
                    value={participant.name}
                    onChange={(e) => updateParticipant(index, "name", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">CNIC</label>
                  <input
                    type="text"
                    value={participant.cnic}
                    onChange={(e) => updateParticipant(index, "cnic", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">Gender</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`gender-${index}`}
                        value="male"
                        checked={participant.gender === "male"}
                        onChange={(e) => updateParticipant(index, "gender", e.target.value)}
                        className="mr-1"
                        required
                      />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`gender-${index}`}
                        value="female"
                        checked={participant.gender === "female"}
                        onChange={(e) => updateParticipant(index, "gender", e.target.value)}
                        className="mr-1"
                        required
                      />
                      Female
                    </label>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block font-medium text-sm mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={participant.phn}
                    onChange={(e) => updateParticipant(index, "phn", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1">Email</label>
                  <input
                    type="email"
                    value={participant.email}
                    onChange={(e) => updateParticipant(index, "email", e.target.value)}
                    className="w-full border px-3 py-2 rounded"
                    required
                  />
                </div>
              </div>
            ))}
            {currentCompetition &&
              formData.participants.length < currentCompetition.maxMembers && (
                <button
                  type="button"
                  onClick={addParticipant}
                  className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add Participant
                </button>
              )}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  if (validateStep()) setStep(4);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
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
              <p>
                <strong>Bank Name:</strong> Faysal Bank
              </p>
              <p>
                <strong>Account Title:</strong> BCCI- FAST NUCES (LHE OPER)
              </p>
              <p>
                <strong>Account Number:</strong> PK37FAYS0169007900161007
              </p>
              <hr className="my-2" />
              <p className="text-sm">
                Registration Fees for Competitions with EARLY BIRD DISCOUNT OF 15% only for a LIMITED TIME.
              </p>
              <p className="text-sm mt-2">
                For any queries contact: Zaid Shabbir - 03332122981
              </p>
              <p className="text-sm mt-2">
                For Food and Accommodation contact: Zaid Shabbir - 03332122981, Anus Farooq - 03354309476
              </p>
              <p className="text-sm mt-2">
                Note: The registration fee is non-refundable.
              </p>
              <p className="text-sm mt-2">
                Complete payment details will be mailed to all team members.
              </p>
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
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Amount</label>
                <input
                  type="number"
                  value={formData.payment.amount}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      payment: { ...prev.payment, amount: e.target.value },
                    }))
                  }
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
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
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
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
              <div>
                <label className="block font-medium mb-1">Team Name</label>
                <input
                  type="text"
                  value={formData.payment.teamName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      payment: { ...prev.payment, teamName: e.target.value },
                    }))
                  }
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Upload Picture of Proof of Payment</label>
              <input
                type="file"
                onChange={(e) =>
                  handleFileChange("proofOfPayment", e.target.files[0])
                }
                className="w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Upload CNIC Picture 1</label>
              <input
                type="file"
                onChange={(e) =>
                  handleFileChange("cnicPicture", e.target.files[0])
                }
                className="w-full"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
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
