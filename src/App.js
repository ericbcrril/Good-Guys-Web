import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Views
import Home from './views/Home';
//Servicios
import WebDevelopment from './views/servicesViews/WebDevelopment';
import MobileDevelopment from './views/servicesViews/MobileDevelopment';
import Marketing from './views/servicesViews/Marketing';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/desarrollo-web" element={<WebDevelopment />} />
        <Route path="/desarrollo-movil" element={<MobileDevelopment />} />
        <Route path="/cursos-online" element={<Home />} />
        <Route path="/ciber-seguridad" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/gg-casino" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
