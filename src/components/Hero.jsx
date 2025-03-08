import Spiral from "../assets/spiral.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="wave-shape"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="relative z-10 md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
            WELCOME TO<br />
            <span className="gradient-text">IEEE WEEK 2025</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            IEEE Week is where innovation meets opportunity.
            Join us for cutting-edge workshops, inspiring talks,
            and exciting competitions. Connect, learn, and
            shape the future of technology.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-opacity-90">
            Discover more
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
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
