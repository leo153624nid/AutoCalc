import React from "react";
import s from './CarCard.module.css';


function CarCard (props) {
  
    const carPic = props.carPic;

    return (
        <div className={s.CarCard}>
            <img src={carPic} alt='CarPic'/>

            <div className={s.CarName}>
                <span className={s.pad}>BMW 316i</span>
                <span className={s.pad}>Пробег <span>XXXXXX</span> км.</span>
            </div>
            
            <div className={s.CarConsumptions}>
                <div className={s.FuelConsumptions}>
                    <span className={s.pad}>Расход топлива</span>
                    <span className={s.pad}> <span>XX,X</span> л/100 км</span>
                </div>

                <div className={s.EtcConsumptions}>
                    <span className={s.pad}>Содержание</span>
                    <span className={s.pad}> <span>XXXXXX</span> руб/мес.</span>
                </div>
            </div>
            
            <div className={s.CarTake}>
                <span>Выбрать</span>
            </div>
        </div>
    );
}

export default CarCard;