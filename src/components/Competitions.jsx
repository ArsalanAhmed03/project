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


const competitions = [
  {
    id: 1,
    name: 'Gaming Competition',
    icon: GC, // imported variable for gaming icon
    color: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Drone Competition',
    icon: DC, // imported variable for drone icon
    color: 'bg-teal-500',
  },
  {
    id: 3,
    name: '180 Minutes Programming',
    icon: MP, // imported variable for programming icon
    color: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Speed Wiring',
    icon: SW, // imported variable for wiring icon
    color: 'bg-orange-500',
  },
  {
    id: 5,
    name: 'Robo Soccer',
    icon: RS, // imported variable for robot icon
    color: 'bg-green-500',
  },
  {
    id: 6,
    name: 'Cybersecurity Workshop',
    icon: CW, // imported variable for security icon
    color: 'bg-blue-500',
  },
  {
    id: 7,
    name: 'Project Exhibition',
    icon: PE, // imported variable for project icon
    color: 'bg-red-600',
  },
  {
    id: 8,
    name: 'Mini Battle Bots',
    icon: MB, // imported variable for battle icon
    color: 'bg-pink-500',
  },
  {
    id: 9,
    name: 'Line Following Robot',
    icon: LFR, // imported variable for line-following robot icon
    color: 'bg-indigo-500',
  },
  {
    id: 10,
    name: 'Battle Bots',
    icon: BB, // imported variable for battle bots icon
    color: 'bg-yellow-500',
  },
];


const Competitions = () => {
  return (
    <section id="competitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Competitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className="flex flex-col items-center p-4 rounded-lg hover:transform hover:scale-105 transition-transform duration-200"
            >
              <div className={`${competition.color} p-4 rounded-full mb-4`}>
                <img
                  src={competition.icon}
                  alt={competition.name}
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-center text-sm font-medium">{competition.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;