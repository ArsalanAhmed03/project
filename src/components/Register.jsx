import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  useEffect(() => {
    const handleLoad = () => {
      AOS.init({ duration: 1000, once: true });
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
    <section id="register" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-right" className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#035B98]">Register Now</h2>
          <p className="text-gray-600 mb-8">
            Ready to put your skills to the test? Register now for IEEE Week competitions and compete in the challenges that excite you! Whether you're into coding, robotics, or problem-solving, there's something for everyone. Don't miss your chance to showcase your talent—sign up today!
          </p>
          <a 
            href="/register" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="relative overflow-hidden border-2 border-[#035B98] text-[#035B98] bg-transparent px-4 py-2 rounded-full font-bold group">
              <span className="absolute left-0 top-0 h-full w-0 bg-[#035B98] transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                REGISTER NOW
              </span>
            </button>
          </a>
        </div>
        <div data-aos="fade-left" className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#981A31]">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            Be part of something big! Join the IEEE Week team and help bring this incredible event to life. Whether you're passionate about organizing, marketing, or tech, there's a place for you. Gain experience, make connections, and be at the heart of the action—sign up now!
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRy942Wkx5yggJDrHEQF9gqJHoXNuPH5K_g5Z6oDHGRQ5exg/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="relative overflow-hidden border-2 border-[#981A31] text-[#981A31] bg-transparent px-4 py-2 rounded-full font-bold group">
              <span className="absolute left-0 top-0 h-full w-0 bg-[#981A31] transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                JOIN NOW
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Register;
