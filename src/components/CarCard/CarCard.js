import React from "react";
import s from './CarCard.module.css';


function CarCard (props) {
    console.dir(props);
    const carPic = props.carPic;

    return (
        <div className={s.CarCard}>
            <img src={carPic} alt='CarPic'/>

            <div>
                name, distance
            </div>

            <div>
                расход топлива, содержание
            </div>

            <div>
                кнопка выбора
            </div>
        </div>
    );
}

export default CarCard;