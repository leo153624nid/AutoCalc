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
    const noCar = {
        carId: 0,
        carName: 'Нет машины',
        carPic: 'NoCarImage',
        distance: 0,
        fuelConsumptions: 0,
        etcConsumptions: 0,
        allMonth: 0,
        costOneKm: 0,
        costOneDay: 0,
        fuelings: [],
        etc: [],
    }
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
                <Route path="/graf" element={<Graf data={noCar} />} />
                {routeList}
            </Routes>

            <Footer />
        </div>
    )
}

export default App
