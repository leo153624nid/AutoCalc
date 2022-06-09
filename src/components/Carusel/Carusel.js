/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import s from './Carusel.module.css'
import ArrowNext from './ArrowNext/ArrowNext'
import ArrowPrev from './ArrowPrev/ArrowPrev'
import CarBlock from './CarBlock/CarBlock'
import AddCarBtn from '../Header/AddCarBtn/AddCarBtn'

function Carusel({ carusel, changeCarusel }) {
    // const userCars = props.userCars

    // const [cars, setCars] = useState([userCars[0], userCars[1], userCars[2]])
    const carBlockList = []

    // функция получает массив машин для карусели и создает секцию из 1...3 карт машин
    function caruselInit() {
        if (
            carusel[0] === undefined &&
            carusel[1] === undefined &&
            carusel[2] === undefined
        ) {
            carBlockList.push(
                <div className={s.CarBlock}>
                    <div className={s.noCar}>У вас нет машин</div>
                    <AddCarBtn />
                </div>
            )
        } else if (
            carusel[0] &&
            carusel[1] === undefined &&
            carusel[2] === undefined
        ) {
            carBlockList.push(
                <div
                    className={`${s.CarBlock} ${s.activeCarBlock}`}
                    key={carusel[0].carId}
                >
                    <CarBlock carData={carusel[0]} />
                </div>
            )
        } else if (carusel[0] && carusel[1] && carusel[2] === undefined) {
            carBlockList.push(
                <div
                    className={`${s.CarBlock} ${s.activeCarBlock}`}
                    key={carusel[0].carId}
                >
                    <CarBlock carData={carusel[0]} />
                </div>,

                <div className={s.CarBlock} key={carusel[1].carId}>
                    <CarBlock carData={carusel[1]} />
                </div>
            )
        } else if (carusel[0] && carusel[1] && carusel[2]) {
            carBlockList.push(
                <div className={s.CarBlock} key={carusel[0].carId}>
                    <CarBlock carData={carusel[0]} />
                </div>,

                <div
                    className={`${s.CarBlock} ${s.activeCarBlock}`}
                    key={carusel[1].carId}
                >
                    <CarBlock carData={carusel[1]} />
                </div>,

                <div className={s.CarBlock} key={carusel[2].carId}>
                    <CarBlock carData={carusel[2]} />
                </div>
            )
        }
    }

    caruselInit()

    // Функция смены автомобильных карт влево или вправо
    // function changeCarusel(direction) {
    //     const newCars = [cars[0], cars[1], cars[2]]
    //     const nextCarId = userCars.findIndex(
    //         (item) => item.carId > cars[2].carId
    //     )
    //     const prevCarId =
    //         userCars.findIndex((item) => item.carId === cars[0].carId) - 1

    //     if (direction === 'left') {
    //         newCars.shift()

    //         if (nextCarId !== -1) {
    //             newCars.push(userCars[nextCarId])
    //         } else {
    //             newCars.push(userCars[0])
    //         }

    //         setCars(newCars)
    //     } else if (direction === 'right') {
    //         newCars.pop()

    //         if (prevCarId === -1) {
    //             newCars.unshift(userCars.at(-1))
    //         } else {
    //             newCars.unshift(userCars[prevCarId])
    //         }

    //         setCars(newCars)
    //     }
    // }

    return (
        <div className={s.content}>
            <div
                className={`${s.arrow} ${s.ArrowPrev}`}
                onClick={() => changeCarusel('left')}
            >
                <ArrowPrev />
            </div>

            {carBlockList}

            <div
                className={`${s.arrow} ${s.ArrowNext}`}
                onClick={() => changeCarusel('right')}
            >
                <ArrowNext />
            </div>
        </div>
    )
}

export default Carusel
