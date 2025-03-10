import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import Register from './components/Register';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Competitions />
      <AboutUs />
      <Register />
      <Contact />
    </div>
  );
}

export default App;