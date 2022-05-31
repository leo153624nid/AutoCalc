import Header from '../Header/Header';
import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer'
import s from './App.module.css';
import React from 'react';
import userData from '../../database/CurrentUser.json';


function App() {
  return (
    <div className={s.App}>
        
          <Header {...userData}/>
        
          <Carusel {...userData}/>
        
          <Footer />
        
    </div>
  );
}

export default App;
