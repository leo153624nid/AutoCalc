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
