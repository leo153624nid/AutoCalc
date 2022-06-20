/* eslint-disable react/prop-types */
import React from 'react'
// import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './ChangeFuel.module.css'
import { getThisDate } from '../../redux/dateFunctions'

function ChangeFuel({ car }) {
    const fuelingsList = car.fuelings.map((fuel) => (
        <li key={fuel.fuelingId}>
            <div>{getThisDate(fuel.date)}</div>
            <div className={s.ChangeTake}>
                <NavLink to={`/change_fuel/${car.carId}`} className={s.btn}>
                    Редактировать
                </NavLink>
            </div>
            <div className={s.DelTake}>
                <NavLink
                    to={`/change_fuel_list/${car.carId}`}
                    className={s.btn}
                >
                    Удалить
                </NavLink>
            </div>
        </li>
    ))
    return (
        <div className={s.ChangeFuel}>
            <ol>{fuelingsList}</ol>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     changeFuel: state.changeFuel,
// })

// const mapDispatchToProps = (dispatch) => ({
//     addFuelCar: (value) => {
//         dispatch(addFuelCarAC(value))
//     },
//     changeDateFuel: (value) => {
//         dispatch(changeDateFuelAC(value))
//     },
//     changeDistanceFuel: (value) => {
//         dispatch(changeDistanceFuelAC(value))
//     },
//     changeMarkFuel: (value) => {
//         dispatch(changeMarkFuelAC(value))
//     },
//     changePriceFuel: (value) => {
//         dispatch(changePriceFuelAC(value))
//     },
//     changeVolumeFuel: (value) => {
//         dispatch(changeVolumeFuelAC(value))
//     },
//     changeCostFuel: (value) => {
//         dispatch(changeCostFuelAC(value))
//     },
//     changeFullFuel: (value) => {
//         dispatch(changeFullFuelAC(value))
//     },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ChangeFuel)

export default ChangeFuel
