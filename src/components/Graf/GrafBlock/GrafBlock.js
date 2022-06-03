import React from "react";
import s from './GrafBlock.module.css';


function GrafBlock (props) {
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
                    <span>XXXXXX км.</span>
                </div>

                <div className={s.generalFuel}>
                    <span>Общий расход топлива</span>
                    <span>XXX л./100 км.</span>
                </div>

                <div className={s.generalCostOneKm}>
                    <span>Стоимость 1 км.</span>
                    <span>XXXX,Х км.</span>
                </div>

                <div className={s.generalCostOneDay}>
                    <span>Стоимость владения</span>
                    <span>XXXХ руб./день</span>
                </div>
            </aside>

            <div className={s.toggle}>
                Здесь будут точки-переключатели
            </div>
        </div>
    );
}

export default GrafBlock;