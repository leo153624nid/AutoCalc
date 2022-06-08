/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import s from './BottomBlock.module.css'

function BottomBlock(props) {
    const car = props.car

    let yourDistance = 0
    let costFuel = 0
    let itogo = 0
    if (car.fuelings.length !== 0) {
        yourDistance = Math.floor(
            car.fuelings.at(-1).distance - car.fuelings.at(0).distance
        )
        costFuel = Math.floor(
            car.fuelings
                .map((f) => f.cost)
                .reduce((total, value) => total + value)
        )
        itogo = Math.floor(costFuel + car.etcConsumptions)
    }

    return (
        <div className={s.BottomBlock}>
            <div className={s.distance}>
                <span>Расстояние</span>
                <span>{yourDistance} км</span>
            </div>

            <div className={s.fuel}>
                <span>Топливо</span>
                <span>{costFuel} &#8381;</span>
            </div>

            <div className={s.etc}>
                <span>Прочее</span>
                <span>{car.etcConsumptions} &#8381;</span>{' '}
                {/* Не вычисляется пока что, просто берется из базы данных */}
            </div>

            <div className={s.itogo}>
                <span>Итого</span>
                <span>{itogo} &#8381;</span>
            </div>
        </div>
    )
}

export default BottomBlock
