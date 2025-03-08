import React from 'react';
import { Phone, User, Building2, Mail } from 'lucide-react';

const contacts = [
  {
    name: 'Ali Nasir',
    position: 'General Secretary',
    phone: '+92 332 4286968' 
  },
  {
    name: 'Zaid Shabbir',
    position: 'Vice President',
    phone: '+92 333 2122981' 
  },
  {
    name: 'Arsalan Ahmed',
    position: 'Vice President',
    phone: '+92 305 4640255' 
  },
  {
    name: 'Waleed Ahmed',
    position: 'RAS Assistant Vice President',
    phone: '+92 334 5619443'
  }
];

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team members</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">{contact.name}</h2>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">{contact.position}</p>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IEEE Main Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">IEEE FAST Lahore</h2>
          </div>
          <div className="text-center space-y-3">
            <p className="text-gray-700">Institute of Electrical and Electronics Engineers</p>
            <div className="flex items-center justify-center text-gray-700">
              <Mail className="w-5 h-5 text-blue-600 mr-2" />
              <span>ieee@lhr.nu.edu.pk</span>
            </div>
            <p className="text-gray-600 mt-2">
            852-B Milaad St, Block B Faisal Town, Lahore, 54770
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;