import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

function PostPoned() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-red-50 p-1">
          <div className="flex items-center justify-center gap-2 text-red-600">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Important Notice</span>
          </div>
        </div>
        
        <div className="p-6 md:p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Event Postponed
            </h1>
            <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <Calendar className="w-12 h-12 text-red-500" />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Due to extended holidays, administrative delays, and the midterm schedule, we have made the difficult decision to postpone IEEE Week.
                <br />
                With an overwhelming response in registrations and great enthusiasm from the participants, we wanted to ensure that the event is executed to its fullest potential rather than rushing under constraints.
                <br />
                Despite the challenges, our team remains dedicated, and we will share updates on the new dates soon. We appreciate your patience and support.
                <br />
                Please reach out on ieee@lhr.nu.edu.pk for any queries.
            </p>
          </div>

          {/* <div className="bg-gray-50 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-500 text-center">
              For any inquiries, please contact our event team at{' '}
              <a href="mailto:events@example.com" className="text-red-600 hover:text-red-700 font-medium">
                events@example.com
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PostPoned;