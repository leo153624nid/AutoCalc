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

    // Т.к в базе данных нет пустых массивов, то приходится их добавлять. это костыль
    let car = {}
    if (carData.fuelings === undefined) {
        car = { ...carData, fuelings: [] }
    } else if (carData.etc === undefined) car = { ...carData, etc: [] }
    if (carData.fuelings === undefined && carData.etc === undefined) {
        car = { ...carData, fuelings: [], etc: [] }
        return <Graf carData={car} />
    }
    car = { ...carData }

    return <Graf carData={car} />
}

export default connect(null, { сlearChanging })(GrafContainer)
