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
import {
    deleteUserFuelThunkCreator,
    deleteUserEtcThunkCreator,
} from '../../redux/userDataReducer'
import { getThisDate } from '../../redux/dateFunctions'
import ChangeFuelAndEtc from './ChangeFuelAndEtc'

function ChangeFuelAndEtcContainer({
    car,
    currentPage,
    changeFuelingId,
    changeEtcId,
    fuelNotEtc,
    changeCurrentPage,
    thisCarIndex,
    deleteUserFuelThunkCreator,
    deleteUserEtcThunkCreator,
}) {
    let items = 1
    let carData = { ...car }

    if (car.fuelings === undefined) carData = { ...car, fuelings: [] }
    if (car.etc === undefined) carData = { ...car, etc: [] }
    if (car.fuelings === undefined && car.etc === undefined) {
        carData = { ...carData, fuelings: [], etc: [] }
    }

    if (fuelNotEtc) {
        items = carData.fuelings.length === 0 ? 1 : carData.fuelings.length
    } else {
        items = carData.etc.length === 0 ? 1 : carData.etc.length
    }

    const pageSize = 4
    const totalPagesCount = Math.ceil(items / pageSize)

    // Устанавливаем последнюю страничку по умолчанию
    useEffect(() => {
        changeCurrentPage(totalPagesCount)
    }, [totalPagesCount])

    let consumptions = []
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

    // Удаление заправки
    const onDelFuelCar = (thisFuelIndex, fuelingId) => {
        deleteUserFuelThunkCreator(
            0,
            thisCarIndex,
            thisFuelIndex,
            carData.carId,
            fuelingId
        )
    }

    // Удаление прочих расходов
    const onDelEtcCar = (thisEtcIndex, etcId) => {
        deleteUserEtcThunkCreator(
            0,
            thisCarIndex,
            thisEtcIndex,
            carData.carId,
            etcId
        )
    }

    // Если редактируем fuel расходы
    if (fuelNotEtc && carData.fuelings.length !== 0) {
        consumptions = carData.fuelings.map((fuel, index) => (
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
                    <NavLink
                        to={`/change_fuel/${carData.carId}`}
                        className={s.btn}
                    >
                        Редактировать
                    </NavLink>
                </div>
                <div
                    className={s.DelTake}
                    onClick={() => {
                        onDelFuelCar(index, fuel.fuelingId)
                    }}
                >
                    <NavLink
                        to={`/change_fuel_list/${carData.carId}`}
                        className={s.btn}
                    >
                        Удалить
                    </NavLink>
                </div>
            </li>
        ))
    } else if (!fuelNotEtc && carData.etc.length !== 0) {
        // Если редактируем etc расходы
        consumptions = carData.etc.map((etc, index) => (
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
                    <NavLink
                        to={`/change_etc/${carData.carId}`}
                        className={s.btn}
                    >
                        Редактировать
                    </NavLink>
                </div>
                <div
                    className={s.DelTake}
                    onClick={() => {
                        onDelEtcCar(index, etc.etcId)
                    }}
                >
                    <NavLink
                        to={`/change_etc_list/${carData.carId}`}
                        className={s.btn}
                    >
                        Удалить
                    </NavLink>
                </div>
            </li>
        ))
    }
    const listConsumptions = consumptions.slice(
        currentPage * pageSize - pageSize,
        currentPage * pageSize
    )

    return (
        <ChangeFuelAndEtc
            carId={car.carId}
            pagesList={pagesList}
            listConsumptions={listConsumptions}
        />
    )
}

const mapStateToProps = (state) => ({
    currentPage: state.changing.currentPage,
})

export default connect(mapStateToProps, {
    changeFuelingId,
    deleteUserFuelThunkCreator,
    changeEtcId,
    deleteUserEtcThunkCreator,
    changeCurrentPage,
})(ChangeFuelAndEtcContainer)
