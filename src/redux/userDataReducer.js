import { createReducer } from '@reduxjs/toolkit'
import userData from '../database/CurrentUser.json'

const initialState = userData
// Добавление в начальный state массива машин пользователя для карусели
initialState.carusel = [
    userData.userCars[0],
    userData.userCars[1],
    userData.userCars[2],
]

const CHANGE_CARUSEL = 'CHANGE_CARUSEL'
const ADD_USER_CAR = 'ADD_USER_CAR'
const ADD_FUEL_CAR = 'ADD_FUEL_CAR'
const ADD_ETC_CAR = 'ADD_ETC_CAR'
const DELETE_YOUR_CAR = 'DELETE_YOUR_CAR'
const DELETE_YOUR_FUEL = 'DELETE_YOUR_FUEL'
const DELETE_YOUR_ETC = 'DELETE_YOUR_ETC'

const userDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CHANGE_CARUSEL, (state, action) => {
            // Весь массив машин пользователя
            const cars = state.userCars

            // Номер Id машины для последней карты в карусели машин
            const lastCarId = cars.findIndex(
                (item) => item.carId === state.carusel.at(-1).carId
            )
            // Номер Id машины для первой карты в карусели машин
            const firstCarId = cars.findIndex(
                (item) => item.carId === state.carusel[0].carId
            )

            switch (action.direction) {
                case 'left':
                    state.carusel.shift()
                    if (lastCarId !== cars.length - 1) {
                        state.carusel.push(cars[lastCarId + 1])
                    } else {
                        state.carusel.push(cars[0])
                    }
                    break
                case 'right':
                    state.carusel.pop()
                    if (firstCarId !== 0) {
                        state.carusel.unshift(cars[firstCarId - 1])
                    } else {
                        state.carusel.unshift(cars.at(-1))
                    }
                    break
                default:
                    break
            }
        })
        .addCase(ADD_USER_CAR, (state, action) => {
            // Добавить POST запрос на сервер с новой машиной

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndex = carsIds.indexOf(action.car.carId)
            const caruselGoodIndex = caruselCarsIds.indexOf(action.car.carId)

            if (goodIndex !== -1) {
                state.userCars.splice(goodIndex, 1, action.car)
            } else {
                state.userCars.push(action.car)
            }
            if (caruselGoodIndex !== -1) {
                state.carusel.splice(caruselGoodIndex, 1, action.car)
            } else if (caruselCarsIds.length < 3) {
                state.carusel.push(action.car)
            }
        })
        .addCase(DELETE_YOUR_CAR, (state, action) => {
            // Добавить POST запрос на сервер с новой машиной

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            // const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndex = carsIds.indexOf(action.carId)
            // const caruselGoodIndex = caruselCarsIds.indexOf(action.carId)

            // const nextCarIndex =
            //     goodIndex + 1 === carsIds.length ? 0 : goodIndex + 1

            if (goodIndex !== -1) {
                state.userCars.splice(goodIndex, 1)
            }

            state.carusel.splice(0, state.carusel.length)
            state.carusel.push(...state.userCars)
            if (carsIds.length > 3) {
                state.carusel.splice(3, state.carusel.length)
            }
        })
        .addCase(ADD_FUEL_CAR, (state, action) => {
            // Добавить POST запрос на сервер с новой заправкой

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndexCar = carsIds.indexOf(action.fuel.carId)
            const caruselGoodIndexCar = caruselCarsIds.indexOf(
                action.fuel.carId
            )

            const goodIndexFuel = state.userCars[goodIndexCar].fuelings
                .map((item) => item.fuelingId)
                .indexOf(action.fuel.fuelingId)
            const caruselGoodIndexFuel = state.carusel[
                caruselGoodIndexCar
            ].fuelings
                .map((item) => item.fuelingId)
                .indexOf(action.fuel.fuelingId)

            if (goodIndexFuel !== -1) {
                state.userCars[goodIndexCar].fuelings.splice(
                    goodIndexFuel,
                    1,
                    action.fuel
                )
            } else {
                state.userCars[goodIndexCar].fuelings.push(action.fuel)
            }
            if (caruselGoodIndexFuel !== -1) {
                state.carusel[caruselGoodIndexCar].fuelings.splice(
                    caruselGoodIndexFuel,
                    1,
                    action.fuel
                )
            } else {
                state.carusel[caruselGoodIndexCar].fuelings.push(action.fuel)
            }
        })
        .addCase(DELETE_YOUR_FUEL, (state, action) => {
            // Добавить POST запрос на сервер с новой заправкой

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndexCar = carsIds.indexOf(action.carId)
            const caruselGoodIndexCar = caruselCarsIds.indexOf(action.carId)

            const goodIndexFuel = state.userCars[goodIndexCar].fuelings
                .map((item) => item.fuelingId)
                .indexOf(action.fuelingId)
            const caruselGoodIndexFuel = state.carusel[
                caruselGoodIndexCar
            ].fuelings
                .map((item) => item.fuelingId)
                .indexOf(action.fuelingId)

            if (goodIndexFuel !== -1) {
                state.userCars[goodIndexCar].fuelings.splice(goodIndexFuel, 1)
            }

            if (caruselGoodIndexFuel !== -1) {
                state.carusel[caruselGoodIndexCar].fuelings.splice(
                    caruselGoodIndexFuel,
                    1
                )
            }
        })
        .addCase(ADD_ETC_CAR, (state, action) => {
            // Добавить POST запрос на сервер с новой заправкой

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndexCar = carsIds.indexOf(action.etc.carId)
            const caruselGoodIndexCar = caruselCarsIds.indexOf(action.etc.carId)

            const goodIndexFuel = state.userCars[goodIndexCar].etc
                .map((item) => item.etcId)
                .indexOf(action.etc.etcId)
            const caruselGoodIndexFuel = state.carusel[caruselGoodIndexCar].etc
                .map((item) => item.etcId)
                .indexOf(action.etc.etcId)

            if (goodIndexFuel !== -1) {
                state.userCars[goodIndexCar].etc.splice(
                    goodIndexFuel,
                    1,
                    action.etc
                )
            } else {
                state.userCars[goodIndexCar].etc.push(action.etc)
            }
            if (caruselGoodIndexFuel !== -1) {
                state.carusel[caruselGoodIndexCar].etc.splice(
                    caruselGoodIndexFuel,
                    1,
                    action.etc
                )
            } else {
                state.carusel[caruselGoodIndexCar].etc.push(action.etc)
            }
        })
        .addCase(DELETE_YOUR_ETC, (state, action) => {
            // Добавить POST запрос на сервер с новой заправкой

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndexCar = carsIds.indexOf(action.carId)
            const caruselGoodIndexCar = caruselCarsIds.indexOf(action.carId)

            const goodIndexFuel = state.userCars[goodIndexCar].etc
                .map((item) => item.etcId)
                .indexOf(action.etcId)
            const caruselGoodIndexFuel = state.carusel[caruselGoodIndexCar].etc
                .map((item) => item.etcId)
                .indexOf(action.etcId)

            if (goodIndexFuel !== -1) {
                state.userCars[goodIndexCar].etc.splice(goodIndexFuel, 1)
            }
            if (caruselGoodIndexFuel !== -1) {
                state.carusel[caruselGoodIndexCar].etc.splice(
                    caruselGoodIndexFuel,
                    1
                )
            }
        })
        .addDefaultCase((state) => state)
})

// Вращение карусели карт машин влево или вправо
export const changeCarusel = (direction) => ({
    type: CHANGE_CARUSEL,
    direction,
})

// Добавление или редактирование машины
export const addUserCar = (car) => ({
    type: ADD_USER_CAR,
    car,
})

// Удаление машины
export const delUserCar = (carId) => ({
    type: DELETE_YOUR_CAR,
    carId,
})

// Добавление или редактирование заправки машины
export const addFuelCar = (fuel) => ({
    type: ADD_FUEL_CAR,
    fuel,
})

// Удаление заправки машины
export const delFuelCar = (carId, fuelingId) => ({
    type: DELETE_YOUR_FUEL,
    carId,
    fuelingId,
})

// Добавление или редактирование прочих расходов машины
export const addEtcCar = (etc) => ({
    type: ADD_ETC_CAR,
    etc,
})

// Удаление прочих расходов машины
export const delEtcCar = (carId, etcId) => ({
    type: DELETE_YOUR_ETC,
    carId,
    etcId,
})

export default userDataReducer
