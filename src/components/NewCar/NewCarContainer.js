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
    patchUserCar,
    deleteUserCar,
    updateUserCarPic,
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
    patchUserCar,
    deleteUserCar,
    updateUserCarPic,
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
    userId,
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
            patchUserCar(userId, newCar, thisCarIndex)
        } else {
            patchUserCar(userId, newCar, nextCarIndex)
        }
    }

    // Удаление машины
    const onDelUserCar = () => {
        deleteUserCar(userId, thisCarIndex, newCar.carId)
    }

    // Обновление картинки машины, загрузка в хранилище
    const onUpdateCarPic = (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0]
            updateUserCarPic(file)
        }
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
            onUpdateCarPic={onUpdateCarPic}
        />
    )
}

const mapStateToProps = (state) => ({
    newCar: state.newCar,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, {
    patchUserCar,
    deleteUserCar,
    updateUserCarPic,
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
