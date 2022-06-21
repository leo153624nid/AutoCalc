import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    fuelingId: 0,
    etcId: 0,
}

const CLEAR_CHANGING = 'CLEAR_CHANGING'
// const SET_NEW_CHANGING = 'SET_NEW_CHANGING'
const CHANGE_FUELING_ID = 'CHANGE_FUELING_ID'
const CHANGE_ETC_ID = 'CHANGE_ETC_ID'

const changeConsumptionsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CLEAR_CHANGING, () => ({
            ...initialState,
        }))
        // .addCase(SET_NEW_CHANGING, (state, action) => ({
        //     ...action.changing,
        // }))
        .addCase(CHANGE_FUELING_ID, (state, action) => ({
            ...state,
            fuelingId: action.fuelingId,
        }))
        .addCase(CHANGE_ETC_ID, (state, action) => ({
            ...state,
            etcId: action.etcId,
        }))
        .addDefaultCase((state) => state)
})

// Сбросить данные об изменяемом обьекте
export const сlearChangingAC = () => ({
    type: CLEAR_CHANGING,
})

// Обновить данные об изменяемом обьекте
// export const setNewChangingAC = (changing) => ({
//     type: SET_NEW_CHANGING,
//     changing,
// })

// Смена ID заправки
export const changeFuelingIdAC = (fuelingId) => ({
    type: CHANGE_FUELING_ID,
    fuelingId: Number(fuelingId),
})

// Смена ID прочих расходов
export const changeEtcIdAC = (etcId) => ({
    type: CHANGE_ETC_ID,
    etcId: Number(etcId),
})

export default changeConsumptionsReducer
