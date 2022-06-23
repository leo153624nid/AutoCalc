/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeCarusel } from '../../redux/userDataReducer'
import { clearCar } from '../../redux/newCarReducer'
import { clearFuel } from '../../redux/newFuelReducer'
import { clearEtc } from '../../redux/newEtcReducer'
import { сlearChanging } from '../../redux/changeConsumptionsReducer'
import Carusel from './Carusel'

function CaruselContainer({
    carusel,
    changeCarusel,
    clearCar,
    clearFuel,
    clearEtc,
    сlearChanging,
}) {
    useEffect(() => {
        clearCar()
        clearFuel()
        clearEtc()
        сlearChanging()
    }, [clearEtc, clearFuel, clearCar, сlearChanging])

    return <Carusel carusel={carusel} changeCarusel={changeCarusel} />
}

const mapStateToProps = (state) => ({
    carusel: state.userData.carusel,
    // userData: state.userData,
})

export default connect(mapStateToProps, {
    changeCarusel,
    clearCar,
    clearFuel,
    clearEtc,
    сlearChanging,
})(CaruselContainer)
