import { createReducer } from '@reduxjs/toolkit'
import { getDate } from './dateFunctions'

const initialState = {
    fuelingId: 0,
    date: 0,
    mark: 'АИ-95',
    price: 0,
    volume: 0,
    cost: 0,
    full: 0,
    distance: 0,
    carId: 0,
}

const CLEAR_FUEL = 'CLEAR_FUEL'
const SET_NEW_FUEL = 'SET_NEW_FUEL'
const CHANGE_DATE_FUEL = 'CHANGE_DATE_FUEL'
const CHANGE_DISTANCE_FUEL = 'CHANGE_DISTANCE_FUEL'
const CHANGE_MARK_FUEL = 'CHANGE_MARK_FUEL'
const CHANGE_PRICE_FUEL = 'CHANGE_PRICE_FUEL'
const CHANGE_VOLUME_FUEL = 'CHANGE_VOLUME_FUEL'
const CHANGE_COST_FUEL = 'CHANGE_COST_FUEL'
const CHANGE_FULL_FUEL = 'CHANGE_FULL_FUEL'

const newFuelReducer = createReducer(initialState, (builder) => {
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
export const clearFuel = () => ({
    type: CLEAR_FUEL,
})

// Обновить данные новой заправки
export const setNewFuel = (fuel) => ({
    type: SET_NEW_FUEL,
    fuel,
})

// Смена даты заправки
export const changeDateFuel = (date) => ({
    type: CHANGE_DATE_FUEL,
    date: getDate(date),
})

// Смена пробега заправки
export const changeDistanceFuel = (distance) => ({
    type: CHANGE_DISTANCE_FUEL,
    distance: Number(distance),
})

// Смена марки топлива
export const changeMarkFuel = (mark) => ({
    type: CHANGE_MARK_FUEL,
    mark,
})

// Смена цены топлива
export const changePriceFuel = (price) => ({
    type: CHANGE_PRICE_FUEL,
    price: Number(price),
})

// Смена обьема топлива
export const changeVolumeFuel = (volume) => ({
    type: CHANGE_VOLUME_FUEL,
    volume: Number(volume),
})

// Смена стоимости заправки
export const changeCostFuel = (cost) => ({
    type: CHANGE_COST_FUEL,
    cost: Number(cost),
})

// Смена значения полного бака
export const changeFullFuel = (full) => ({
    type: CHANGE_FULL_FUEL,
    full: Number(full),
})

export default newFuelReducer
