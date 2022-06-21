/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import s from './Graf.module.css'
import UpperBlock from './UpperBlock/UpperBlock'
import GrafBlock from './GrafBlock/GrafBlock'
import BottomBlock from './BottomBlock/BottomBlock'
import { сlearChanging } from '../../redux/changeConsumptionsReducer'

function Graf({ carData, сlearChanging }) {
    useEffect(() => {
        сlearChanging()
    }, [сlearChanging])
    return (
        <div className={s.Graf}>
            <UpperBlock carName={carData.carName} carId={carData.carId} />

            <GrafBlock carData={carData} />

            <BottomBlock carData={carData} />
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => ({
//     сlearChanging: () => {
//         dispatch(сlearChanging())
//     },
// })

export default connect(null, { сlearChanging })(Graf)
