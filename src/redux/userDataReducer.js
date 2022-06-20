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
// const CHANGE_YOUR_FUEL = 'CHANGE_YOUR_FUEL'
// const DELETE_YOUR_FUEL = 'DELETE_YOUR_FUEL'

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
            }
        })
        .addCase(ADD_FUEL_CAR, (state, action) => {
            // Добавить POST запрос на сервер с новой заправкой

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndex = carsIds.indexOf(action.fuel.carId)
            const caruselGoodIndex = caruselCarsIds.indexOf(action.fuel.carId)

            if (goodIndex !== -1) {
                state.userCars[goodIndex].fuelings.push(action.fuel)
            }
            if (caruselGoodIndex !== -1) {
                state.carusel[caruselGoodIndex].fuelings.push(action.fuel)
            }
        })
        .addCase(ADD_ETC_CAR, (state, action) => {
            // Добавить POST запрос на сервер с новой заправкой

            // Весь массив id машин пользователя
            const carsIds = state.userCars.map((item) => item.carId)
            const caruselCarsIds = state.carusel.map((item) => item.carId)

            const goodIndex = carsIds.indexOf(action.etc.carId)
            const caruselGoodIndex = caruselCarsIds.indexOf(action.etc.carId)

            if (goodIndex !== -1) {
                state.userCars[goodIndex].etc.push(action.etc)
            }
            if (caruselGoodIndex !== -1) {
                state.carusel[caruselGoodIndex].etc.push(action.etc)
            }
        })
        .addDefaultCase((state) => state)
})

// Вращение карусели карт машин влево или вправо
export const changeCaruselAC = (direction) => ({
    type: CHANGE_CARUSEL,
    direction,
})

// Добавление или редактирование машины
export const addUserCarAC = (car) => ({
    type: ADD_USER_CAR,
    car,
})

// Добавление заправки машины
export const addFuelCarAC = (fuel) => ({
    type: ADD_FUEL_CAR,
    fuel,
})

// Добавление прочих расходов машины
export const addEtcCarAC = (etc) => ({
    type: ADD_ETC_CAR,
    etc,
})

export default userDataReducer
