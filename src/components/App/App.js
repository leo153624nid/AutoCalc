import Header from '../Header/Header';
import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer'
import Graf from '../Graf/Graf';
import s from './App.module.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

import userData from '../../database/CurrentUser.json';

function App() {
  return (
    
      <div className={s.App}>
        
        <Header {...userData}/>

        <Routes>
          <Route path="/" element={<Carusel {...userData} />}/>
          <Route path="/graf" element={<Graf {...userData} />}/>
        </Routes>
        
        <Footer />

      </div>
 
  );
}

export default App;
