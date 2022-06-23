/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    setCar,
    changeCarName,
    changeDistance,
    changeYearProd,
    changeYearBuy,
    changeCostBuy,
    changeVin,
    changeNotes,
    changeCarPic,
    changeCarId,
} from '../../redux/newCarReducer'
import { addUserCar, delUserCar } from '../../redux/userDataReducer'
import NewCar from './NewCar'

// Создание нового carId по текущей дате в мс
const getNewCarId = () => {
    const now = new Date()
    return now.getTime()
}

function NewCarContainer({
    newCar,
    yourCar,
    addUserCar,
    delUserCar,
    setCar,
    changeCarName,
    changeDistance,
    changeYearProd,
    changeYearBuy,
    changeCostBuy,
    changeVin,
    changeNotes,
    changeCarPic,
    changeCarId,
}) {
    useEffect(() => {
        // Проверка на новую или редактируемую машину,
        if (newCar.carId === 0 && yourCar !== null) {
            setCar(yourCar)
        } else if (newCar.carId === 0) {
            changeCarId(getNewCarId())
        }
    }, [changeCarId, newCar.carId, setCar, yourCar])

    return (
        <NewCar
            newCar={newCar}
            yourCar={yourCar}
            addUserCar={addUserCar}
            delUserCar={delUserCar}
            changeCarName={changeCarName}
            changeDistance={changeDistance}
            changeYearProd={changeYearProd}
            changeYearBuy={changeYearBuy}
            changeCostBuy={changeCostBuy}
            changeVin={changeVin}
            changeNotes={changeNotes}
            changeCarPic={changeCarPic}
        />
    )
}

const mapStateToProps = (state) => ({
    newCar: state.newCar,
})

export default connect(mapStateToProps, {
    addUserCar,
    delUserCar,
    setCar,
    changeCarName,
    changeDistance,
    changeYearProd,
    changeYearBuy,
    changeCostBuy,
    changeVin,
    changeNotes,
    changeCarPic,
    changeCarId,
})(NewCarContainer)
