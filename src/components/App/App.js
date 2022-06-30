/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import s from './App.module.css'
import HeaderContainer from '../Header/HeaderContainer'
import Footer from '../Footer/Footer'
import CaruselContainer from '../Carusel/CaruselContainer'
import GrafContainer from '../Graf/GrafContainer'
import NewCarContainer from '../NewCar/NewCarContainer'
import NewFuelContainer from '../NewFuel/NewFuelContainer'
import NewEtcContainer from '../NewEtc/NewEtcContainer'
import ChangeFuelAndEtcContainer from '../ChangeFuelAndEtc/ChangeFuelAndEtcContainer'
import ModalProvider from '../../contexts/ModalContext/ModalContextProvider'
import { getNowDateMS } from '../../redux/dateFunctions'
import { setUserData } from '../../redux/userDataReducer'
import { setUser } from '../../redux/authReducer'

function App(props) {
    useEffect(() => {
        if (props.state.userData === null) {
            axios
                .get(
                    'https://autocalculato-default-rtdb.europe-west1.firebasedatabase.app/users/0.json'
                )
                .then((response) => {
                    if (props.state.auth.isAuth) {
                        props.setUser(
                            response.data.userId,
                            response.data.login,
                            response.data.email,
                            response.data.userName
                        )
                        props.setUserData(response.data)
                    }
                })
        }
    }, [])

    // Если данных пользователя нет то рендерится усеченный вариант
    if (!props.state.userData) {
        return (
            <ModalProvider>
                <div className={s.App}>
                    <HeaderContainer />

                    <Routes>
                        <Route path="/" element={<CaruselContainer />} />

                        <Route
                            path="/add_car"
                            element={<NewCarContainer yourCar={null} />}
                        />
                    </Routes>
                    <div className={s.Footer}>
                        <Footer />
                    </div>
                </div>
            </ModalProvider>
        )
    }

    // Весь Массив машин пользователя
    const userCars = props.state.userData.userCars
    // ПУСТАЯ МАШИНА
    const noCar = {
        carId: 0,
        carName: '-',
        carPic: 'https://firebasestorage.googleapis.com/v0/b/autocalculato.appspot.com/o/noCar.jpg?alt=media&token=218b6f0e-0b96-45e1-87d7-030e0d7c614e',
        distance: 0,
        fuelConsumptions: 0,
        etcConsumptions: 0,
        allMonth: 0,
        costOneKm: 0,
        costOneDay: 0,
        fuelings: [],
        etc: [],
    }
    // Список компонет Graf для каждой машины
    const grafList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/graf/${car.carId}`}
            element={<GrafContainer carData={car} key={car.carId} />}
        />
    ))
    // Список компонет NewCarContainer для каждой машины
    const carChangeList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_car/${car.carId}`}
            element={<NewCarContainer yourCar={car} />}
        />
    ))
    // Список компонет NewFuelContainer для каждой машины
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
    // Список компонет ChangeFuelAndEtc для каждой машины
    const changeFuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_fuel_list/${car.carId}`}
            element={<ChangeFuelAndEtcContainer car={car} fuelNotEtc />}
        />
    ))
    // Список компонет NewFuelContainer для каждой машины
    const fuelList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_fuel/${car.carId}`}
            element={
                <NewFuelContainer car={car} fuelingId={null} date={null} />
            }
        />
    ))
    // Список компонет NewEtcContainer для каждой машины
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
    // Список компонет ChangeFuelAndEtc для каждой машины
    const changeEtcList = userCars.map((car) => (
        <Route
            key={car.carId}
            path={`/change_etc_list/${car.carId}`}
            element={<ChangeFuelAndEtcContainer car={car} fuelNotEtc={false} />}
        />
    ))
    // Список компонет NewEtcContainer для каждой машины
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
                <HeaderContainer />

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

export default connect(mapStateToProps, {
    setUserData,
    setUser,
})(App)
