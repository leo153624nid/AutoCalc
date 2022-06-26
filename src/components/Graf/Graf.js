/* eslint-disable react/prop-types */
import React from 'react'
import s from './Graf.module.css'
import UpperBlock from './UpperBlock/UpperBlock'
import GrafBlock from './GrafBlock/GrafBlock'
import BottomBlock from './BottomBlock/BottomBlock'
// import { getNowDateMS } from '../../redux/dateFunctions'

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
    // let yourDistance = 0
    // let costFuel = 0
    // let costEtc = 0
    // let itogo = 0
    // let yourFuelConsumptions = 0
    // let yourCostOneKm = 0
    // let yourCostOneDay = 0

    // if (carData.fuelings.length > 0) {
    //     yourDistance = Math.floor(
    //         carData.fuelings.at(-1).distance - carData.fuelings.at(0).distance
    //     )
    //     costFuel = Math.floor(
    //         carData.fuelings
    //             .map((f) => f.cost)
    //             .reduce((total, value) => total + value)
    //     )
    //     yourFuelConsumptions =
    //         Math.floor(
    //             (carData.fuelings
    //                 .map((f) => f.volume)
    //                 .reduce((total, value) => total + value) *
    //                 1000) /
    //                 yourDistance
    //         ) / 10
    // }
    // if (carData.etc.length > 0) {
    //     costEtc = Math.floor(
    //         carData.etc
    //             .map((f) => f.cost)
    //             .reduce((total, value) => total + value)
    //     )
    // }
    // itogo = Math.floor(costFuel + costEtc)
    // yourCostOneKm = Math.floor(itogo / yourDistance)
    // // carData.carId - соответствует дате первой отметки в мс
    // yourCostOneDay = Math.floor(
    //     itogo / ((getNowDateMS() - carData.carId) / 86400000)
    // )

    // if (yourFuelConsumptions !== carData.fuelConsumptions)
    //     setCarData({ ...carData, fuelConsumptions: yourFuelConsumptions })
    // if (yourCostOneKm !== carData.costOneKm)
    //     setCarData({ ...carData, costOneKm: yourCostOneKm })
    // if (yourCostOneDay !== carData.costOneDay)
    //     setCarData({ ...carData, costOneDay: yourCostOneDay })

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
