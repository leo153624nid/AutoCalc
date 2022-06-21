/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CarPreview.module.css'

function CarPreview({
    carId,
    carName,
    distance,
    carPic,
    addNewCar,
    delUserCar,
    changeCarPic,
    fuelConsumptions,
    allMonth,
    newCar,
    yourCar,
}) {
    return (
        <div className={s.CarPreview}>
            <div
                onClick={() => changeCarPic() /* Доделать */}
                className={s.carPic}
            >
                <img src={carPic} alt="Добавить фото машины" />
            </div>

            <div className={s.CarName}>
                <span className={s.pad}>
                    <b>{carName}</b>
                </span>
                <span className={s.pad}>
                    Пробег <span>{distance}</span> км
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
                        <span>{allMonth}</span> &#8381;/мес
                    </span>
                </div>
            </div>

            <div
                onClick={() => {
                    addNewCar({ ...newCar, carId })
                }}
                className={s.CarTake}
            >
                <NavLink to="/" className={s.btn}>
                    Подтвердить
                </NavLink>
            </div>
            <div
                onClick={() => {
                    delUserCar(carId)
                }}
                className={yourCar !== null ? s.CarTake : s.hide}
            >
                <NavLink to="/" className={s.btn}>
                    Удалить
                </NavLink>
            </div>
        </div>
    )
}

export default CarPreview
