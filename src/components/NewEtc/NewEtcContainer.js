/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewEtc from './NewEtc'
import {
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
    setNewEtc,
} from '../../redux/newEtcReducer'
import { addEtcCar } from '../../redux/userDataReducer'

function NewEtcContainer({
    newEtc,
    car,
    etcId,
    date,
    addEtcCar,
    setNewEtc,
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
    changing,
}) {
    const yourEtcId = etcId !== null ? etcId : changing.etcId
    const yourDate = date !== null ? date : changing.etcId
    let yourMark = ''
    let yourPrice = 0
    let yourVolume = 0
    let yourCost = 0
    let yourDistance = 0
    let carData = { ...car }

    if (car.fuelings === undefined) carData = { ...car, fuelings: [] }
    if (car.etc === undefined) carData = { ...car, etc: [] }
    if (car.fuelings === undefined && car.etc === undefined) {
        carData = { ...carData, fuelings: [], etc: [] }
    }

    const yourEtc = carData.etc.find((item) => item.etcId === changing.etcId)

    if (etcId === null && yourEtc !== undefined) {
        yourMark = yourEtc.mark
        yourPrice = yourEtc.price
        yourVolume = yourEtc.volume
        yourCost = yourEtc.cost
        yourDistance = yourEtc.distance
    }

    useEffect(() => {
        setNewEtc({
            etcId: yourEtcId,
            date: yourDate,
            carId: car.carId,
            mark: yourMark,
            price: yourPrice,
            volume: yourVolume,
            cost: yourCost,
            distance: yourDistance,
        })
    }, [])

    return (
        <NewEtc
            newEtc={newEtc}
            car={carData}
            addEtcCar={addEtcCar}
            changeDateEtc={changeDateEtc}
            changeDistanceEtc={changeDistanceEtc}
            changeMarkEtc={changeMarkEtc}
            changePriceEtc={changePriceEtc}
            changeVolumeEtc={changeVolumeEtc}
            changeCostEtc={changeCostEtc}
        />
    )
}

const mapStateToProps = (state) => ({
    newEtc: state.newEtc,
    changing: state.changing,
})

export default connect(mapStateToProps, {
    addEtcCar,
    setNewEtc,
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
})(NewEtcContainer)
