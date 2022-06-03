import React from "react";
import s from './GrafBlock.module.css';


function GrafBlock (props) {
    const car = props.car;


    return (
        <div className={s.GrafBlock}>
            <div className={s.grafikName}>
                Здесь будут названия графиков или измеряемая величина
            </div>

            <div className={s.grafik}>
                Здесь будет график
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
                Здесь будут точки-переключатели
            </div>
        </div>
    );
}

export default GrafBlock;