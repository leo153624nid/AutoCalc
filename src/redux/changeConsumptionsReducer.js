import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    fuelingId: 0,
    etcId: 0,
    carId: 0,
}

const CLEAR_CHANGING = 'CLEAR_CHANGING'
const SET_NEW_CHANGING = 'SET_NEW_CHANGING'
const CHANGE_FUELING_ID = 'CHANGE_FUELING_ID'
const CHANGE_ETC_ID = 'CHANGE_ETC_ID'

const changeConsumptionsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CLEAR_FUEL, () => ({
            ...initialState,
        }))
        .addCase(SET_NEW_FUEL, (state, action) => ({
            ...action.fuel,
        }))
        .addCase(CHANGE_DATE_FUEL, (state, action) => ({
            ...state,
            date: action.date,
        }))
        .addCase(CHANGE_DISTANCE_FUEL, (state, action) => ({
            ...state,
            distance: action.distance,
        }))
        .addCase(CHANGE_MARK_FUEL, (state, action) => ({
            ...state,
            mark: action.mark,
        }))
        .addCase(CHANGE_PRICE_FUEL, (state, action) => ({
            ...state,
            price: action.price,
        }))
        .addCase(CHANGE_VOLUME_FUEL, (state, action) => ({
            ...state,
            volume: action.volume,
        }))
        .addCase(CHANGE_COST_FUEL, (state, action) => ({
            ...state,
            cost: action.cost,
        }))
        .addCase(CHANGE_FULL_FUEL, (state, action) => ({
            ...state,
            full: action.full,
        }))
        .addDefaultCase((state) => state)
})

// Сбросить данные новой заправки
export const clearFuelAC = () => ({
    type: CLEAR_FUEL,
})

// Обновить данные новой заправки
export const setNewFuelAC = (fuel) => ({
    type: SET_NEW_FUEL,
    fuel,
})

// Смена даты заправки
export const changeDateFuelAC = (date) => ({
    type: CHANGE_DATE_FUEL,
    date: getDate(date),
})

// Смена пробега заправки
export const changeDistanceFuelAC = (distance) => ({
    type: CHANGE_DISTANCE_FUEL,
    distance: Number(distance),
})

// Смена марки топлива
export const changeMarkFuelAC = (mark) => ({
    type: CHANGE_MARK_FUEL,
    mark,
})

// Смена цены топлива
export const changePriceFuelAC = (price) => ({
    type: CHANGE_PRICE_FUEL,
    price: Number(price),
})

// Смена обьема топлива
export const changeVolumeFuelAC = (volume) => ({
    type: CHANGE_VOLUME_FUEL,
    volume: Number(volume),
})

// Смена стоимости заправки
export const changeCostFuelAC = (cost) => ({
    type: CHANGE_COST_FUEL,
    cost: Number(cost),
})

// Смена значения полного бака
export const changeFullFuelAC = (full) => ({
    type: CHANGE_FULL_FUEL,
    full: Number(full),
})

export default changeConsumptionsReducer
