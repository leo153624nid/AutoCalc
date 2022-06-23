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

    return <Graf carData={carData} />
}

export default connect(null, { сlearChanging })(GrafContainer)
