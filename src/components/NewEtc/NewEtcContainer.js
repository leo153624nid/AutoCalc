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
import {
    initFuelArray,
    initEtcArray,
    addEtcCar,
} from '../../redux/userDataReducer'
import { patchUserEtc } from '../../api/api'

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
    initFuelArray,
    initEtcArray,
    thisCarIndex,
}) {
    const yourEtcId = etcId !== null ? etcId : changing.etcId
    const yourDate = date !== null ? date : changing.etcId
    let yourMark = ''
    let yourPrice = 0
    let yourVolume = 0
    let yourCost = 0
    let yourDistance = 0
    let carData = { ...car }
    // Следующий Индекс в массиве прочих расходов (для добавления новых прочих расходов в базу данных)
    let nextEtcIndex = 0

    // Инициализация пустых массивов (т.к. firebase не поддерживает пустые массивы)
    if (car.fuelings === undefined) carData = { ...car, fuelings: [] }
    if (car.etc === undefined) carData = { ...car, etc: [] }
    if (car.fuelings === undefined && car.etc === undefined) {
        carData = { ...carData, fuelings: [], etc: [] }
    }
    nextEtcIndex = carData.etc.length

    const yourEtc = carData.etc.find((item) => item.etcId === changing.etcId)
    const thisEtcIndex = carData.etc.findIndex(
        (item) => item.etcId === changing.etcId
    )

    if (etcId === null && yourEtc !== undefined) {
        yourMark = yourEtc.mark
        yourPrice = yourEtc.price
        yourVolume = yourEtc.volume
        yourCost = yourEtc.cost
        yourDistance = yourEtc.distance
    }

    useEffect(() => {
        // Добавление пустых массивов (т.к. firebase не поддерживает пустые массивы)
        if (car.fuelings === undefined) initFuelArray(car.carId)
        if (car.etc === undefined) initEtcArray(car.carId)
        // Установка данных редактируемых прочих расходов
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

    // Обновление или добавление прочих расходов
    const onAddEtcCar = () => {
        if (yourEtc) {
            patchUserEtc(newEtc, thisCarIndex, thisEtcIndex).then(
                (response) => {
                    if (response.statusText === 'OK') {
                        addEtcCar(newEtc)
                    }
                }
            )
        } else {
            patchUserEtc(newEtc, thisCarIndex, nextEtcIndex).then(
                (response) => {
                    if (response.statusText === 'OK') {
                        addEtcCar(newEtc)
                    }
                }
            )
        }
    }

    return (
        <NewEtc
            newEtc={newEtc}
            car={carData}
            onAddEtcCar={onAddEtcCar}
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
    setNewEtc,
    addEtcCar,
    changeDateEtc,
    changeDistanceEtc,
    changeMarkEtc,
    changePriceEtc,
    changeVolumeEtc,
    changeCostEtc,
    initFuelArray,
    initEtcArray,
})(NewEtcContainer)
