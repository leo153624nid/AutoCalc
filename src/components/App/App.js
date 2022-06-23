/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import s from './App.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CaruselContainer from '../Carusel/CaruselContainer'
import GrafContainer from '../Graf/GrafContainer'
import NewCarContainer from '../NewCar/NewCarContainer'
import NewFuelContainer from '../NewFuel/NewFuelContainer'
import NewEtcContainer from '../NewEtc/NewEtcContainer'
import ChangeFuelAndEtc from '../ChangeFuelAndEtc/ChangeFuelAndEtc'
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
            element={<GrafContainer carData={car} key={car.carId} />}
        />
    ))

    const carChangeList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_car/${car.carId}`}
            element={<NewCarContainer yourCar={car} />}
        />
    ))

    const addFuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/add_fuel/${car.carId}`}
            element={
                <NewFuelContainer
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
            element={<ChangeFuelAndEtc car={car} fuelNotEtc />}
        />
    ))

    const fuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_fuel/${car.carId}`}
            element={
                <NewFuelContainer car={car} fuelingId={null} date={null} />
            }
        />
    ))

    const addEtcList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/add_etc/${car.carId}`}
            element={
                <NewEtcContainer
                    car={car}
                    etcId={getNowDateMS()}
                    date={getNowDateMS()}
                />
            }
        />
    ))

    const changeEtcList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_etc_list/${car.carId}`}
            element={<ChangeFuelAndEtc car={car} fuelNotEtc={false} />}
        />
    ))

    const etcList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_etc/${car.carId}`}
            element={<NewEtcContainer car={car} etcId={null} date={null} />}
        />
    ))

    return (
        <ModalProvider>
            <div className={s.App}>
                <Header />

                <Routes>
                    <Route path="/" element={<CaruselContainer />} />

                    <Route
                        path="/add_car"
                        element={<NewCarContainer yourCar={null} />}
                    />
                    {carChangeList}

                    {addFuelList}
                    {changeFuelList}
                    {fuelList}

                    {addEtcList}
                    {changeEtcList}
                    {etcList}

                    <Route
                        path="/graf"
                        element={
                            <GrafContainer carData={noCar} key={noCar.carId} />
                        }
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
