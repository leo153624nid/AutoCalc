import React from "react";
import s from './UpperBlock.module.css';


function UpperBlock (props) {
    const car=props.data;

    function chooseGrafik (event) {
        let wrapper = document.querySelector(`.${s.UpperBlock}`);
        console.dir(wrapper);
        wrapper.childNodes.forEach( elem => elem.classList.remove(`${s.click}`) );
        event.currentTarget.classList.add(`${s.click}`);
    }

    return (
        <div className={s.UpperBlock}>
            <div className={`${s.moneyForFuel} ${s.btn} ${s.click}`} onClick={(event)=>{chooseGrafik(event)}}>
                <span>Расходы на топливо</span>
            </div>

            <div className={`${s.averageDistance} ${s.btn}`} onClick={(event)=>{chooseGrafik(event)}}>
                <span>Средний пробег</span>
            </div>

            <div className={`${s.averageConsumption} ${s.btn}`} onClick={(event)=>{chooseGrafik(event)}}>
                <span>Средний расход</span>
            </div>

            <div className={`${s.costFuel} ${s.btn}`} onClick={(event)=>{chooseGrafik(event)}}>
                <span>Стоимость топлива</span>
            </div>

            <div className={`${s.moneyForEtc} ${s.btn}`} onClick={(event)=>{chooseGrafik(event)}}>
                <span>Остальные расходы</span>
            </div>

            <div className={`${s.carInfo} ${s.btn}`} onClick={(event)=>{chooseGrafik(event)}}>
                <span><b>{car.carName}</b></span> {/*Потом сделать кнопкой для редактирования текущей машины*/}
                <span className={s.word}><i>Редактировать</i></span>
            </div>
        </div>
    );
}

export default UpperBlock;