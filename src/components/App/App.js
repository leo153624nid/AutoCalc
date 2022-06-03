import Header from '../Header/Header';
import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer'
import Graf from '../Graf/Graf';
import s from './App.module.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";

function App(props) {
  const userCars = props.userData.userCars;
  let routeList = userCars
                        .map ( car => (<Route 
                                          path={`/graf/${car.carId}`} 
                                          element={<Graf data={car} 
                                          key={car.carId} />}
                                        />));

  return (
      <div className={s.App}>
        
        <Header />

        <Routes>
          <Route path="/" element={<Carusel userCars={userCars} />}/>
          <Route path="/graf" element={<Graf />}/>   {/* Пустое поле для графиков */}
          {routeList}   
        </Routes>
        
        <Footer />

      </div>
  );
}

export default App;
