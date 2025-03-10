import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Spiral from "../assets/spiral.png";

const Hero = () => {
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
    <div className="relative min-h-screen flex items-center pt-20">
      <div className="wave-shape"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div data-aos="fade-right" className="relative z-10 md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#035B98] mb-6">
            WELCOME TO<br />
            <span className="gradient-text">IEEE WEEK 2025</span>
          </h1>
          <p className="text-lg md:text-xl text-[#981A31] mb-8 max-w-2xl">
            IEEE Week is where innovation meets opportunity.
            Join us for cutting-edge workshops, inspiring talks,
            and exciting competitions. Connect, learn, and
            shape the future of technology.
          </p>
          <Link to="AboutUS" smooth={true} duration={500} offset={-70}>
            <button className="bg-[#981A31] text-white px-8 py-3 rounded-md text-lg hover:bg-opacity-90">
              Discover more
            </button>
          </Link>
        </div>
        <div data-aos="fade-left" className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src={Spiral}
            alt="Spiral Graphic"
            className="w-full h-auto animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
