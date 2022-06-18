import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    carId: 0,
    carName: '',
    distance: 0,
    yearProduction: 2022,
    yearOfBuying: 2022,
    costOfBuying: 0,
    vin: '',
    notes: '',
    carPic: 'https://img.icons8.com/wired/64/undefined/add-image.png',
    fuelConsumptions: 0,
    etcConsumptions: 0,
    allMonth: 0,
    costOneKm: 0,
    costOneDay: 0,
    fuelings: [],
    etc: [],
}

const ADD_CAR = 'ADD_CAR'
const GET_CAR = 'GET_CAR'
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
        .addCase(ADD_CAR, () => ({ ...initialState }))
        .addCase(GET_CAR, (state, action) => ({
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

// Добавить данные новой машины
export const addCarAC = (carId) => ({
    type: ADD_CAR,
    carId,
})

// Получить данные машины для редактирования
export const getCarAC = (car) => ({
    type: GET_CAR,
    car,
})

// Смена имени машины
export const changeCarNameAC = (carName) => ({
    type: CHANGE_CARNAME,
    carName,
})

// Смена пробега
export const changeDistanceAC = (distance) => ({
    type: CHANGE_DISTANCE,
    distance,
})

// Смена года производства
export const changeYearProdAC = (yearProduction) => ({
    type: CHANGE_YEARPROD,
    yearProduction,
})

// Смена года покупки
export const changeYearBuyAC = (yearOfBuying) => ({
    type: CHANGE_YEARBUY,
    yearOfBuying,
})

// Смена стоимости покупки
export const changeCostBuyAC = (costOfBuying) => ({
    type: CHANGE_COSTBUY,
    costOfBuying,
})

// Смена VIN номера
export const changeVinAC = (vin) => ({
    type: CHANGE_VIN,
    vin,
})

// Смена заметок о машине
export const changeNotesAC = (notes) => ({
    type: CHANGE_NOTES,
    notes,
})

// Смена картинки машины
export const changeCarPicAC = (carPic) => ({
    type: CHANGE_CARPIC,
    carPic,
})

// Смена картинки машины
export const changeCarIdAC = (carId) => ({
    type: CHANGE_CARPIC,
    carId,
})

export default newCarReducer
