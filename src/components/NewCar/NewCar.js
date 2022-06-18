/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import s from './NewCar.module.css'
import CarDataInput from './CarDataInput/CarDataInput'
import CarPreview from './CarPreview/CarPreview'
import {
    setCarAC,
    clearCarAC,
    changeCarNameAC,
    changeDistanceAC,
    changeYearProdAC,
    changeYearBuyAC,
    changeCostBuyAC,
    changeVinAC,
    changeNotesAC,
    changeCarPicAC,
    changeCarIdAC,
} from '../../redux/newCarReducer'
import { addUserCarAC } from '../../redux/userDataReducer'

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
    addNewCar,
    сlearNewCar,
    setNewCar,
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
    // Проверка на новую или редактируемую машину,
    if (newCar.carId === 0 && yourCar !== null) {
        setNewCar(yourCar)
    } else if (newCar.carId === 0) {
        changeCarId(getNewCarId())
    }

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
                    addNewCar={addNewCar}
                    сlearNewCar={сlearNewCar}
                    changeCarPic={changeCarPic}
                    fuelConsumptions={newCar.fuelConsumptions}
                    allMonth={newCar.allMonth}
                    carId={newCar.carId}
                    newCar={newCar}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newCar: state.newCar,
})

const mapDispatchToProps = (dispatch) => ({
    addNewCar: (value) => {
        dispatch(addUserCarAC(value))
    },
    сlearNewCar: () => {
        dispatch(clearCarAC())
    },
    setNewCar: (value) => {
        dispatch(setCarAC(value))
    },
    changeCarname: (value) => {
        dispatch(changeCarNameAC(value))
    },
    changeDistance: (value) => {
        dispatch(changeDistanceAC(value))
    },
    changeYearProd: (value) => {
        dispatch(changeYearProdAC(value))
    },
    changeYearBuy: (value) => {
        dispatch(changeYearBuyAC(value))
    },
    changeCostBuy: (value) => {
        dispatch(changeCostBuyAC(value))
    },
    changeVin: (value) => {
        dispatch(changeVinAC(value))
    },
    changeNotes: (value) => {
        dispatch(changeNotesAC(value))
    },
    changeCarPic: (value) => {
        dispatch(changeCarPicAC(value))
    },
    changeCarId: (value) => {
        dispatch(changeCarIdAC(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCar)
