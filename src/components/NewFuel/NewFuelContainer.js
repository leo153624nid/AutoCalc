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
import {
    initFuelArray,
    initEtcArray,
    addFuelCar,
} from '../../redux/userDataReducer'
import { userDataAPI } from '../../api/api'

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
    initFuelArray,
    initEtcArray,
    thisCarIndex,
}) {
    const yourFuelingId = fuelingId !== null ? fuelingId : changing.fuelingId
    const yourDate = date !== null ? date : changing.fuelingId
    let yourMark = 'АИ-95'
    let yourPrice = 0
    let yourVolume = 0
    let yourCost = 0
    let yourFull = 0
    let yourDistance = 0
    let carData = { ...car }
    // Следующий Индекс в массиве заправок (для добавления новой заправки в базу данных)
    let nextFuelIndex = 0

    // Инициализация пустых массивов (т.к. firebase не поддерживает пустые массивы)
    if (car.fuelings === undefined) carData = { ...car, fuelings: [] }
    if (car.etc === undefined) carData = { ...car, etc: [] }
    if (car.fuelings === undefined && car.etc === undefined) {
        carData = { ...carData, fuelings: [], etc: [] }
    }
    nextFuelIndex = carData.fuelings.length

    const yourFueling = carData.fuelings.find(
        (item) => item.fuelingId === changing.fuelingId
    )
    const thisFuelIndex = carData.fuelings.findIndex(
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
        // Добавление пустых массивов (т.к. firebase не поддерживает пустые массивы)
        if (car.fuelings === undefined) initFuelArray(car.carId)
        if (car.etc === undefined) initEtcArray(car.carId)
        // Установка данных редактируемой заправки
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

    // Обновление или добавление топлива
    const onAddFuelCar = () => {
        if (yourFueling) {
            userDataAPI
                .patchUserFuel(newFuel, thisCarIndex, thisFuelIndex)
                .then((response) => {
                    if (response.statusText === 'OK') {
                        addFuelCar(newFuel)
                    }
                })
        } else {
            userDataAPI
                .patchUserFuel(newFuel, thisCarIndex, nextFuelIndex)
                .then((response) => {
                    if (response.statusText === 'OK') {
                        addFuelCar(newFuel)
                    }
                })
        }
    }

    return (
        <NewFuel
            newFuel={newFuel}
            car={carData}
            onAddFuelCar={onAddFuelCar}
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
    setNewFuel,
    addFuelCar,
    changeDateFuel,
    changeDistanceFuel,
    changeMarkFuel,
    changePriceFuel,
    changeVolumeFuel,
    changeCostFuel,
    changeFullFuel,
    initFuelArray,
    initEtcArray,
})(NewFuelContainer)
