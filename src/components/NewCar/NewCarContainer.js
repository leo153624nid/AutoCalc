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
import {
    patchUserCarThunkCreator,
    deleteUserCarThunkCreator,
} from '../../redux/userDataReducer'
import NewCar from './NewCar'

// Создание нового carId по текущей дате в мс
const getNewCarId = () => {
    const now = new Date()
    return now.getTime()
}

function NewCarContainer({
    newCar,
    yourCar,
    patchUserCarThunkCreator,
    deleteUserCarThunkCreator,
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
    nextCarIndex,
    thisCarIndex,
}) {
    // Установка carId в зависимости от новой или редактируемой машины
    useEffect(() => {
        // Проверка на новую или редактируемую машину,
        if (newCar.carId === 0 && yourCar !== null) {
            setCar(yourCar)
        } else if (newCar.carId === 0) {
            changeCarId(getNewCarId())
        }
    }, [])

    // Обновление или добавление машины
    const onAddUserCar = () => {
        if (yourCar !== null) {
            patchUserCarThunkCreator(0, newCar, thisCarIndex)
        } else {
            patchUserCarThunkCreator(0, newCar, nextCarIndex)
        }
    }

    // Удаление машины
    const onDelUserCar = () => {
        deleteUserCarThunkCreator(0, thisCarIndex, newCar.carId)
    }

    return (
        <NewCar
            newCar={newCar}
            yourCar={yourCar}
            changeCarName={changeCarName}
            changeDistance={changeDistance}
            changeYearProd={changeYearProd}
            changeYearBuy={changeYearBuy}
            changeCostBuy={changeCostBuy}
            changeVin={changeVin}
            changeNotes={changeNotes}
            changeCarPic={changeCarPic}
            onAddUserCar={onAddUserCar}
            onDelUserCar={onDelUserCar}
        />
    )
}

const mapStateToProps = (state) => ({
    newCar: state.newCar,
})

export default connect(mapStateToProps, {
    patchUserCarThunkCreator,
    deleteUserCarThunkCreator,
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
