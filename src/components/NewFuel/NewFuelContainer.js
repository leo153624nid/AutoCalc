/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewFuel from './NewFuel'
import {
    changeDateFuel,
    changeDistanceFuel,
    changeMarkFuel,
    changePriceFuel,
    changeVolumeFuel,
    changeCostFuel,
    changeFullFuel,
    setNewFuel,
} from '../../redux/newFuelReducer'
import { addFuelCar } from '../../redux/userDataReducer'

function NewFuelContainer({
    newFuel,
    car,
    fuelingId,
    date,
    addFuelCar,
    setNewFuel,
    changeDateFuel,
    changeDistanceFuel,
    changeMarkFuel,
    changePriceFuel,
    changeVolumeFuel,
    changeCostFuel,
    changeFullFuel,
    changing,
}) {
    const yourFuelingId = fuelingId !== null ? fuelingId : changing.fuelingId
    const yourDate = date !== null ? date : changing.fuelingId
    let yourMark = 'АИ-95'
    let yourPrice = 0
    let yourVolume = 0
    let yourCost = 0
    let yourFull = 0
    let yourDistance = 0

    const yourFueling = car.fuelings.find(
        (item) => item.fuelingId === changing.fuelingId
    )

    if (fuelingId === null && yourFueling !== undefined) {
        yourMark = yourFueling.mark
        yourPrice = yourFueling.price
        yourVolume = yourFueling.volume
        yourCost = yourFueling.cost
        yourFull = yourFueling.full
        yourDistance = yourFueling.distance
    }

    useEffect(() => {
        setNewFuel({
            fuelingId: yourFuelingId,
            date: yourDate,
            carId: car.carId,
            mark: yourMark,
            price: yourPrice,
            volume: yourVolume,
            cost: yourCost,
            full: yourFull,
            distance: yourDistance,
        })
    }, [])

    return (
        <NewFuel
            newFuel={newFuel}
            car={car}
            addFuelCar={addFuelCar}
            changeDateFuel={changeDateFuel}
            changeDistanceFuel={changeDistanceFuel}
            changeMarkFuel={changeMarkFuel}
            changePriceFuel={changePriceFuel}
            changeVolumeFuel={changeVolumeFuel}
            changeCostFuel={changeCostFuel}
            changeFullFuel={changeFullFuel}
        />
    )
}

const mapStateToProps = (state) => ({
    newFuel: state.newFuel,
    changing: state.changing,
})

export default connect(mapStateToProps, {
    addFuelCar,
    setNewFuel,
    changeDateFuel,
    changeDistanceFuel,
    changeMarkFuel,
    changePriceFuel,
    changeVolumeFuel,
    changeCostFuel,
    changeFullFuel,
})(NewFuelContainer)