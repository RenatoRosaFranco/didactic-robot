import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

// Components
import Header from './components/header/Index';
import Footer from './components/footer/Index';

// Pages
import AboutPage from './pages/about/Index';
import ContactPage from "./pages/contact/Index";
import HomePage from "./pages/home/Index";
import PartnershipPage from "./pages/partnership/Index";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
