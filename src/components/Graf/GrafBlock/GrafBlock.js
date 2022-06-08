/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import s from './GrafBlock.module.css'
import CarGrafik from './CarGrafik/CarGrafik'
import '@progress/kendo-theme-material/dist/all.css'
import 'hammerjs'

function GrafBlock(props) {
    const car = props.car
    const idGrafik = props.idGrafik
    const grafikNames = [
        <span>Нет данных</span>,
        <span>Расходы на топливо, &#8381;</span>,
        <span>Средний пробег, км</span>,
        <span>Средний расход, л/100 км</span>,
        <span>Стоимость топлива, &#8381;/л</span>,
        <span>Остальные расходы, &#8381;</span>,
    ]

    return (
        <div className={s.GrafBlock}>
            <div className={s.grafikName}>
                <div className={s.names}>{grafikNames[idGrafik]}</div>
                <div className={s.cap} /> {/* просто декоративная заглушка */}
            </div>

            <div className={s.CarGrafik}>
                <CarGrafik idGrafik={idGrafik} car={car} />
            </div>

            <aside className={s.aside}>
                <div className={s.generalDistance}>
                    <span>Общий пробег</span>
                    <span>{car.distance} км</span>
                </div>

                <div className={s.generalFuel}>
                    <span>Общий расход топлива</span>
                    <span>{car.fuelConsumptions} л/100 км</span>
                </div>

                <div className={s.generalCostOneKm}>
                    <span>Стоимость 1 км</span>
                    <span>{car.costOneKm} &#8381;/км</span>
                </div>

                <div className={s.generalCostOneDay}>
                    <span>Стоимость владения</span>
                    <span>{car.costOneDay} &#8381;/день</span>
                </div>
            </aside>

            <div className={s.toggle}>
                <div className={s.dots}>Здесь будут точки-переключатели</div>
                <div className={s.cap} /> {/* просто декоративная заглушка */}
            </div>
        </div>
    )
}

export default GrafBlock
