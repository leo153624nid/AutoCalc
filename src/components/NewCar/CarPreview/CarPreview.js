import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CarPreview.module.css'

function CarPreview() {
    const carName = 'carData.carName'
    const carDistance = 'carData.distance'
    const fuelConsumptions = 'carData.fuelConsumptions'
    const allMonth = 'Math.floor(carData.allMonth)'
    // const carId = 'carData.carId'
    const carPic = 'https://img.icons8.com/wired/64/undefined/add-image.png'

    return (
        <div className={s.CarPreview}>
            <div className={s.carPic}>
                <img src={carPic} alt="addCarPic" />
            </div>

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
                        <span>{allMonth}</span> &#8381;/мес
                    </span>
                </div>
            </div>

            <div className={s.CarTake}>
                <NavLink to="/" className={s.btn}>
                    Подтвердить
                </NavLink>
            </div>
        </div>
    )
}

export default CarPreview
