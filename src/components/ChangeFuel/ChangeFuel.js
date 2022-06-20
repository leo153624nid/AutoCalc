/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './ChangeFuel.module.css'
// import { getThisDate } from '../../redux/dateFunctions'
import {
    clearChangingAC,
    setNewChangingAC,
    changeFuelingIdAC,
} from '../../redux/changeConsumptionsReducer'

function ChangeFuel({
    car,
    // changing,
    // clearChanging,
    // setNewChanging,
    changeFuelingId,
}) {
    // useEffect(() => {
    //     clearChanging()
    // }, []) // !!!! возможно надо пустой []

    const fuelingsList = car.fuelings.map((fuel) => (
        <li key={fuel.fuelingId}>
            <div>
                <span>{fuel.date}</span>
            </div>
            <div
                className={s.ChangeTake}
                onClick={() => {
                    changeFuelingId(fuel.fuelingId)
                }}
            >
                <NavLink to={`/change_fuel/${car.carId}`} className={s.btn}>
                    Редактировать
                </NavLink>
            </div>
            <div className={s.DelTake}>
                <NavLink
                    to={`/change_fuel_list/${car.carId}`}
                    className={s.btn}
                >
                    Удалить
                </NavLink>
            </div>
        </li>
    ))
    return (
        <div className={s.ChangeFuel}>
            <ol>{fuelingsList}</ol>
        </div>
    )
}

const mapStateToProps = (state) => ({
    changing: state.changing,
})

const mapDispatchToProps = (dispatch) => ({
    clearChanging: () => {
        dispatch(clearChangingAC())
    },
    setNewChanging: (value) => {
        dispatch(setNewChangingAC(value))
    },
    changeFuelingId: (value) => {
        dispatch(changeFuelingIdAC(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeFuel)
