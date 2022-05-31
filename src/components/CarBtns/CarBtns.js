import React from "react";
import s from './CarBtns.module.css';

function CarBtns () {
    return (
        <div className={s.CarBtns}>
            <div className={s.fuel}>
                + fuel
            </div>

            <div className={s.etc}>
                + etc
            </div>

            <div className={s.change}>
                Редактировать
            </div>
        </div>
    );
}

export default CarBtns;