import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userDataReducer'
import idGrafikReducer from './idGrafikReducer'

const rootReducer = combineReducers({
    userData: userDataReducer,
    idGrafik: idGrafikReducer,
})

const store = configureStore({ reducer: rootReducer })

export default store
