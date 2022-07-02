/* eslint-disable import/prefer-default-export */
import axios from 'axios'

const baseUrl =
    'https://autocalculato-default-rtdb.europe-west1.firebasedatabase.app/users/0'

// Получить данные пользователя
export const getUserData = () => axios.get(`${baseUrl}.json`)

// Обновить или добавить машину
export const patchUserCar = (car, index) =>
    axios.patch(`${baseUrl}/userCars/${index}.json`, { ...car })

// Удалить машину
export const deleteUserCar = (index) =>
    axios.delete(`${baseUrl}/userCars/${index}.json`)

// Обновить или добавить заправку
export const patchUserFuel = (fuel, carIndex, fuelIndex) =>
    axios.patch(`${baseUrl}/userCars/${carIndex}/fuelings/${fuelIndex}.json`, {
        ...fuel,
    })

// Удалить заправку
export const deleteUserFuel = (carIndex, fuelIndex) =>
    axios.delete(`${baseUrl}/userCars/${carIndex}/fuelings/${fuelIndex}.json`)

// Обновить или добавить прочие расходы
export const patchUserEtc = (etc, carIndex, etcIndex) =>
    axios.patch(`${baseUrl}/userCars/${carIndex}/etc/${etcIndex}.json`, {
        ...etc,
    })

// Удалить прочие расходы
export const deleteUserEtc = (carIndex, etcIndex) =>
    axios.delete(`${baseUrl}/userCars/${carIndex}/etc/${etcIndex}.json`)
