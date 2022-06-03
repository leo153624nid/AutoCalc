import React from "react";
import s from './UpperBlock.module.css';


function UpperBlock (props) {
    const car = props.data;
    let changeGrafik = props.changeGrafik;

    function changeBtn (event) {
        let wrapper = document.querySelector(`.${s.UpperBlock}`);

        wrapper.childNodes.forEach( elem => elem.classList.remove(`${s.click}`) );
        event.currentTarget.classList.add(`${s.click}`);
        changeGrafik(event.currentTarget.id);
    }

    return (
        <div className={s.UpperBlock}>
            <div className={`${s.moneyForFuel} ${s.btn} ${s.click}`} 
                 onClick={(event)=>{changeBtn(event)}} 
                 id='1'>
                <span>Расходы на топливо</span>
            </div>

            <div className={`${s.averageDistance} ${s.btn}`} 
                 onClick={(event)=>{changeBtn(event)}} 
                 id='2'>
                <span>Средний пробег</span>
            </div>

            <div className={`${s.averageConsumption} ${s.btn}`} 
                 onClick={(event)=>{changeBtn(event)}} 
                 id='3'>
                <span>Средний расход</span>
            </div>

            <div className={`${s.costFuel} ${s.btn}`} 
                 onClick={(event)=>{changeBtn(event)}} 
                 id='4'>
                <span>Стоимость топлива</span>
            </div>

            <div className={`${s.moneyForEtc} ${s.btn}`} 
                 onClick={(event)=>{changeBtn(event)}} 
                 id='5'>
                <span>Остальные расходы</span>
            </div>

            <div className={`${s.carInfo} ${s.btn}`}>
                <span><b>{car.carName}</b></span> {/*Потом сделать кнопкой для редактирования текущей машины*/}
                <span className={s.word}><i>Редактировать</i></span>
            </div>
        </div>
    );
}

export default UpperBlock;