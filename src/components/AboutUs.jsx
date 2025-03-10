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
    const handleLoad = () => {
      AOS.init({
        duration: 1000,
        once: true,
      });
      AOS.refresh();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <div id="AboutUS" className="min-h-screen bg-gray-50">
      
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-12" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-[#035B98]">About IEEE Week</h2>
            </div>
            <p className="text-lg text-[#981A31] leading-relaxed">
              IEEE Week is our annual flagship event that brings together students, professionals, and industry leaders in a celebration of technology and innovation. Through technical workshops, seminars, and competitions, participants get to explore cutting-edge developments in various engineering fields while building valuable connections with peers and mentors.
            </p>
          </div>

          <div className="mb-16" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-[#035B98]">About IEEE</h2>
            </div>
            <p className="text-lg text-[#981A31] leading-relaxed">
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
              <h2 className="text-3xl font-bold text-[#035B98]">Gallery</h2>
            </div>
          </div>
          {/* Responsive grid: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[150px] md:auto-rows-[250px] max-w-[1920px] mx-auto px-2">
            {/* Large feature image */}
            <div className="col-span-2 row-span-1 md:row-span-2 overflow-hidden rounded-lg">
              <img 
                src={G2}
                alt="Students collaborating"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Regular square image */}
            <div className="overflow-hidden rounded-lg">
              <img 
                src={G1}
                alt="Team meeting"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Vertical rectangle: one row on mobile, two on desktop */}
            <div className="overflow-hidden rounded-lg row-span-1 md:row-span-2">
              <img 
                src={G3}
                alt="Workshop session"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Another vertical rectangle */}
            <div className="overflow-hidden rounded-lg row-span-1 md:row-span-2">
              <img 
                src={G7}
                alt="Workshop session"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* G6: Visible only on mobile */}
            <div className="overflow-hidden rounded-lg block md:hidden">
              <img 
                src={G6}
                alt="Additional gallery image"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Horizontal rectangle */}
            <div className="col-span-2 overflow-hidden rounded-lg">
              <img 
                src={G5}
                alt="Technical presentation"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Regular square image */}
            <div className="overflow-hidden rounded-lg">
              <img 
                src={G8}
                alt="Group discussion"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* G4: Visible only on mobile */}
            <div className="overflow-hidden rounded-lg block md:hidden">
              <img 
                src={G4}
                alt="Additional gallery image"
                loading="lazy"
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
