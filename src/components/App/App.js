/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Graf from '../Graf/Graf'
import s from './App.module.css'
import CaruselContainer from '../Carusel/CaruselContainer'

function App({ store }) {
    // Весь Массив машин пользователя
    const userCars = store.getState().userData.userCars

    // Массив машин для карусели
    // const carusel = store.getState().userData.carusel

    // ПУСТАЯ МАШИНА
    const noCar = store.getState().userData.noCar

    const routeList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/graf/${car.carId}`}
            element={
                <Graf
                    carData={car}
                    key={car.carId}
                    // idGrafik={store.getState().idGrafik}
                    // dispatch={dispatch}
                />
            }
        />
    ))

    return (
        <div className={s.App}>
            <Header />

            <Routes>
                <Route path="/" element={<CaruselContainer store={store} />} />
                <Route
                    path="/graf"
                    element={
                        <Graf
                            carData={noCar}
                            key={noCar.carId}
                            // idGrafik={state.idGrafik}
                            // dispatch={dispatch}
                        />
                    }
                />
                {routeList}
            </Routes>

            <Footer />
        </div>
    )
}

export default App
