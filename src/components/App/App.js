import Header from '../Header/Header';
import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer'
import s from './App.module.css';
import React from 'react';

function App() {
  return (
    <div className={s.App}>
        
          <Header />
        

        
          <Carusel />
        

        
          <Footer />
        
    </div>
  );
}

export default App;
