import { useState } from 'react';
import { Link } from 'react-scroll';
import LOGO from "../assets/Logo.png";


const IEEELogo = () => (
  <img src={LOGO} alt="IEEE Logo" width="120" height="40" />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Competitions', to: 'competitions' },
    { name: 'Rule book', to: 'rulebook' },
    { name: 'Timeline', to: 'timeline' },
    { name: 'Contact Us', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <IEEELogo />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md cursor-pointer font-bold"
            >
              {item.name}
            </Link>
            
            ))}
            <button className="border-2 border-primary text-primary bg-transparent px-4 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-colors duration-200">
  REGISTER
</button>
<button className="border-2 border-secondary text-secondary bg-transparent px-4 py-2 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors duration-200">
  JOIN OUR TEAM
</button>



          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 mt-2">
              REGISTER
            </button>
            <button className="w-full bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 mt-2">
              JOIN OUR TEAM
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;