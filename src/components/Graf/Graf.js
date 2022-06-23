/* eslint-disable react/prop-types */
import React from 'react'
import s from './Graf.module.css'
import UpperBlock from './UpperBlock/UpperBlock'
import GrafBlock from './GrafBlock/GrafBlock'
import BottomBlock from './BottomBlock/BottomBlock'

function Graf({ carData }) {
    return (
        <div className={s.Graf}>
            <UpperBlock carName={carData.carName} carId={carData.carId} />

            <GrafBlock carData={carData} />

            <BottomBlock carData={carData} />
        </div>
    )
}

export default Graf
