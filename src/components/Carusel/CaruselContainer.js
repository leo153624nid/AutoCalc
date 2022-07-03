/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeCarusel } from '../../redux/userDataReducer'
import { clearCar } from '../../redux/newCarReducer'
import { clearFuel } from '../../redux/newFuelReducer'
import { clearEtc } from '../../redux/newEtcReducer'
import { сlearChanging } from '../../redux/changeConsumptionsReducer'
import Carusel from './Carusel'

function CaruselContainer({
    userData,
    changeCarusel,
    clearCar,
    clearFuel,
    clearEtc,
    сlearChanging,
    isAuth,
}) {
    // Сброс состояний редактируемых страниц если ушел со страницы не подтвердив
    useEffect(() => {
        clearCar()
        clearFuel()
        clearEtc()
        сlearChanging()
    }, [])

    // Если не авторизован то редирект на страницу логина
    if (!isAuth) return <Navigate replace to="/login" />

    // Если нет машин у пользователя - рендерится усеченный вариант
    if (!userData.userCars) {
        return <Carusel carusel={null} changeCarusel={changeCarusel} />
    }

    return <Carusel carusel={userData.carusel} changeCarusel={changeCarusel} />
}

const mapStateToProps = (state) => ({
    userData: state.userData,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
    changeCarusel,
    clearCar,
    clearFuel,
    clearEtc,
    сlearChanging,
})(CaruselContainer)
