import { combineReducers, configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger'
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

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
