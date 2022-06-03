import React from "react";
import s from './UpperBlock.module.css';


function UpperBlock (props) {
    return (
        <div className={s.UpperBlock}>
            <div className={s.moneyForFuel}>
                <span>Расходы на топливо</span>
            </div>

            <div className={s.averageDistance}>
                <span>Средний пробег</span>
            </div>

            <div className={s.averageConsumption}>
                <span>Средний расход</span>
            </div>

            <div className={s.costFuel}>
                <span>Стоимость топлива</span>
            </div>

            <div className={s.moneyForEtc}>
                <span>Остальные расходы</span>
            </div>

            <div className={s.car}>
                <span>carName</span>
            </div>
        </div>
    );
}

export default UpperBlock;