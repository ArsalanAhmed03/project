import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

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
          <Link to="competitions" smooth={true} duration={500} offset={-10}>
            <button className="border-2 border-[#035B98] text-[#035B98] bg-transparent px-4 py-2 rounded-full font-bold hover:bg-[#035B98] hover:text-white transition-colors duration-200">
              REGISTER NOW
            </button>
          </Link>
        </div>
        <div data-aos="fade-left" className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#981A31]">Join Our Team</h2>
          <p className="text-gray-600 mb-8">
            Be part of something big! Join the IEEE Week team and help bring this incredible event to life. Whether you're passionate about organizing, marketing, or tech, there's a place for you. Gain experience, make connections, and be at the heart of the action—sign up now!
          </p>
          <button className="border-2 border-[#981A31] text-[#981A31] bg-transparent px-4 py-2 rounded-full font-bold hover:bg-[#981A31] hover:text-white transition-colors duration-200">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
