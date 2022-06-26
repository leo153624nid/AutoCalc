/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './BottomBlock.module.css'

function BottomBlock({ carId, yourDistance, costFuel, costEtc, itogo }) {
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
                        to={`/change_fuel_list/${carId}`}
                    >
                        Редактировать
                    </NavLink>
                </div>
            </div>

            <div className={s.etc}>
                <div>
                    <div>Прочее</div>
                    <div>{costEtc} &#8381;</div>{' '}
                </div>
                <div className={s.btn}>
                    <NavLink
                        className={s.link}
                        to={`/change_etc_list/${carId}`}
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
