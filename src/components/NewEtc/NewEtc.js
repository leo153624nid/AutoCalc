/* eslint-disable react/prop-types */
import React from 'react'
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
    // changeCarIdEtcAC,
} from '../../redux/newEtcReducer'
import { addEtcCarAC } from '../../redux/userDataReducer'

const dateEtc = 'Дата прочих расходов'
const dist = 'Текущий пробег, км'
const markEtc = 'Марка прочих расходов'
const priceEtc = 'Цена за шт, руб'
const volumeEtc = 'Количество, шт'
const costEtc = 'Стоимость, руб'

// Перевод даты в ДД.ММ.ГГГГ
const getNowDate = (timestamp) => new Date(timestamp)

function NewEtc({
    newEtc,
    carId,
    addEtcCar,
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
    // changeCarIdEtc,
}) {
    return (
        <div className={s.NewEtc}>
            <div className={s.form}>
                <CarDataInput
                    label={dateEtc}
                    value={getNowDate(newEtc.date)}
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
                    to="/"
                    className={s.btn}
                    onClick={() => {
                        addEtcCar({ ...newEtc, carId })
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
})

const mapDispatchToProps = (dispatch) => ({
    addEtcCar: (value) => {
        dispatch(addEtcCarAC(value))
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
    // changeCarIdEtc: (value) => {
    //     dispatch(changeCarIdEtcAC(value))
    // },
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEtc)
