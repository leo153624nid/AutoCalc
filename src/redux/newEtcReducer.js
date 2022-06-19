import { createReducer } from '@reduxjs/toolkit'

// Получение текущей даты в мс
const getNowDateMS = () => {
    const now = new Date()
    return now.getTime()
}

// Перевод даты в мс
const getDate = (time) => time.getTime()

const initialState = {
    etcId: getNowDateMS(),
    date: getNowDateMS(),
    mark: '',
    price: 0,
    volume: 0,
    cost: 0,
    carId: 0,
    distance: 0,
}

const CLEAR_ETC = 'CLEAR_ETC'
const CHANGE_DATE_ETC = 'CHANGE_DATE_ETC'
const CHANGE_DISTANCE_ETC = 'CHANGE_DISTANCE_ETC'
const CHANGE_MARK_ETC = 'CHANGE_MARK_ETC'
const CHANGE_PRICE_ETC = 'CHANGE_PRICE_ETC'
const CHANGE_VOLUME_ETC = 'CHANGE_VOLUME_ETC'
const CHANGE_COST_ETC = 'CHANGE_COST_ETC'
const CHANGE_CAR_ID_ETC = 'CHANGE_CAR_ID_ETC'

const newEtcReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CLEAR_ETC, () => ({
            ...initialState,
            etcId: getNowDateMS(),
            date: getNowDateMS(),
        })) // Добавить POST запрос на сервер с новой заправкой, пропушить новую заправку в массив заправок
        .addCase(CHANGE_DATE_ETC, (state, action) => ({
            ...state,
            date: action.date,
        }))
        .addCase(CHANGE_DISTANCE_ETC, (state, action) => ({
            ...state,
            distance: action.distance,
        }))
        .addCase(CHANGE_MARK_ETC, (state, action) => ({
            ...state,
            mark: action.mark,
        }))
        .addCase(CHANGE_PRICE_ETC, (state, action) => ({
            ...state,
            price: action.price,
        }))
        .addCase(CHANGE_VOLUME_ETC, (state, action) => ({
            ...state,
            volume: action.volume,
        }))
        .addCase(CHANGE_COST_ETC, (state, action) => ({
            ...state,
            cost: action.cost,
        }))
        .addCase(CHANGE_CAR_ID_ETC, (state, action) => ({
            ...state,
            carId: action.carId,
        }))
        .addDefaultCase((state) => state)
})

// Сбросить данные новых прочих расходов
export const clearEtcAC = () => ({
    type: CLEAR_ETC,
})

// Смена даты прочих расходов
export const changeDateEtcAC = (date) => ({
    type: CHANGE_DATE_ETC,
    date: getDate(date),
})

// Смена пробега прочих расходов
export const changeDistanceEtcAC = (distance) => ({
    type: CHANGE_DISTANCE_ETC,
    distance: Number(distance),
})

// Смена марки прочих расходов
export const changeMarkEtcAC = (mark) => ({
    type: CHANGE_MARK_ETC,
    mark,
})

// Смена цены прочих расходов
export const changePriceEtcAC = (price) => ({
    type: CHANGE_PRICE_ETC,
    price: Number(price),
})

// Смена количества прочих расходов
export const changeVolumeEtcAC = (volume) => ({
    type: CHANGE_VOLUME_ETC,
    volume: Number(volume),
})

// Смена стоимости прочих расходов
export const changeCostEtcAC = (cost) => ({
    type: CHANGE_COST_ETC,
    cost: Number(cost),
})

// Смена carId машины прочих расходов
export const changeCarIdEtcAC = (carId) => ({
    type: CHANGE_CAR_ID_ETC,
    carId: Number(carId),
})

export default newEtcReducer
