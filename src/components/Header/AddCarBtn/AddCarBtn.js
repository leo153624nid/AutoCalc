import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './AddCarBtn.module.css'

function AddCarBtn() {
    return (
        <div className={s.addCarBtn}>
            <NavLink to="/add_car" className={s.btn}>
                + Добавить авто
            </NavLink>
        </div>
    )
}

export default AddCarBtn
