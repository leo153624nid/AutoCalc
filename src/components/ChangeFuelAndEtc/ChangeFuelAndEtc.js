/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './ChangeFuelAndEtc.module.css'
import {
    changeFuelingId,
    changeEtcId,
    changeCurrentPage,
} from '../../redux/changeConsumptionsReducer'
import { delFuelCar, delEtcCar } from '../../redux/userDataReducer'
import { getThisDate } from '../../redux/dateFunctions'

function ChangeFuelAndEtc({
    car,
    currentPage,
    changeFuelingId,
    changeEtcId,
    fuelNotEtc,
    delFuelCar,
    delEtcCar,
    changeCurrentPage,
}) {
    const pageSize = 4
    const totalPagesCount = Math.ceil(
        fuelNotEtc ? car.fuelings.length / pageSize : car.etc.length / pageSize
    )

    // Устанавливаем последнюю страничку по умолчанию
    useEffect(() => {
        changeCurrentPage(totalPagesCount)
    }, [totalPagesCount])

    let listConsumptions = [<h3>У вас нет расходов</h3>]
    const pages = []

    for (let i = 1; i <= totalPagesCount; i += 1) {
        pages.push(i)
    }

    const pagesList = pages.map((p) => (
        <span
            key={p}
            className={currentPage === p ? s.selectedPage : ''}
            onClick={() => {
                changeCurrentPage(p)
            }}
        >
            {' '}
            {p}{' '}
        </span>
    ))

    // Если редактируем fuel расходы
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
        // Если редактируем etc расходы
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
            <div className={s.btnBack}>
                <NavLink to={`/graf/${car.carId}`} className={s.btn}>
                    К графикам
                </NavLink>
            </div>
            <ol className={s.list}>
                {listConsumptions.slice(
                    currentPage * pageSize - pageSize,
                    currentPage * pageSize
                )}
            </ol>
            <div className={s.pages}>{pagesList}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    // changing: state.changing,
    currentPage: state.changing.currentPage,
})

export default connect(mapStateToProps, {
    changeFuelingId,
    delFuelCar,
    changeEtcId,
    delEtcCar,
    changeCurrentPage,
})(ChangeFuelAndEtc)
