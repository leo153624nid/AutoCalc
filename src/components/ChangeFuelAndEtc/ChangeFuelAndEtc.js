/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './ChangeFuelAndEtc.module.css'
import {
    changeFuelingIdAC,
    changeEtcIdAC,
} from '../../redux/changeConsumptionsReducer'
import { getThisDate } from '../../redux/dateFunctions'

function ChangeFuelAndEtc({ car, changeFuelingId, changeEtcId, fuelNotEtc }) {
    let listConsumptions = []

    if (fuelNotEtc) {
        listConsumptions = car.fuelings.map((fuel, index) => (
            <li key={fuel.fuelingId} className={s.post}>
                <div className={s.discription}>
                    <div>
                        <span>{index + 1}. </span>
                        <span> {`${getThisDate(fuel.date)}`} </span>
                    </div>
                    <div>
                        <span> {fuel.distance} км </span>
                        <span> ............... </span>
                        <span> {fuel.cost} &#8381; </span>
                    </div>
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
    } else {
        listConsumptions = car.etc.map((etc, index) => (
            <li key={etc.etcId} className={s.post}>
                <div className={s.discription}>
                    <div>
                        <span>{index + 1}. </span>
                        <span> {`${getThisDate(etc.date)}`} </span>
                    </div>
                    <div>
                        <span> {etc.distance} км </span>
                        <span> ............... </span>
                        <span> {etc.cost} &#8381; </span>
                    </div>
                </div>
                <div
                    className={s.ChangeTake}
                    onClick={() => {
                        changeEtcId(etc.etcId)
                    }}
                >
                    <NavLink to={`/change_etc/${car.carId}`} className={s.btn}>
                        Редактировать
                    </NavLink>
                </div>
                <div className={s.DelTake}>
                    <NavLink
                        to={`/change_etc_list/${car.carId}`}
                        className={s.btn}
                    >
                        Удалить
                    </NavLink>
                </div>
            </li>
        ))
    }

    return (
        <div className={s.Change}>
            <ol className={s.list}>{listConsumptions}</ol>
        </div>
    )
}

const mapStateToProps = (state) => ({
    changing: state.changing,
})

const mapDispatchToProps = (dispatch) => ({
    changeFuelingId: (value) => {
        dispatch(changeFuelingIdAC(value))
    },
    changeEtcId: (value) => {
        dispatch(changeEtcIdAC(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeFuelAndEtc)
