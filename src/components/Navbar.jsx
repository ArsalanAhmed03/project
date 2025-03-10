import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-scroll';
import LOGO from "../assets/Logo.png";
import MAINLOGO from "../assets/MainLogo.png";

const IEEELogo = () => (
  <img src={LOGO} alt="IEEE Logo" width="120" height="40" loading="lazy" />
);

const IEEEMainLogo = () => (
  <img src={MAINLOGO} alt="IEEE Main Logo" width="120" height="40" loading="lazy" />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = useMemo(() => [
    { name: 'Competitions', to: 'competitions' },
    // { name: 'RuleBook', to: 'rulebook' },
    // { name: 'TimeLine', to: 'timeLine' },
    { name: 'Contact Us', to: 'contacts' },
  ], []);
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <IEEEMainLogo />
            <IEEELogo />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-[#035B98] px-3 py-2 rounded-md cursor-pointer font-bold"
              >
                {item.name}
              </Link>
            ))}
            <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScUnTjZNXi95m5JPwB3Ibhp_MKIVUL5hGHifpc62vwxYxVRDw/viewform?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <button className="border-2 border-[#035B98] text-[#035B98] bg-transparent px-4 py-2 rounded-full font-bold hover:bg-[#035B98] hover:text-white transition-colors duration-200">
              REGISTER
            </button>
          </a>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRy942Wkx5yggJDrHEQF9gqJHoXNuPH5K_g5Z6oDHGRQ5exg/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="border-2 border-[#981A31] text-[#981A31] bg-transparent px-4 py-2 rounded-full font-bold hover:bg-[#981A31] hover:text-white transition-colors duration-200">
              JOIN OUR TEAM
            </button>
          </a>

          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-[#035B98]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-[#035B98] block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLScUnTjZNXi95m5JPwB3Ibhp_MKIVUL5hGHifpc62vwxYxVRDw/viewform?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="w-full bg-[#035B98] text-white px-4 py-2 rounded-md hover:bg-opacity-90 mt-2">
    REGISTER
  </button>
</a>
<a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSdRy942Wkx5yggJDrHEQF9gqJHoXNuPH5K_g5Z6oDHGRQ5exg/viewform" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="w-full bg-[#981A31] text-white px-4 py-2 rounded-md hover:bg-opacity-90 mt-2">
    JOIN OUR TEAM
  </button>
</a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
