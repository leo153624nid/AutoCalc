import React from "react";
import s from './CarBlock.module.css';
import CarCard from '../CarCard/CarCard';
import CarBtns from '../CarBtns/CarBtns';

function CarBlock () {
    return (
        <div className={s.CarBlock}>
            <CarCard />
            <CarBtns />
        </div>
    );
}

export default CarBlock;