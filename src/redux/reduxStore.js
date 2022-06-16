import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userDataReducer'
import idGrafikReducer from './idGrafikReducer'
import newCarReducer from './newCarReducer'

const rootReducer = combineReducers({
    userData: userDataReducer,
    idGrafik: idGrafikReducer,
    newCar: newCarReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
