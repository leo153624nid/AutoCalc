/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './NewFuel.module.css'
import CarDataInput from '../NewCar/CarDataInput/CarDataInput'
import {
    clearFuelAC,
    changeDateFuelAC,
    changeDistanceFuelAC,
    changeMarkFuelAC,
    changePriceFuelAC,
    changeVolumeFuelAC,
    changeCostFuelAC,
    changeFullFuelAC,
} from '../../redux/newFuelReducer'
import { addFuelCarAC } from '../../redux/userDataReducer'

const dateFueling = 'Дата заправки'
const dist = 'Текущий пробег, км'
const markFuel = 'Марка топлива'
const priceFuel = 'Цена за литр, руб'
const volumeFuel = 'Обьем, л'
const costFuel = 'Стоимость, руб'
const fullTank = 'Полный бак (Введите 1 - полный или 0 - неполный)'

// Перевод даты в ДД.ММ.ГГГГ
const getNowDate = (timestamp) => new Date(timestamp)

function NewFuel({
    newFuel,
    carId,
    addFuelCar,
    changeDateFuel,
    changeDistanceFuel,
    changeMarkFuel,
    changePriceFuel,
    changeVolumeFuel,
    changeCostFuel,
    changeFullFuel,
}) {
    return (
        <div className={s.NewFuel}>
            <div className={s.form}>
                <CarDataInput
                    label={dateFueling}
                    value={getNowDate(newFuel.date)}
                    change={changeDateFuel}
                />
                <CarDataInput
                    label={dist}
                    value={newFuel.distance}
                    change={changeDistanceFuel}
                />
                <CarDataInput
                    label={markFuel}
                    value={newFuel.mark}
                    change={changeMarkFuel}
                />
                <CarDataInput
                    label={priceFuel}
                    value={newFuel.price}
                    change={changePriceFuel}
                />
                <CarDataInput
                    label={volumeFuel}
                    value={newFuel.volume}
                    change={changeVolumeFuel}
                />
                <CarDataInput
                    label={costFuel}
                    value={newFuel.cost}
                    change={changeCostFuel}
                />
                <CarDataInput
                    label={fullTank}
                    value={newFuel.full}
                    change={changeFullFuel}
                />
            </div>

            <div className={s.CarTake}>
                <NavLink
                    to="/"
                    className={s.btn}
                    onClick={() => {
                        addFuelCar({ ...newFuel, carId })
                    }}
                >
                    Подтвердить
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newFuel: state.newFuel,
})

const mapDispatchToProps = (dispatch) => ({
    clearFuel: () => {
        dispatch(clearFuelAC())
    },
    addFuelCar: (value) => {
        dispatch(addFuelCarAC(value))
    },
    changeDateFuel: (value) => {
        dispatch(changeDateFuelAC(value))
    },
    changeDistanceFuel: (value) => {
        dispatch(changeDistanceFuelAC(value))
    },
    changeMarkFuel: (value) => {
        dispatch(changeMarkFuelAC(value))
    },
    changePriceFuel: (value) => {
        dispatch(changePriceFuelAC(value))
    },
    changeVolumeFuel: (value) => {
        dispatch(changeVolumeFuelAC(value))
    },
    changeCostFuel: (value) => {
        dispatch(changeCostFuelAC(value))
    },
    changeFullFuel: (value) => {
        dispatch(changeFullFuelAC(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewFuel)
