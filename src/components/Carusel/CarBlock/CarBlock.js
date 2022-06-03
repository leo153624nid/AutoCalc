import React from "react";
import s from './CarBlock.module.css';
import CarCard from './CarCard/CarCard';
import CarBtns from './CarBtns/CarBtns';

function CarBlock (props) {
    return (
        <div className={s.CarBlock}>
            <CarCard {...props}/>
            
            <CarBtns />
        </div>
    );
}

export default CarBlock;