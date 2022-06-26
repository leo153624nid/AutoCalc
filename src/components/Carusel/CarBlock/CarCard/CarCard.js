/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CarCard.module.css'

function CarCard({ carData, carPic }) {
    const carName = carData.carName
    const carDistance = carData.distance
    const fuelConsumptions = carData.fuelConsumptions
    const costOneDay = Math.floor(carData.costOneDay)
    const carId = carData.carId

    return (
        <div className={s.CarCard}>
            <img src={carPic} alt="CarPic" />

            <div className={s.CarName}>
                <span className={s.pad}>
                    <b>{carName}</b>
                </span>
                <span className={s.pad}>
                    Пробег <span>{carDistance}</span> км
                </span>
            </div>

            <div className={s.CarConsumptions}>
                <div className={s.FuelConsumptions}>
                    <span className={s.pad}>Расход топлива</span>
                    <span className={s.pad}>
                        {' '}
                        <span>{fuelConsumptions}</span> л/100 км
                    </span>
                </div>

                <div className={s.AllMonth}>
                    <span className={s.pad}>Содержание</span>
                    <span className={s.pad}>
                        {' '}
                        <span>{costOneDay}</span> &#8381;/день
                    </span>
                </div>
            </div>

            <div className={s.CarTake}>
                <NavLink to={`/graf/${carId}`} className={s.btn}>
                    Выбрать
                </NavLink>
            </div>
        </div>
    )
}

export default CarCard
