/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from './NewCar.module.css'
import CarDataInput from './CarDataInput/CarDataInput'
import CarPreview from './CarPreview/CarPreview'
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

const name = 'Название машины'
const dist = 'Пробег, км'
const yearProd = 'Год производства'
const yearOfBuy = 'Год покупки'
const costOfBuy = 'Стоимость покупки, руб'
const vinNumber = 'VIN номер'
const note = 'Заметки'

// Создание нового carId по текущей дате в мс
const getNewCarId = () => {
    const now = new Date()
    return now.getTime()
}

function NewCar({
    newCar,
    yourCar,
    addUserCar,
    delUserCar,
    setCar,
    changeCarname,
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
        <div className={s.NewCar}>
            <div className={s.form}>
                <CarDataInput
                    label={name}
                    value={newCar.carName}
                    change={changeCarname}
                />
                <CarDataInput
                    label={dist}
                    value={newCar.distance}
                    change={changeDistance}
                />
                <CarDataInput
                    label={yearProd}
                    value={newCar.yearProduction}
                    change={changeYearProd}
                />
                <CarDataInput
                    label={yearOfBuy}
                    value={newCar.yearOfBuying}
                    change={changeYearBuy}
                />
                <CarDataInput
                    label={costOfBuy}
                    value={newCar.costOfBuying}
                    change={changeCostBuy}
                />
                <CarDataInput
                    label={vinNumber}
                    value={newCar.vin}
                    change={changeVin}
                />
                <CarDataInput
                    label={note}
                    value={newCar.notes}
                    change={changeNotes}
                />
            </div>

            <div className={s.carPrev}>
                <CarPreview
                    carName={newCar.carName}
                    distance={newCar.distance}
                    carPic={newCar.carPic}
                    addUserCar={addUserCar}
                    delUserCar={delUserCar}
                    changeCarPic={changeCarPic}
                    fuelConsumptions={newCar.fuelConsumptions}
                    allMonth={newCar.allMonth}
                    carId={newCar.carId}
                    newCar={newCar}
                    yourCar={yourCar}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newCar: state.newCar,
})

// const mapDispatchToProps = (dispatch) => ({
//     addNewCar: (value) => {
//         dispatch(addUserCar(value))
//     },
//     delUserCar: (value) => {
//         dispatch(delUserCar(value))
//     },
//     setNewCar: (value) => {
//         dispatch(setCar(value))
//     },
//     changeCarname: (value) => {
//         dispatch(changeCarName(value))
//     },
//     changeDistance: (value) => {
//         dispatch(changeDistance(value))
//     },
//     changeYearProd: (value) => {
//         dispatch(changeYearProd(value))
//     },
//     changeYearBuy: (value) => {
//         dispatch(changeYearBuy(value))
//     },
//     changeCostBuy: (value) => {
//         dispatch(changeCostBuy(value))
//     },
//     changeVin: (value) => {
//         dispatch(changeVin(value))
//     },
//     changeNotes: (value) => {
//         dispatch(changeNotes(value))
//     },
//     changeCarPic: (value) => {
//         dispatch(changeCarPic(value))
//     },
//     changeCarId: (value) => {
//         dispatch(changeCarId(value))
//     },
// })

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
})(NewCar)
