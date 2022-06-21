import { createReducer } from '@reduxjs/toolkit'

// https://img.icons8.com/wired/64/undefined/add-image.png

const initialState = {
    carId: 0,
    carName: '',
    distance: 0,
    yearProduction: 2022,
    yearOfBuying: 2022,
    costOfBuying: 0,
    vin: '',
    notes: '',
    carPic: '',
    fuelConsumptions: 0,
    etcConsumptions: 0,
    allMonth: 0,
    costOneKm: 0,
    costOneDay: 0,
    fuelings: [],
    etc: [],
}

const CLEAR_CAR = 'CLEAR_CAR'
const SET_CAR = 'SET_CAR'
const CHANGE_CARNAME = 'CHANGE_CARNAME'
const CHANGE_DISTANCE = 'CHANGE_DISTANCE'
const CHANGE_YEARPROD = 'CHANGE_YEARPROD'
const CHANGE_YEARBUY = 'CHANGE_YEARBUY'
const CHANGE_COSTBUY = 'CHANGE_COSTBUY'
const CHANGE_VIN = 'CHANGE_VIN'
const CHANGE_NOTES = 'CHANGE_NOTES'
const CHANGE_CARPIC = 'CHANGE_CARPIC'
const CHANGE_CAR_ID = 'CHANGE_CAR_ID'

const newCarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CLEAR_CAR, () => ({ ...initialState }))
        .addCase(SET_CAR, (state, action) => ({
            ...action.car,
        }))
        .addCase(CHANGE_CARNAME, (state, action) => ({
            ...state,
            carName: action.carName,
        }))
        .addCase(CHANGE_DISTANCE, (state, action) => ({
            ...state,
            distance: action.distance,
        }))
        .addCase(CHANGE_YEARPROD, (state, action) => ({
            ...state,
            yearProduction: action.yearProduction,
        }))
        .addCase(CHANGE_YEARBUY, (state, action) => ({
            ...state,
            yearOfBuying: action.yearOfBuying,
        }))
        .addCase(CHANGE_COSTBUY, (state, action) => ({
            ...state,
            costOfBuying: action.costOfBuying,
        }))
        .addCase(CHANGE_VIN, (state, action) => ({ ...state, vin: action.vin }))
        .addCase(CHANGE_NOTES, (state, action) => ({
            ...state,
            notes: action.notes,
        }))
        .addCase(CHANGE_CARPIC, (state, action) => ({
            ...state,
            carPic: action.carPic,
        }))
        .addCase(CHANGE_CAR_ID, (state, action) => ({
            ...state,
            carId: action.carId,
        }))
        .addDefaultCase((state) => state)
})

// Сбросить данные новой машины до initialState
export const clearCar = () => ({
    type: CLEAR_CAR,
})

// Получить данные машины для редактирования
export const setCar = (car) => ({
    type: SET_CAR,
    car,
})

// Смена имени машины
export const changeCarName = (carName) => ({
    type: CHANGE_CARNAME,
    carName,
})

// Смена пробега
export const changeDistance = (distance) => ({
    type: CHANGE_DISTANCE,
    distance: Number(distance),
})

// Смена года производства
export const changeYearProd = (yearProduction) => ({
    type: CHANGE_YEARPROD,
    yearProduction: Number(yearProduction),
})

// Смена года покупки
export const changeYearBuy = (yearOfBuying) => ({
    type: CHANGE_YEARBUY,
    yearOfBuying: Number(yearOfBuying),
})

// Смена стоимости покупки
export const changeCostBuy = (costOfBuying) => ({
    type: CHANGE_COSTBUY,
    costOfBuying: Number(costOfBuying),
})

// Смена VIN номера
export const changeVin = (vin) => ({
    type: CHANGE_VIN,
    vin,
})

// Смена заметок о машине
export const changeNotes = (notes) => ({
    type: CHANGE_NOTES,
    notes,
})

// Смена картинки машины !!!!! ДОДЕЛАТЬ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const changeCarPic = (carPic) => ({
    type: CHANGE_CARPIC,
    carPic,
})

// Смена carId машины
export const changeCarId = (carId) => ({
    type: CHANGE_CAR_ID,
    carId: Number(carId),
})

export default newCarReducer
