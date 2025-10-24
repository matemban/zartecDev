
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';


const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
