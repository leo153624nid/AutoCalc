/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Carusel from '../Carusel/Carusel'
import Footer from '../Footer/Footer'
import Graf from '../Graf/Graf'
import s from './App.module.css'

function App(props) {
    const userCars = props.userData.userCars
    const routeList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/graf/${car.carId}`}
            element={<Graf data={car} key={car.carId} />}
        />
    ))

    return (
        <div className={s.App}>
            <Header />

            <Routes>
                <Route path="/" element={<Carusel userCars={userCars} />} />
                {/* Пустое поле для графиков, если ошибка ДОДЕЛАТЬ */}
                <Route path="/graf" element={<Graf />} />
                {routeList}
            </Routes>

            <Footer />
        </div>
    )
}

export default App
