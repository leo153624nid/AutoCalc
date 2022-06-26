/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { сlearChanging } from '../../redux/changeConsumptionsReducer'
import Graf from './Graf'

function GrafContainer({ carData, сlearChanging }) {
    useEffect(() => {
        сlearChanging()
    }, [сlearChanging])

    let car = {}

    if (carData.fuelings === undefined) car = { ...carData, fuelings: [] }
    if (carData.etc === undefined) car = { ...carData, etc: [] }
    if (carData.fuelings === undefined && carData.etc === undefined) {
        car = { ...carData, fuelings: [], etc: [] }
        return <Graf carData={car} />
    }
    // if (carData.fuelings.length === 0) car = { ...carData }
    // if (carData.etc.length === 0) car = { ...carData }
    car = { ...carData }

    return <Graf carData={car} />
}

export default connect(null, { сlearChanging })(GrafContainer)
