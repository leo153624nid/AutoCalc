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

    const [cars, setCars] = useState([carOne, carTwo, carThree]);
    let userCars = props.userCars;
    let carBlockList = [];

    if (userCars.length == 0 || userCars.length == undefined) {
        carBlockList.push(
            <div className={s.CarBlock}>
                У вас нет машин
            </div>
        );
    } else if (userCars.length == 1) {
        carOne = userCars[0];

        carBlockList.push(
            <div className={s.CarBlock}>
                <CarBlock carPic={carPic1} carData={cars[0]} />
            </div>
        );
    } else if (userCars.length == 2) {
        carOne = userCars[0];
        carTwo = userCars[1];

        carBlockList.push(
            <div className={s.CarBlock}>
                <CarBlock carPic={carPic1} carData={cars[0]} />
            </div>,

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic2} carData={cars[1]} />
            </div>
        );
    } else if (userCars.length >= 3) {
        carOne = userCars[0];
        carTwo = userCars[1];
        carThree = userCars[2];

        carBlockList.push(
            <div className={s.CarBlock}>
                <CarBlock carPic={carPic1} carData={cars[0]} />
            </div>,

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic2} carData={cars[1]} />
            </div>,

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic3} carData={cars[2]} />
            </div>
        );
    }

    // Функция смены автомобильных карт влево или вправо
    const changeCarBlock = (direction) => {
        let newCars = [cars[0], cars[1], cars[2]];
        let nextCarId = userCars.findIndex(item => item.carId > cars[2].carId);
        let prevCarId = userCars.findIndex(item => item.carId === cars[0].carId) - 1;

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
            
            if (prevCarId === -1) {
                newCars.unshift(userCars.at(-1));
            } else {
                newCars.unshift(userCars[prevCarId]);
            }

            setCars(newCars);
        }
    };

    return (
        <div className={s.content}>
            <div className={`${s.arrow} ${s.ArrowPrev}`} onClick={()=>changeCarBlock('left')}>
                <ArrowPrev />
            </div>

            {carBlockList}

            {/* <div className={s.CarBlock}>
                <CarBlock carPic={carPic1} carData={cars[0]} />
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic2} carData={cars[1]} />
            </div>

            <div className={s.CarBlock}>
                <CarBlock carPic={carPic3} carData={cars[2]} />
            </div> */}

            <div className={`${s.arrow} ${s.ArrowNext}`} onClick={()=>changeCarBlock('right')}>
                <ArrowNext />
            </div>
        </div>
    );
}

export default Carusel;