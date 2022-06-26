/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './BottomBlock.module.css'

function BottomBlock({ carData }) {
    let yourDistance = 0
    let costFuel = 0
    let itogo = 0

    if (carData.fuelings.length > 0) {
        yourDistance = Math.floor(
            carData.fuelings.at(-1).distance - carData.fuelings.at(0).distance
        )
        costFuel = Math.floor(
            carData.fuelings
                .map((f) => f.cost)
                .reduce((total, value) => total + value)
        )
        itogo = Math.floor(costFuel + carData.etcConsumptions)
    }

    return (
        <div className={s.BottomBlock}>
            <div className={s.distance}>
                <span>Расстояние</span>
                <span>{yourDistance} км</span>
            </div>

            <div className={s.fuel}>
                <div>
                    <div>Топливо</div>
                    <div>{costFuel} &#8381;</div>
                </div>
                <div className={s.btn}>
                    <NavLink
                        className={s.link}
                        to={`/change_fuel_list/${carData.carId}`}
                    >
                        Редактировать
                    </NavLink>
                </div>
            </div>

            <div className={s.etc}>
                <div>
                    <div>Прочее</div>
                    <div>{carData.etcConsumptions} &#8381;</div>{' '}
                    {/* Не вычисляется пока что, просто берется из базы данных */}
                </div>
                <div className={s.btn}>
                    <NavLink
                        className={s.link}
                        to={`/change_etc_list/${carData.carId}`}
                    >
                        Редактировать
                    </NavLink>
                </div>
            </div>

            <div className={s.itogo}>
                <span>Итого</span>
                <span>{itogo} &#8381;</span>
            </div>
        </div>
    )
}

export default BottomBlock
