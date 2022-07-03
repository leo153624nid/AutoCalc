/* eslint-disable default-case */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

import { uploadCarPic } from '../../../database/firebase'
import s from './CarPreview.module.css'

function CarPreview({
    newCar,
    yourCar,
    onAddUserCar,
    onDelUserCar,
    changeCarPic,
}) {
    const onUpdateCarPic = (e) => {
        const file = e.target.files[0]

        const downloadUrl = uploadCarPic(file)
        console.log(downloadUrl)
        changeCarPic(downloadUrl)
    }

    return (
        <div className={s.CarPreview}>
            <div className={s.carPic}>
                <input
                    className={`${s.picInput}`}
                    type="file"
                    onChange={(e) => {
                        onUpdateCarPic(e)
                    }}
                />
                {newCar.carPic === '' ? (
                    <div />
                ) : (
                    <img src={newCar.carPic} alt="фото машины" />
                )}
            </div>

            <div className={s.CarName}>
                <span className={s.pad}>
                    <b>{newCar.carName}</b>
                </span>
                <span className={s.pad}>
                    Пробег <span>{newCar.distance}</span> км
                </span>
            </div>

            <div className={s.CarConsumptions}>
                <div className={s.FuelConsumptions}>
                    <span className={s.pad}>Расход топлива</span>
                    <span className={s.pad}>
                        {' '}
                        <span>{newCar.fuelConsumptions}</span> л/100 км
                    </span>
                </div>

                <div className={s.AllMonth}>
                    <span className={s.pad}>Содержание</span>
                    <span className={s.pad}>
                        {' '}
                        <span>{newCar.allMonth}</span> &#8381;/мес
                    </span>
                </div>
            </div>

            <div
                onClick={() => {
                    onAddUserCar()
                }}
                className={s.CarTake}
            >
                <NavLink to="/" className={s.btn}>
                    Подтвердить
                </NavLink>
            </div>
            <div
                onClick={() => {
                    onDelUserCar()
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
