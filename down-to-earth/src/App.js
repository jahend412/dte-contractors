import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from  './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Excavation from './components/Services/Excavation';
import Grading from './components/Services/Grading';
import SepticSystems from './components/Services/SepticSystems';
import SewerLaterals from './components/Services/SewerLaterals';
import WaterLaterals from './components/Services/WaterLaterals';
import Demolition from './components/Services/Demolition';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/excavation' element={<Excavation />} />
        <Route path='/services/grading' element={<Grading />} />
        <Route path='/services/septic' element={<SepticSystems />} />
        <Route path='/services/sewer' element={<SewerLaterals />} />
        <Route path='/services/water' element={<WaterLaterals />} />
        <Route path='/services/demolition' element={<Demolition />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
