/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import s from './CarBlock.module.css'
import CarCard from './CarCard/CarCard'
import CarBtns from './CarBtns/CarBtns'
import NoCar from '../../../img/noCar.jpg'

function CarBlock({ carData }) {
    let carPic = carData.carPic

    if (carPic === '') carPic = NoCar
    return (
        <div className={s.CarBlock}>
            <CarCard carPic={carPic} carData={carData} />

            <CarBtns className={s.CarBtns} />
        </div>
    )
}

export default CarBlock
