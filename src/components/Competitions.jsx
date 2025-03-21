import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MP from "../assets/ICONS/MP.png";
import LFR from "../assets/ICONS/LFR.png";
import PE from "../assets/ICONS/PE.png";
import SW from "../assets/ICONS/SW.png";
import BB from "../assets/ICONS/BB.png";
import CW from "../assets/ICONS/CW.png";
import GC from "../assets/ICONS/GC.png";
import DC from "../assets/ICONS/DC.png";
import RS from "../assets/ICONS/RS.png";
import MB from "../assets/ICONS/MB.png";

const RegisterationLink = '/register';

const competitions = [
  { id: 1, name: 'E-Gaming Competition', icon: GC, color: 'bg-white-500', link: RegisterationLink },
  { id: 2, name: 'Drone Competition', icon: DC, color: 'bg-white-500', link: RegisterationLink },
  { id: 3, name: '100 Minutes Programming', icon: MP, color: 'bg-white-500', link: RegisterationLink },
  { id: 4, name: 'Speed Wiring', icon: SW, color: 'bg-white-500', link: RegisterationLink },
  { id: 5, name: 'Robo Soccer', icon: RS, color: 'bg-white-500', link: RegisterationLink },
  { id: 6, name: 'Cybersecurity Workshop', icon: CW, color: 'bg-white-500', link: RegisterationLink },
  { id: 7, name: 'Project Exhibition', icon: PE, color: 'bg-white-600', link: RegisterationLink },
  { id: 8, name: 'Mini Battle Bots', icon: MB, color: 'bg-white-500', link: RegisterationLink },
  { id: 9, name: 'Line Following Robot', icon: LFR, color: 'bg-white-500', link: RegisterationLink },
  { id: 10, name: 'Battle Bots', icon: BB, color: 'bg-white-500', link: RegisterationLink },
];

const Competitions = () => {
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
    <section id="competitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#035B98]">Competitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              data-aos="fade-up"
              className="flex flex-col items-center p-4 rounded-lg transition-transform duration-200"
            >
              <RouterLink to={competition.link}>
                <div
                  className={`${competition.color} w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full mb-4 transform transition duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-3`}
                >
                  <img
                    src={competition.icon}
                    alt={competition.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition duration-200 animate-float"
                  />
                </div>
              </RouterLink>
              <h3 className="text-center text-sm font-medium text-[#981A31]">{competition.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
