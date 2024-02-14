import React from 'react';
import './style.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Services from './components/Services';

export default function App() {
  return ( 
    <Router>
     <Navigation/>
      <Routes>
    
      <Route path='/' element={ <Home/>} />

     <Route path='/aboutus' element={ <AboutUs/>} />
     <Route path='/services' element={  <Services/>} />
     
     
     <Route path='/conatactus' element={ <ContactUs/>} />
     
     

      </Routes>

      <Footer/>
      </Router>
  );
}
