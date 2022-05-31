import React from "react";
import s from './Carusel.module.css';
import ArrowNext from "../ArrowNext/ArrowNext";
import ArrowPrev from "../ArrowPrev/ArrowPrev";
import CarBlock from "../CarBlock/CarBlock";
import carPic1 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/e46.JPG';
import carPic2 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/e83.jpg';
import carPic3 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/b14.jpeg';

function Carusel (props) {
    return (
        <div className={s.content}>
            <div className={s.ArrowPrev}>
                <ArrowPrev />
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic1}/>
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic2}/>
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic3}/>
            </div>

            <div className={s.ArrowNext}>
                <ArrowNext />
            </div>
        </div>
    );
}

export default Carusel;