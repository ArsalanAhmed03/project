import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competitions from './components/Competitions';
import RegistrationForm from './components/Registration';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Countdown from './components/CountDown';
import Register from './components/Register';

// Define a homepage component that bundles your main sections.
function HomePage({ targetDate }) {
  return (
    <>
      <Hero />
      <Countdown targetDate={targetDate} />
      <Competitions />
      <Register />
      <AboutUs />
      <Contact />
    </>
  );
}

function App() {
  const targetDate = new Date('2025-04-07T23:59:59');
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage targetDate={targetDate} />} />
        {/* Registration page route */}
        {/* <Route path="/register" element={<RegistrationForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
