import React from 'react';
import { Phone, User, Building2, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const contacts = [
  {
    name: 'Ali Nasir',
    position: 'General Secretary',
    // phone: '+92 332 4286968',
    // link: 'https://wa.me/923324286968',
  },
  {
    name: 'Waleed Ahmed',
    position: 'Marketing Coordinator',
    // phone: '+92 334 5619443',
    // link: 'https://wa.me/923345619443',
  },
  {
    name: 'Zaid Shabbir',
    position: 'Vice President',
    // phone: '+92 333 2122981',
    // link: 'https://wa.me/923332122981',
  },
  {
    name: 'Arsalan Ahmed',
    position: 'Vice President',
    // phone: '+92 305 4640255',
    // link: 'https://wa.me/923054640255',
  },
];

function Contact() {
  return (
    <div id="contacts" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#035B98] mb-4">Contact Us</h1>
          <p className="text-lg text-[#981A31]">Get in touch with our team members</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <User className="w-6 h-6 text-blue-600 mr-2" />
                  <h2 className="text-xl font-semibold text-[#035B98]">{contact.name}</h2>
                </div>
                <div className="space-y-2">
                  <p className="text-[#981A31]">{contact.position}</p>
                  <div className="flex items-center text-gray-700">
                    {/* <Phone className="w-5 h-5 text-blue-600 mr-2" /> */}
                    {/* <span>{contact.phone}</span> */}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-[#035B98]">IEEE NUCES Lahore chapter</h2>
          </div>
          <div className="text-center space-y-3">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ieee@lhr.nu.edu.pk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gray-700"
            >
              <Mail className="w-5 h-5 text-blue-600 mr-2" />
              <span>ieee@lhr.nu.edu.pk</span>
            </a>
            <p className="text-[#981A31] mt-2">
              852-B Milaad St, Block B Faisal Town, Lahore, 54770
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a
                href="https://m.facebook.com/IEEE.NUCES.LHR/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/ieee_nuces"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </a>
              <a
                href="https://pk.linkedin.com/company/ieee-nuces-lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
