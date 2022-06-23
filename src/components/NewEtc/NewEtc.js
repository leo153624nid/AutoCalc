/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NewEtc.module.css'
import CarDataInput from '../NewCar/CarDataInput/CarDataInput'
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
    addEtcCar,
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
}) {
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

export default NewEtc
