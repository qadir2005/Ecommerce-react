import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Offer from './Components/Offer';
import About from './pages/About';
import Contact from "./pages/contact"
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Products from './pages/Products';

function App() {
  return (

    <Router>
    <Offer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element= {<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/product" element={<Products />} />
      </Routes>

    </Router>
  );
}

export default App;
