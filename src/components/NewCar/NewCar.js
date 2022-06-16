/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import s from './NewCar.module.css'
import CarDataInput from './CarDataInput/CarDataInput'
import CarPreview from './CarPreview/CarPreview'
import {
    addCarAC,
    changeCarNameAC,
    changeDistanceAC,
    changeYearProdAC,
    changeYearBuyAC,
    changeCostBuyAC,
    changeVinAC,
    changeNotesAC,
    changeCarPicAC,
} from '../../redux/newCarReducer'

const name = 'Название машины'
const dist = 'Пробег, км'
const yearProd = 'Год производства'
const yearOfBuy = 'Год покупки'
const costOfBuy = 'Стоимость покупки, руб'
const vinNumber = 'VIN номер'
const note = 'Заметки'

function NewCar({
    newCar,
    addNewCar,
    changeCarname,
    changeDistance,
    changeYearProd,
    changeYearBuy,
    changeCostBuy,
    changeVin,
    changeNotes,
    changeCarPic,
}) {
    console.log('render')
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
                    changeCarPic={changeCarPic}
                    fuelConsumptions={newCar.fuelConsumptions}
                    allMonth={newCar.allMonth}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newCar: state.newCar,
})

const mapDispatchToProps = (dispatch) => ({
    addNewCar: () => {
        dispatch(addCarAC())
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
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCar)
