/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './NewFuel.module.css'
import CarDataInput from '../NewCar/CarDataInput/CarDataInput'
import {
    changeDateFuelAC,
    changeDistanceFuelAC,
    changeMarkFuelAC,
    changePriceFuelAC,
    changeVolumeFuelAC,
    changeCostFuelAC,
    changeFullFuelAC,
    setNewFuelAC,
    clearFuelAC,
} from '../../redux/newFuelReducer'
import { addFuelCarAC } from '../../redux/userDataReducer'
import { getThisDate } from '../../redux/dateFunctions'

const dateFueling = 'Дата заправки'
const dist = 'Текущий пробег, км'
const markFuel = 'Марка топлива'
const priceFuel = 'Цена за литр, руб'
const volumeFuel = 'Обьем, л'
const costFuel = 'Стоимость, руб'
const fullTank = 'Полный бак (Введите 1 - полный или 0 - неполный)'

function NewFuel({
    newFuel,
    car,
    fuelingId,
    date,
    addFuelCar,
    setNewFuel,
    changeDateFuel,
    changeDistanceFuel,
    changeMarkFuel,
    changePriceFuel,
    changeVolumeFuel,
    changeCostFuel,
    changeFullFuel,
    add,
}) {
    useEffect(() => {
        setNewFuel({ ...newFuel, carId: car.carId, fuelingId, date })
    }, [car.carId, date, fuelingId, newFuel, setNewFuel])

    // if (add === false) {
    //     action = { ...newFuel }
    // }
    return (
        <div className={s.NewFuel}>
            <div className={s.form}>
                <CarDataInput
                    label={dateFueling}
                    value={getThisDate(newFuel.date)}
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
                        addFuelCar(newFuel)
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
    addFuelCar: (value) => {
        dispatch(addFuelCarAC(value))
    },
    сlearFuel: () => {
        dispatch(clearFuelAC())
    },
    setNewFuel: (value) => {
        dispatch(setNewFuelAC(value))
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
