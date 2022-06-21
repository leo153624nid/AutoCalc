/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './NewEtc.module.css'
import CarDataInput from '../NewCar/CarDataInput/CarDataInput'
import {
    changeDateEtcAC,
    changeDistanceEtcAC,
    changeMarkEtcAC,
    changePriceEtcAC,
    changeVolumeEtcAC,
    changeCostEtcAC,
    setNewEtcAC,
} from '../../redux/newEtcReducer'
import { addEtcCarAC } from '../../redux/userDataReducer'
import { getThisDate } from '../../redux/dateFunctions'

const dateEtc = 'Дата прочих расходов'
const dist = 'Текущий пробег, км'
const markEtc = 'Марка прочих расходов'
const priceEtc = 'Цена за шт, руб'
const volumeEtc = 'Количество, шт'
const costEtc = 'Стоимость, руб'

function NewEtc({
    newEtc,
    car,
    etcId,
    date,
    addEtcCar,
    setNewEtc,
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
    changing,
}) {
    const yourEtcId = etcId !== null ? etcId : changing.etcId
    const yourDate = date !== null ? date : changing.etcId
    let yourMark = ''
    let yourPrice = 0
    let yourVolume = 0
    let yourCost = 0
    let yourDistance = 0

    const yourEtc = car.etc.find((item) => item.etcId === changing.etcId)

    if (etcId === null && yourEtc !== undefined) {
        yourMark = yourEtc.mark
        yourPrice = yourEtc.price
        yourVolume = yourEtc.volume
        yourCost = yourEtc.cost
        yourDistance = yourEtc.distance
    }

    useEffect(() => {
        setNewEtc({
            etcId: yourEtcId,
            date: yourDate,
            carId: car.carId,
            mark: yourMark,
            price: yourPrice,
            volume: yourVolume,
            cost: yourCost,
            distance: yourDistance,
        })
    }, [])

    return (
        <div className={s.NewEtc}>
            <div className={s.form}>
                <CarDataInput
                    label={dateEtc}
                    value={getThisDate(newEtc.date)}
                    change={changeDateEtc}
                />
                <CarDataInput
                    label={dist}
                    value={newEtc.distance}
                    change={changeDistanceEtc}
                />
                <CarDataInput
                    label={markEtc}
                    value={newEtc.mark}
                    change={changeMarkEtc}
                />
                <CarDataInput
                    label={priceEtc}
                    value={newEtc.price}
                    change={changePriceEtc}
                />
                <CarDataInput
                    label={volumeEtc}
                    value={newEtc.volume}
                    change={changeVolumeEtc}
                />
                <CarDataInput
                    label={costEtc}
                    value={newEtc.cost}
                    change={changeCostEtc}
                />
            </div>

            <div className={s.CarTake}>
                <NavLink
                    to={`/graf/${car.carId}`}
                    className={s.btn}
                    onClick={() => {
                        addEtcCar(newEtc)
                    }}
                >
                    Подтвердить
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    newEtc: state.newEtc,
    changing: state.changing,
})

const mapDispatchToProps = (dispatch) => ({
    addEtcCar: (value) => {
        dispatch(addEtcCarAC(value))
    },
    setNewEtc: (value) => {
        dispatch(setNewEtcAC(value))
    },
    changeDateEtc: (value) => {
        dispatch(changeDateEtcAC(value))
    },
    changeDistanceEtc: (value) => {
        dispatch(changeDistanceEtcAC(value))
    },
    changeMarkEtc: (value) => {
        dispatch(changeMarkEtcAC(value))
    },
    changePriceEtc: (value) => {
        dispatch(changePriceEtcAC(value))
    },
    changeVolumeEtc: (value) => {
        dispatch(changeVolumeEtcAC(value))
    },
    changeCostEtc: (value) => {
        dispatch(changeCostEtcAC(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEtc)
