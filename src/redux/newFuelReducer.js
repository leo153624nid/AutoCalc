import { createReducer } from '@reduxjs/toolkit'

// Получение текущей даты в мс
const getNowDateMS = () => {
    const now = new Date()
    return now.getTime()
}

// Перевод даты в мс
const getDate = (time) => time.getTime()

const initialState = {
    fuelingId: 0,
    date: getNowDateMS(),
    mark: 'АИ-95',
    price: 0,
    volume: 0,
    cost: 0,
    full: 0,
    distance: 0,
}

const ADD_FUEL = 'ADD_FUEL'
const CHANGE_DATE_FUEL = 'CHANGE_DATE_FUEL'
const CHANGE_DISTANCE_FUEL = 'CHANGE_DISTANCE_FUEL'
const CHANGE_MARK_FUEL = 'CHANGE_MARK_FUEL'
const CHANGE_PRICE_FUEL = 'CHANGE_PRICE_FUEL'
const CHANGE_VOLUME_FUEL = 'CHANGE_VOLUME_FUEL'
const CHANGE_COST_FUEL = 'CHANGE_COST_FUEL'
const CHANGE_FULL_FUEL = 'CHANGE_FULL_FUEL'

const newFuelReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_FUEL, () => ({
            ...initialState,
            fuelingId: getNowDateMS(),
        })) // Добавить POST запрос на сервер с новой заправкой, пропушить новую заправку в массив заправок
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

// Добавить данные новой заправки
export const addFuelAC = () => ({
    type: ADD_FUEL,
})

// Смена даты заправки
export const changeDateFuelAC = (date) => ({
    type: CHANGE_DATE_FUEL,
    date: getDate(date),
})

// Смена пробега заправки
export const changeDistanceFuelAC = (distance) => ({
    type: CHANGE_DISTANCE_FUEL,
    distance,
})

// Смена марки топлива
export const changeMarkFuelAC = (mark) => ({
    type: CHANGE_MARK_FUEL,
    mark,
})

// Смена цены топлива
export const changePriceFuelAC = (price) => ({
    type: CHANGE_PRICE_FUEL,
    price,
})

// Смена обьема топлива
export const changeVolumeFuelAC = (volume) => ({
    type: CHANGE_VOLUME_FUEL,
    volume,
})

// Смена стоимости заправки
export const changeCostFuelAC = (cost) => ({
    type: CHANGE_COST_FUEL,
    cost,
})

// Смена значения полного бака
export const changeFullFuelAC = (full) => ({
    type: CHANGE_FULL_FUEL,
    full,
})

export default newFuelReducer
