/* eslint-disable react/prop-types */
import React from 'react'
import s from './Graf.module.css'
import UpperBlock from './UpperBlock/UpperBlock'
import GrafBlock from './GrafBlock/GrafBlock'
import BottomBlock from './BottomBlock/BottomBlock'

function Graf({
    carData,
    yourDistance,
    costFuel,
    costEtc,
    itogo,
    yourFuelConsumptions,
    yourCostOneKm,
    yourCostOneDay,
}) {
    return (
        <div className={s.Graf}>
            <UpperBlock carName={carData.carName} carId={carData.carId} />

            <GrafBlock
                carData={carData}
                yourFuelConsumptions={yourFuelConsumptions}
                yourCostOneKm={yourCostOneKm}
                yourCostOneDay={yourCostOneDay}
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
