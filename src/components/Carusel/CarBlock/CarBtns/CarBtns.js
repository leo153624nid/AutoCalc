/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CarBtns.module.css'

function CarBtns({ carId }) {
    return (
        <div className={s.CarBtns}>
            <div className={s.fuel}>
                <NavLink to={`/add_fuel/${carId}`} className={s.btn}>
                    + fuel
                </NavLink>
            </div>

            <div className={s.etc}>
                <NavLink to={`/add_etc/${carId}`} className={s.btn}>
                    + etc
                </NavLink>
            </div>

            <div className={s.change}>
                <NavLink to={`/change_car/${carId}`} className={s.btn}>
                    Редактировать
                </NavLink>
            </div>
        </div>
    )
}

export default CarBtns
