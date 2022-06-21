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
import { delFuelCarAC, delEtcCarAC } from '../../redux/userDataReducer'
import { getThisDate } from '../../redux/dateFunctions'

function ChangeFuelAndEtc({
    car,
    changeFuelingId,
    changeEtcId,
    fuelNotEtc,
    delFuelCar,
    delEtcCar,
}) {
    let listConsumptions = [<h3>У вас нет расходов</h3>]

    if (fuelNotEtc && car.fuelings.length > 0) {
        listConsumptions = car.fuelings.map((fuel, index) => (
            <li key={fuel.fuelingId} className={s.post}>
                <div className={s.discription}>
                    <div>
                        <span>{index + 1}. </span>
                        <span> {`${getThisDate(fuel.date)}`} </span>
                    </div>
                    <div>
                        <span> {fuel.mark} </span>
                        <span> ............... </span>
                        <span> {fuel.cost} &#8381; </span>
                        <span> ............... </span>
                        <span> {fuel.distance} км </span>
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
                <div
                    className={s.DelTake}
                    onClick={() => {
                        delFuelCar(car.carId, fuel.fuelingId)
                    }}
                >
                    <NavLink
                        to={`/change_fuel_list/${car.carId}`}
                        className={s.btn}
                    >
                        Удалить
                    </NavLink>
                </div>
            </li>
        ))
    } else if (car.etc.length > 0) {
        listConsumptions = car.etc.map((etc, index) => (
            <li key={etc.etcId} className={s.post}>
                <div className={s.discription}>
                    <div>
                        <span>{index + 1}. </span>
                        <span> {`${getThisDate(etc.date)}`} </span>
                    </div>
                    <div>
                        <span> {etc.mark} </span>
                        <span> ............... </span>
                        <span> {etc.cost} &#8381; </span>
                        <span> ............... </span>
                        <span> {etc.distance} км </span>
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
                <div
                    className={s.DelTake}
                    onClick={() => {
                        delEtcCar(car.carId, etc.etcId)
                    }}
                >
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
    delFuelCar: (value1, value2) => {
        dispatch(delFuelCarAC(value1, value2))
    },
    changeEtcId: (value) => {
        dispatch(changeEtcIdAC(value))
    },
    delEtcCar: (value1, value2) => {
        dispatch(delEtcCarAC(value1, value2))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeFuelAndEtc)
