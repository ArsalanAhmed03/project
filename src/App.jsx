import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import Register from './components/Register';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import AutoshowSection from './components/AutoShowSection';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" >
      <Navbar />
      <Hero />
      <Competitions />
      <AutoshowSection />
      <Gallery />
      <Register />
      <Contact />
    </div>
  );
}

export default App;