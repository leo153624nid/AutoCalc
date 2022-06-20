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
import ChangeFuel from '../ChangeFuel/ChangeFuel'
import ModalProvider from '../../contexts/ModalContext/ModalContextProvider'
import { getNowDateMS } from '../../redux/dateFunctions'

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
            element={
                <NewFuel
                    car={car}
                    fuelingId={getNowDateMS()}
                    date={getNowDateMS()}
                />
            }
        />
    ))

    const changeFuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_fuel_list/${car.carId}`}
            element={<ChangeFuel car={car} />}
        />
    ))

    const fuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_fuel/${car.carId}`}
            element={<NewFuel car={car} fuelingId={null} date={null} />}
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
                    {changeFuelList}
                    {fuelList}
                    {addEtcList}
                    {/* <Route path="/change_etc" element={<NewEtc />} /> */}
                    <Route
                        path="/graf"
                        element={<Graf carData={noCar} key={noCar.carId} />}
                    />
                    {grafList}
                </Routes>
                <div className={s.Footer}>
                    <Footer />
                </div>
            </div>
        </ModalProvider>
    )
}

const mapStateToProps = (state) => ({
    state,
})

export default connect(mapStateToProps)(App)
