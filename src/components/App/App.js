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
import CaruselContainer from '../Carusel/CaruselContainer'
import NewCar from '../NewCar/NewCar'
import NewFuel from '../NewFuel/NewFuel'

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

    return (
        <div className={s.App}>
            <Header />

            <Routes>
                <Route path="/" element={<CaruselContainer />} />
                <Route path="/add_car" element={<NewCar />} />
                <Route
                    path="/change_car"
                    element={<NewCar carId={'/* добавить carId */'} />}
                />
                <Route path="/add_fuel" element={<NewFuel />} />
                <Route path="/change_fuel" element={<NewFuel />} />
                <Route
                    path="/graf"
                    element={<Graf carData={noCar} key={noCar.carId} />}
                />
                {grafList}
            </Routes>

            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    state,
})

export default connect(mapStateToProps)(App)
