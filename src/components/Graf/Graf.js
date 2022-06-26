/* eslint-disable react/prop-types */
import React from 'react'
import s from './Graf.module.css'
import UpperBlock from './UpperBlock/UpperBlock'
import GrafBlock from './GrafBlock/GrafBlock'
import BottomBlock from './BottomBlock/BottomBlock'

function Graf({ carData }) {
    let yourDistance = 0
    let costFuel = 0
    let costEtc = 0
    let itogo = 0
    let yourFuelConsumptions = 0

    if (carData.fuelings.length > 0) {
        yourDistance = Math.floor(
            carData.fuelings.at(-1).distance - carData.fuelings.at(0).distance
        )
        costFuel = Math.floor(
            carData.fuelings
                .map((f) => f.cost)
                .reduce((total, value) => total + value)
        )
        yourFuelConsumptions = Math.floor(
            (carData.fuelings
                .map((f) => f.volume)
                .reduce((total, value) => total + value) *
                100) /
                yourDistance
        )
    }
    if (carData.etc.length > 0) {
        costEtc = Math.floor(
            carData.etc
                .map((f) => f.cost)
                .reduce((total, value) => total + value)
        )
    }
    itogo = Math.floor(costFuel + costEtc)

    return (
        <div className={s.Graf}>
            <UpperBlock carName={carData.carName} carId={carData.carId} />

            <GrafBlock
                carData={carData}
                yourFuelConsumptions={yourFuelConsumptions}
            />

            <BottomBlock
                carId={carData.carId}
                yourDistance={yourDistance}
                costFuel={costFuel}
                costEtc={costEtc}
                itogo={itogo}
            />
        </div>
    )
}

export default Graf
