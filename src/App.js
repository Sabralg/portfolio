import React from 'react';
import "./index.css";
import Home from './routes/Home';
import Certifications from './routes/Certifications';
import Competences from './routes/Competences';
import Contact from './routes/Contact';
import Parcours from './routes/Parcours';
import Projets from './routes/Projets';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/parcours' element={<Parcours />}/>
        <Route path='/competences' element={<Competences />}/>
        <Route path='/projets' element={<Projets />}/>
        <Route path='/certification' element={<Certifications />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
