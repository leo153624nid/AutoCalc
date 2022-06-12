import { createReducer } from '@reduxjs/toolkit'

const CHANGE_GRAFIK = 'CHANGE_GRAFIK'

const idGrafikReducer = createReducer(1, (builder) => {
    builder.addCase(CHANGE_GRAFIK, (state, action) => {
        const newState = Number(action.key)
        return newState
    })
})

// const idGrafikReducer2 = (action, state = 1) => {
//     let newState = 1
//     switch (action.type) {
//         case CHANGE_GRAFIK:
//             newState = Number(action.key)
//             return newState
//         default:
//             return state
//     }
// }

export const changeGrafikActionCreator = (value) => ({
    type: CHANGE_GRAFIK,
    key: value,
})

export default idGrafikReducer
