import React from "react";
import s from './UpperBlock.module.css';


function UpperBlock (props) {
    const car=props.data;

    function chooseGrafik (event) {
        console.dir(event.target);
    }

    return (
        <div className={s.UpperBlock}>
            <div className={`${s.moneyForFuel} ${s.btn}`} onClick={(event)=>{chooseGrafik(event)}}>
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

            <div className={`${s.carInfo} ${s.btn}`}>
                <span><b>{car.carName}</b></span> {/*Потом сделать кнопкой для редактирования текущей машины*/}
            </div>
        </div>
    );
}

export default UpperBlock;