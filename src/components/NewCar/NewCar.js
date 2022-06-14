import React from 'react'
import s from './NewCar.module.css'
import CarProp from './CarProp/CarProp'
import CarPreview from './CarPreview/CarPreview'

function NewCar(props) {
    return (
        <div className={s.NewCar}>
            <CarProp />

            <CarPreview />
        </div>
    )
}

export default NewCar
