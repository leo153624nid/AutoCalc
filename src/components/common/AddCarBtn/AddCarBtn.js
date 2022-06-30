/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './AddCarBtn.module.css'
import { clearCar } from '../../../redux/newCarReducer'

function AddCarBtn({ clearCar }) {
    return (
        <div className={s.addCarBtn} onClick={() => clearCar()}>
            <NavLink to="/add_car" className={s.btn}>
                + Добавить авто
            </NavLink>
        </div>
    )
}

export default connect(null, { clearCar })(AddCarBtn)
