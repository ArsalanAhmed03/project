import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import Register from './components/Register';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Countdown from './components/CountDown';

function App() {
  const targetDate = new Date('2025-04-07T23:59:59');
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Countdown targetDate={targetDate} />
      <Competitions />
      <AboutUs />
      <Register />
      <Contact />
    </div>
  );
}

export default App;