/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'
import s from './App.module.css'
import HeaderContainer from '../Header/HeaderContainer'
import Footer from '../Footer/Footer'
import CaruselContainer from '../Carusel/CaruselContainer'
import GrafContainer from '../Graf/GrafContainer'
import NewCarContainer from '../NewCar/NewCarContainer'
import NewFuelContainer from '../NewFuel/NewFuelContainer'
import NewEtcContainer from '../NewEtc/NewEtcContainer'
import ChangeFuelAndEtcContainer from '../ChangeFuelAndEtc/ChangeFuelAndEtcContainer'
import Login from '../Login/Login'
import ModalProvider from '../../contexts/ModalContext/ModalContextProvider'
import { getNowDateMS } from '../../redux/dateFunctions'
import { getUserDataThunkCreator } from '../../redux/userDataReducer'

function App(props) {
    // Получение данных пользователя
    useEffect(() => {
        if (props.state.userData.userId === null && props.state.auth.isAuth) {
            props.getUserDataThunkCreator(0)
        }
    }, [])

    // Следующий Индекс в массиве машин пользователя (для добавления новой машины в базу данных)
    let nextCarIndex = 0

    // Если данных пользователя нет то рендерится усеченный вариант
    if (!props.state.userData.userCars) {
        return (
            <ModalProvider>
                <div className={s.App}>
                    <HeaderContainer />

                    <Routes>
                        <Route path="/" element={<CaruselContainer />} />

                        <Route
                            path="/add_car"
                            element={
                                <NewCarContainer
                                    yourCar={null}
                                    nextCarIndex={nextCarIndex}
                                    thisCarIndex={0}
                                />
                            }
                        />

                        <Route path="/login" element={<Login />} />
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
    nextCarIndex = userCars.length
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
    const carChangeList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/change_car/${car.carId}`}
            element={
                <NewCarContainer
                    yourCar={car}
                    nextCarIndex={nextCarIndex}
                    thisCarIndex={index}
                />
            }
        />
    ))
    // Список компонет NewFuelContainer для каждой машины
    const addFuelList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/add_fuel/${car.carId}`}
            element={
                <NewFuelContainer
                    car={car}
                    fuelingId={getNowDateMS()}
                    date={getNowDateMS()}
                    thisCarIndex={index}
                />
            }
        />
    ))
    // Список компонет ChangeFuelAndEtc для каждой машины
    const changeFuelList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/change_fuel_list/${car.carId}`}
            element={
                <ChangeFuelAndEtcContainer
                    car={car}
                    fuelNotEtc
                    thisCarIndex={index}
                />
            }
        />
    ))
    // Список компонет NewFuelContainer для каждой машины
    const fuelList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/change_fuel/${car.carId}`}
            element={
                <NewFuelContainer
                    car={car}
                    fuelingId={null}
                    date={null}
                    thisCarIndex={index}
                />
            }
        />
    ))
    // Список компонет NewEtcContainer для каждой машины
    const addEtcList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/add_etc/${car.carId}`}
            element={
                <NewEtcContainer
                    car={car}
                    etcId={getNowDateMS()}
                    date={getNowDateMS()}
                    thisCarIndex={index}
                />
            }
        />
    ))
    // Список компонет ChangeFuelAndEtc для каждой машины
    const changeEtcList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/change_etc_list/${car.carId}`}
            element={
                <ChangeFuelAndEtcContainer
                    car={car}
                    fuelNotEtc={false}
                    thisCarIndex={index}
                />
            }
        />
    ))
    // Список компонет NewEtcContainer для каждой машины
    const etcList = userCars.map((car, index) => (
        <Route
            key={car.carId}
            path={`/change_etc/${car.carId}`}
            element={
                <NewEtcContainer
                    car={car}
                    etcId={null}
                    date={null}
                    thisCarIndex={index}
                />
            }
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
                        element={
                            <NewCarContainer
                                yourCar={null}
                                nextCarIndex={nextCarIndex}
                            />
                        }
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

                    <Route path="/login" element={<Login />} />
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
    getUserDataThunkCreator,
})(App)
