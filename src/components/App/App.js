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

function App({ state, changeCarusel }) {
    // Весь Массив машин пользователя
    const userCars = state.userData.userCars

    // Массив машин для карусели
    const carusel = state.carusel

    // ПУСТАЯ МАШИНА
    const noCar = state.noCar

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
                <Route
                    path="/"
                    element={
                        <Carusel
                            carusel={carusel}
                            changeCarusel={changeCarusel}
                        />
                    }
                />
                <Route path="/graf" element={<Graf data={noCar} />} />
                {routeList}
            </Routes>

            <Footer />
        </div>
    )
}

export default App
