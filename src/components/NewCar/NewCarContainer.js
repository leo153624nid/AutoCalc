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
import { patchUserCar, deleteUserCar } from '../../api/api'

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
    nextCarIndex,
    thisCarIndex,
}) {
    useEffect(() => {
        // Проверка на новую или редактируемую машину,
        if (newCar.carId === 0 && yourCar !== null) {
            setCar(yourCar)
        } else if (newCar.carId === 0) {
            changeCarId(getNewCarId())
        }
    }, [changeCarId, newCar.carId, setCar, yourCar])

    // Обновление или добавление машины
    const onAddUserCar = () => {
        if (yourCar !== null) {
            patchUserCar(newCar, thisCarIndex).then((response) => {
                if (response.statusText === 'OK') {
                    addUserCar(newCar)
                }
            })
        } else {
            patchUserCar(newCar, nextCarIndex).then((response) => {
                if (response.statusText === 'OK') {
                    addUserCar(newCar)
                }
            })
        }
    }

    // Удаление машины
    const onDelUserCar = () => {
        deleteUserCar(thisCarIndex).then((response) => {
            if (response.statusText === 'OK') {
                delUserCar(newCar.carId)
            }
        })
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
