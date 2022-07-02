/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { сlearChanging } from '../../redux/changeConsumptionsReducer'
import { setCarData } from '../../redux/userDataReducer'
import Graf from './Graf'
import { getNowDateMS } from '../../redux/dateFunctions'

function GrafContainer({ carData, сlearChanging, setCarData }) {
    useEffect(() => {
        сlearChanging()
    }, [сlearChanging])

    let yourDistance = 0
    let costFuel = 0
    let costEtc = 0
    let itogo = 0
    let yourFuelConsumptions = 0
    let yourCostOneKm = 0
    let yourCostOneDay = 0

    // Т.к в базе данных нет пустых массивов, то приходится их добавлять. это костыль
    let car = {}
    if (carData.fuelings === undefined) {
        car = { ...carData, fuelings: [] }
    } else if (carData.etc === undefined) car = { ...carData, etc: [] }
    if (carData.fuelings === undefined && carData.etc === undefined) {
        car = { ...carData, fuelings: [], etc: [] }
        return (
            <Graf
                carData={car}
                yourDistance={yourDistance}
                costFuel={costFuel}
                costEtc={costEtc}
                itogo={itogo}
                yourFuelConsumptions={yourFuelConsumptions}
                yourCostOneKm={yourCostOneKm}
                yourCostOneDay={yourCostOneDay}
            />
        )
    }
    car = { ...carData }

    if (car.fuelings.length > 0) {
        yourDistance = Math.floor(
            car.fuelings.at(-1).distance - car.fuelings.at(0).distance
        )
        costFuel = Math.floor(
            car.fuelings
                .map((f) => f.cost)
                .reduce((total, value) => total + value)
        )
        yourFuelConsumptions =
            Math.floor(
                (car.fuelings
                    .map((f) => f.volume)
                    .reduce((total, value) => total + value) *
                    1000) /
                    yourDistance
            ) / 10
    }
    if (car.etc.length > 0) {
        costEtc = Math.floor(
            car.etc.map((f) => f.cost).reduce((total, value) => total + value)
        )
    }
    itogo = Math.floor(costFuel + costEtc)
    yourCostOneKm = Math.floor(itogo / yourDistance)
    // carData.carId - соответствует дате первой отметки в мс
    yourCostOneDay = Math.floor(
        itogo / ((getNowDateMS() - car.carId) / 86400000)
    )

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setCarData({
            ...car,
            fuelConsumptions: yourFuelConsumptions,
            costOneKm: yourCostOneKm,
            costOneDay: yourCostOneDay,
        })
    }, [])

    return (
        <Graf
            carData={car}
            yourDistance={yourDistance}
            costFuel={costFuel}
            costEtc={costEtc}
            itogo={itogo}
            yourFuelConsumptions={yourFuelConsumptions}
            yourCostOneKm={yourCostOneKm}
            yourCostOneDay={yourCostOneDay}
        />
    )
}

export default connect(null, { сlearChanging, setCarData })(GrafContainer)
