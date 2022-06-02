import React, { useState } from "react";
import s from './Carusel.module.css';
import ArrowNext from "../ArrowNext/ArrowNext";
import ArrowPrev from "../ArrowPrev/ArrowPrev";
import CarBlock from "../CarBlock/CarBlock";
import noCar from '../../img/noCar.jpg';
// Временное решение по подгрузке картинок машин, потом они будут приходить с сервера
import carPic1 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/e46.JPG';
import carPic2 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/e83.jpg';
import carPic3 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/b14.jpeg';

function Carusel (props) {

    let carOne = {
        "carId": 1,
        "carName": "?",
        "carPic": "?",
        "distance": '?',
        "fuelConsumptions": '?',
        "allMonth": '?'
    };
    let carTwo = {
        "carId": 2,
        "carName": "?",
        "carPic": "?",
        "distance": '?',
        "fuelConsumptions": '?',
        "allMonth": '?'
    };
    let carThree = {
        "carId": 3,
        "carName": "?",
        "carPic": "?",
        "distance": '?',
        "fuelConsumptions": '?',
        "allMonth": '?'
    };
    let carNoCar = {
        "carId": 0,
        "carName": "?",
        "carPic": "?",
        "distance": '?',
        "fuelConsumptions": '?',
        "allMonth": '?'
    };

    let userCars = props.userCars;

    if (userCars.length == 1) {
        carOne = userCars[0];
    } else if (userCars.length == 2) {
        carOne = userCars[0];
        carTwo = userCars[1];
    } else if (userCars.length >= 3) {
        carOne = userCars[0];
        carTwo = userCars[1];
        carThree = userCars[2];
    }

    const [cars, setCars] = useState([carOne, carTwo, carThree]);

    // Функция смены автомобильных карт влево или вправо
    const changeCarBlock = (direction) => {
        let newCars = [cars[0], cars[1], cars[2]];
        let nextCarId = userCars.findIndex(item => item.carId > cars[2].carId);
        let prevCarId = userCars.findIndex(item => item.carId < cars[0].carId);
        if ( cars[0].carId === userCars.at(-1).carId ) {
            prevCarId = userCars.length-2;
        }
        console.log (`nextId=${nextCarId}; prevId=${prevCarId}`);
        console.log (`direction=${direction}`);

        if (direction === 'left') {
            newCars.shift();

            if (nextCarId !== -1) {
                newCars.push(userCars[nextCarId]);
            } else {
                newCars.push(userCars[0]);
            }

            setCars(newCars);

        } else if (direction === 'right') {
            newCars.pop();
            
            if (prevCarId !== -1) {
                newCars.unshift(userCars[prevCarId]);
            } else {
                newCars.unshift(userCars.at(-1));
            }

            setCars(newCars);
        }
    };

    return (
        <div className={s.content}>
            <div className={`${s.arrow} ${s.ArrowPrev}`} onClick={()=>changeCarBlock('left')}>
                <ArrowPrev />
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic1} carData={cars[0]} />
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic2} carData={cars[1]} />
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic3} carData={cars[2]} />
            </div>

            <div className={`${s.arrow} ${s.ArrowNext}`} onClick={()=>changeCarBlock('right')}>
                <ArrowNext />
            </div>
        </div>
    );
}

export default Carusel;