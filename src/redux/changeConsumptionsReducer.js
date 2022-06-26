import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    fuelingId: 0,
    etcId: 0,
    currentPage: 1,
}

const CLEAR_CHANGING = 'CLEAR_CHANGING'
const CHANGE_FUELING_ID = 'CHANGE_FUELING_ID'
const CHANGE_ETC_ID = 'CHANGE_ETC_ID'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'

const changeConsumptionsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CLEAR_CHANGING, () => ({
            ...initialState,
        }))
        .addCase(CHANGE_FUELING_ID, (state, action) => ({
            ...state,
            fuelingId: action.fuelingId,
        }))
        .addCase(CHANGE_ETC_ID, (state, action) => ({
            ...state,
            etcId: action.etcId,
        }))
        .addCase(CHANGE_CURRENT_PAGE, (state, action) => ({
            ...state,
            currentPage: action.currentPage,
        }))
        .addDefaultCase((state) => state)
})

// Сбросить данные об изменяемом обьекте
export const сlearChanging = () => ({
    type: CLEAR_CHANGING,
})

// Смена ID заправки
export const changeFuelingId = (fuelingId) => ({
    type: CHANGE_FUELING_ID,
    fuelingId: Number(fuelingId),
})

// Смена ID прочих расходов
export const changeEtcId = (etcId) => ({
    type: CHANGE_ETC_ID,
    etcId: Number(etcId),
})

// Смена текущей странички отображения расходов
export const changeCurrentPage = (currentPage) => ({
    type: CHANGE_CURRENT_PAGE,
    currentPage: Number(currentPage),
})

export default changeConsumptionsReducer
