import React from "react";
import s from './Carusel.module.css';
import ArrowNext from "../ArrowNext/ArrowNext";
import ArrowPrev from "../ArrowPrev/ArrowPrev";
import CarBlock from "../CarBlock/CarBlock";

function Carusel () {
    return (
        <div className={s.content}>
            <div className={s.ArrowPrev}>
                <ArrowPrev />
            </div>

            <div className={s.CarBlock}>
                <CarBlock />
            </div>

            <div className={s.CarBlock}>
                <CarBlock />
            </div>

            <div className={s.CarBlock}>
                <CarBlock />
            </div>

            <div className={s.ArrowNext}>
                <ArrowNext />
            </div>
        </div>
    );
}

export default Carusel;