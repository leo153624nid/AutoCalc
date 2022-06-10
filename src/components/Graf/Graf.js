/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import s from './Graf.module.css'
import UpperBlock from './UpperBlock/UpperBlock'
import GrafBlock from './GrafBlock/GrafBlock'
import BottomBlock from './BottomBlock/BottomBlock'

function Graf({ carData, idGrafik, changeGrafik }) {
    return (
        <div className={s.Graf}>
            <UpperBlock changeGrafik={changeGrafik} carName={carData.carName} />

            <GrafBlock idGrafik={idGrafik} carData={carData} />

            <BottomBlock carData={carData} />
        </div>
    )
}

export default Graf
