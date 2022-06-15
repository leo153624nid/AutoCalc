import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NewFuel.module.css'
import CarDataInput from '../NewCar/CarDataInput/CarDataInput'

const dateFueling = 'Дата заправки'
const distance = 'Текущий пробег, км'
const markFuel = 'Марка топлива'
const priceFuel = 'Цена за литр, руб'
const volumeFuel = 'Обьем, л'
const costFuel = 'Стоимость, руб'
const fullTank = 'Полный бак (1 или 0)'

function NewFuel() {
    return (
        <div className={s.NewFuel}>
            <div className={s.form}>
                <CarDataInput label={dateFueling} />
                <CarDataInput label={distance} />
                <CarDataInput label={markFuel} />
                <CarDataInput label={priceFuel} />
                <CarDataInput label={volumeFuel} />
                <CarDataInput label={costFuel} />
                <CarDataInput label={fullTank} />
            </div>

            <div className={s.CarTake}>
                <NavLink to="/" className={s.btn}>
                    Подтвердить
                </NavLink>
            </div>
        </div>
    )
}

export default NewFuel
