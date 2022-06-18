/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './AddCarBtn.module.css'
import { clearCarAC } from '../../../redux/newCarReducer'

function AddCarBtn({ сlearNewCar }) {
    return (
        <div className={s.addCarBtn} onClick={() => сlearNewCar()}>
            <NavLink to="/add_car" className={s.btn}>
                + Добавить авто
            </NavLink>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    сlearNewCar: () => {
        dispatch(clearCarAC())
    },
})

export default connect(null, mapDispatchToProps)(AddCarBtn)
