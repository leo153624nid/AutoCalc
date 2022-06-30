/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'

import { NavLink } from 'react-router-dom'
import s from './NewFuel.module.css'
import CarDataInput from '../common/CarDataInput/CarDataInput'
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
                    to={`/graf/${car.carId}`}
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

export default NewFuel
