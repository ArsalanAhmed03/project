import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Users, Globe, Lightbulb } from 'lucide-react';
import G1 from "../assets/Gallery/G1.jpg";
import G2 from "../assets/Gallery/G2.jpg";
import G3 from "../assets/Gallery/G3.jpg";
import G4 from "../assets/Gallery/G4.jpg";
import G5 from "../assets/Gallery/G5.jpg";
import G6 from "../assets/Gallery/G6.jpg";
import G7 from "../assets/Gallery/G7.jpg";
import G8 from "../assets/Gallery/G8.jpg";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Content Section */}
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* About IEEE Week */}
          <div className="mb-12" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">About IEEE Week</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              IEEE Week is our annual flagship event that brings together students, professionals, and industry leaders in a week-long celebration of technology and innovation. Through workshops, seminars, and hands-on projects, participants get to explore cutting-edge developments in various engineering fields while building valuable connections with peers and mentors.
            </p>
          </div>

          {/* About IEEE */}
          <div className="mb-16" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">About IEEE</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              IEEE is the world's largest technological organization,
              driving innovation and excellence in engineering,
              computing, and technology through publications,
              conferences, standards, and education.
              IEEE NUCES operates under the IEEE Lahore Section,
              offering students and professionals a platform to
              collaborate and advance technology. Within this branch,
              the IEEE Robotics and Automation Society (RAS) fosters
              innovation in robotics, automation, and AI, providing
              students with opportunities for hands-on projects,
              research, and industry engagement.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-12" data-aos="fade-up">
          <div className="max-w-4xl mx-auto mb-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <Lightbulb className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
            </div>
          </div>
          {/* Responsive grid: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[150px] md:auto-rows-[250px] max-w-[1920px] mx-auto px-2">
            {/* Large feature image: spans full width on mobile, 2 columns and 2 rows on desktop */}
            <div className="col-span-2 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
              <img 
                src={G2}
                alt="Students collaborating"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Regular square image */}
            <div className="overflow-hidden rounded-lg">
              <img 
                src={G1}
                alt="Team meeting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Vertical rectangle: one row on mobile, two on desktop */}
            <div className="overflow-hidden rounded-lg row-span-1 md:row-span-2">
              <img 
                src={G3}
                alt="Workshop session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Another vertical rectangle */}
            <div className="overflow-hidden rounded-lg row-span-1 md:row-span-2">
              <img 
                src={G7}
                alt="Workshop session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Horizontal rectangle: spans 2 columns on all screens */}
            <div className="col-span-2 overflow-hidden rounded-lg">
              <img 
                src={G5}
                alt="Technical presentation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Regular square image */}
            <div className="overflow-hidden rounded-lg">
              <img 
                src={G8}
                alt="Group discussion"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
