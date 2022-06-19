/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Graf from '../Graf/Graf'
import s from './App.module.css'
import Carusel from '../Carusel/Carusel'
import NewCar from '../NewCar/NewCar'
import NewFuel from '../NewFuel/NewFuel'
import NewEtc from '../NewEtc/NewEtc'
import ModalProvider from '../../contexts/ModalContext/ModalContextProvider'

function App(props) {
    // Весь Массив машин пользователя
    const userCars = props.state.userData.userCars

    // ПУСТАЯ МАШИНА
    const noCar = props.state.userData.noCar

    const grafList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/graf/${car.carId}`}
            element={<Graf carData={car} key={car.carId} />}
        />
    ))

    // доделать, пропсы редактируемой машины не приходят
    const carChangeList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_car/${car.carId}`}
            element={<NewCar yourCar={car} />}
        />
    ))

    const addFuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/add_fuel/${car.carId}`}
            element={<NewFuel carId={car.carId} />}
        />
    ))

    const addEtcList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/add_etc/${car.carId}`}
            element={<NewEtc carId={car.carId} />}
        />
    ))

    return (
        <ModalProvider>
            <div className={s.App}>
                <Header />

                <Routes>
                    <Route path="/" element={<Carusel />} />
                    <Route
                        path="/add_car"
                        element={<NewCar yourCar={null} />}
                    />
                    {carChangeList}
                    {addFuelList}
                    {/* <Route path="/change_fuel" element={<NewFuel />} /> */}
                    {addEtcList}
                    {/* <Route path="/change_etc" element={<NewEtc />} /> */}
                    <Route
                        path="/graf"
                        element={<Graf carData={noCar} key={noCar.carId} />}
                    />
                    {grafList}
                </Routes>

                <Footer />
            </div>
        </ModalProvider>
    )
}

const mapStateToProps = (state) => ({
    state,
})

export default connect(mapStateToProps)(App)
