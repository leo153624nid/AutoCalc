import { createReducer } from '@reduxjs/toolkit'

const CHANGE_GRAFIK = 'CHANGE_GRAFIK'

const idGrafikReducer = createReducer(1, (builder) => {
    builder
        .addCase(CHANGE_GRAFIK, (state, action) => {
            const newState = Number(action.key)
            return newState
        })
        .addDefaultCase((state) => state)
})

export const changeGrafik = (value) => ({
    type: CHANGE_GRAFIK,
    key: value,
})

export default idGrafikReducer
