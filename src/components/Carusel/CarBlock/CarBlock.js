/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import s from './CarBlock.module.css'
import CarCard from './CarCard/CarCard'
import CarBtns from './CarBtns/CarBtns'

function CarBlock(props) {
    const carPic = props.carPic
    const car = props.carData
    return (
        <div className={s.CarBlock}>
            <CarCard carPic={carPic} carData={car} />

            <CarBtns className={s.CarBtns} />
        </div>
    )
}

export default CarBlock
