import React, { useState } from "react";
import s from './Carusel.module.css';
import ArrowNext from "../ArrowNext/ArrowNext";
import ArrowPrev from "../ArrowPrev/ArrowPrev";
import CarBlock from "../CarBlock/CarBlock";
import AddCarBtn from '../AddCarBtn/AddCarBtn';
// Временное решение по подгрузке картинок машин, потом они будут приходить с сервера
import carPic1 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/e46.JPG';
import carPic2 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/e83.jpg';
import carPic3 from 'S:/Users/Алексей/Desktop/IT/GitHub/auto_calc/src/img/b14.jpeg';

function Carusel (props) {

    let userCars = props.userCars;
    const [cars, setCars] = useState([userCars[0], userCars[1], userCars[2]]);
    let carBlockList = [];

    // функция считывает входные данные пользователя о машинах и создает секцию из 1...3 карт
    // TODO - переделать через .map
    function getCars () {
        if (userCars.length === 0 || userCars.length === undefined) {

            carBlockList.push(
                <div className={s.CarBlock}>
                    <div className={s.noCar}>У вас нет машин</div>
                    <AddCarBtn />
                </div>
            );
        } else if (userCars.length === 1) {
    
            carBlockList.push(
                <div className={s.CarBlock} key={cars[0].carId}>
                    <CarBlock carPic={carPic1} carData={cars[0]} />
                </div>
            );
        } else if (userCars.length === 2) {
    
            carBlockList.push(
                <div className={s.CarBlock} key={cars[0].carId}>
                    <CarBlock carPic={carPic1} carData={cars[0]} />
                </div>,
    
                <div className={s.CarBlock} key={cars[1].carId}>
                    <CarBlock carPic={carPic2} carData={cars[1]} />
                </div>
            );
        } else if (userCars.length >= 3) {
    
            carBlockList.push(
                <div className={s.CarBlock} key={cars[0].carId}>
                    <CarBlock carPic={carPic1} carData={cars[0]} />
                </div>,
    
                <div className={s.CarBlock} key={cars[1].carId}>
                    <CarBlock carPic={carPic2} carData={cars[1]} />
                </div>,
    
                <div className={s.CarBlock} key={cars[2].carId}>
                    <CarBlock carPic={carPic3} carData={cars[2]} />
                </div>
            );
        }
    }

    getCars();

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

            <div className={`${s.arrow} ${s.ArrowNext}`} onClick={()=>changeCarBlock('right')}>
                <ArrowNext />
            </div>
        </div>
    );
}

export default Carusel;