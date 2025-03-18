import React, { useState, useCallback, useMemo } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
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
    { name: 'Contact Us', to: 'contacts' },
    { name: 'Rule Book', href: '/IEEE RULEBOOK.pdf', download: true },
    { name: 'Time Line', href: '/IEEE WEEK TIMELINE.pdf', download: true }
  ], []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
          <RouterLink to="/">
            <IEEEMainLogo />
          </RouterLink>
          <RouterLink to="/">
            <IEEELogo />
          </RouterLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  download={item.download}
                  className="text-gray-700 hover:text-[#035B98] px-3 py-2 rounded-md cursor-pointer font-bold"
                >
                  {item.name}
                </a>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-[#035B98] px-3 py-2 rounded-md cursor-pointer font-bold"
                >
                  {item.name}
                </ScrollLink>
              )
            )}
            {/* REGISTER button navigates to the registration form route */}
            <RouterLink to="/register">
              <button className="relative overflow-hidden border-2 border-[#035B98] text-[#035B98] bg-transparent px-4 py-2 rounded-full font-bold group">
                <span className="absolute left-0 top-0 h-full w-0 bg-[#035B98] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  REGISTER
                </span>
              </button>
            </RouterLink>
            {/* <a 
              href="https://docs.google.com/forms/d/19hqPzhZmVpff3BePzhCLa4OK2xp6UJFqCpuXen__T48/edit?ts=67d8ba68" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="relative overflow-hidden border-2 border-[#035B98] text-[#035B98] bg-transparent px-4 py-2 rounded-full font-bold group">
                <span className="absolute left-0 top-0 h-full w-0 bg-[#035B98] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  REGISTER
                </span>
              </button>
            </a> */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRy942Wkx5yggJDrHEQF9gqJHoXNuPH5K_g5Z6oDHGRQ5exg/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="relative overflow-hidden border-2 border-[#981A31] text-[#981A31] bg-transparent px-4 py-2 rounded-full font-bold group">
                <span className="absolute left-0 top-0 h-full w-0 bg-[#981A31] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  JOIN OUR TEAM
                </span>
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
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  download={item.download}
                  className="text-gray-700 hover:text-[#035B98] block px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-[#035B98] block px-3 py-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              )
            )}
            {/* Mobile REGISTER button using RouterLink */}
            <RouterLink to="/register">
              <button 
                onClick={() => setIsOpen(false)}
                className="relative overflow-hidden w-full bg-[#035B98] text-white px-4 py-2 rounded-md group mt-2"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-[#035B98] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  REGISTER
                </span>
              </button>
            </RouterLink>
            {/* <a 
              href="https://docs.google.com/forms/d/19hqPzhZmVpff3BePzhCLa4OK2xp6UJFqCpuXen__T48/edit?ts=67d8ba68" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="relative overflow-hidden w-full bg-[#035B98] text-white px-4 py-2 rounded-md group mt-2">
                <span className="absolute left-0 top-0 h-full w-0 bg-[#035B98] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  REGISTER
                </span>
              </button>
            </a> */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRy942Wkx5yggJDrHEQF9gqJHoXNuPH5K_g5Z6oDHGRQ5exg/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="relative overflow-hidden w-full bg-[#981A31] text-white px-4 py-2 rounded-md group mt-2">
                <span className="absolute left-0 top-0 h-full w-0 bg-[#981A31] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  JOIN OUR TEAM
                </span>
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navbar);
