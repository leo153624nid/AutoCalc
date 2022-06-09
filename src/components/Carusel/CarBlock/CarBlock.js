/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import s from './CarBlock.module.css'
import CarCard from './CarCard/CarCard'
import CarBtns from './CarBtns/CarBtns'
import NoCar from '../../../img/noCar.jpg'

function CarBlock(props) {
    const car = props.carData
    let carPic = car.carPic

    if (carPic === '') carPic = NoCar
    return (
        <div className={s.CarBlock}>
            <CarCard carPic={carPic} carData={car} />

            <CarBtns className={s.CarBtns} />
        </div>
    )
}

export default CarBlock
