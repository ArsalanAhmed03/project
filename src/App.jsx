import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import Register from './components/Register';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Competitions />
      <Gallery />
      <Register />
      <Contact />
    </div>
  );
}

export default App;