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
        .addDefaultCase((state) => state)
})

// Вращение карусели карт машин влево или вправо
export const changeCaruselActionCreator = (direct) => ({
    type: CHANGE_CARUSEL,
    direction: direct,
})

export default userDataReducer
