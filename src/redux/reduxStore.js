import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userDataReducer'
import idGrafikReducer from './idGrafikReducer'
import newCarReducer from './newCarReducer'
import newFuelReducer from './newFuelReducer'

const rootReducer = combineReducers({
    userData: userDataReducer,
    idGrafik: idGrafikReducer,
    newCar: newCarReducer,
    newFuel: newFuelReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
