import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CarBtns.module.css'

function CarBtns() {
    return (
        <div className={s.CarBtns}>
            <div className={s.fuel}>
                <NavLink to="/add_fuel" className={s.btn}>
                    + fuel
                </NavLink>
            </div>

            <div className={s.etc}>
                <NavLink to="/" className={s.btn}>
                    + etc
                </NavLink>
            </div>

            <div className={s.change}>
                <NavLink to="/add_car" className={s.btn}>
                    Редактировать
                </NavLink>
            </div>
        </div>
    )
}

export default CarBtns
