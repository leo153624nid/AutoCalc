/* eslint-disable import/prefer-default-export */
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:
        'https://autocalculato-default-rtdb.europe-west1.firebasedatabase.app/users/',
})

export const userDataAPI = {
    // Получить данные пользователя
    getUserData() {
        return axiosInstance.get(`0.json`)
    },
    // Обновить или добавить машину
    patchUserCar(car, index) {
        return axiosInstance.patch(`0/userCars/${index}.json`, { ...car })
    },
    // Удалить машину
    deleteUserCar(index) {
        return axiosInstance.delete(`0/userCars/${index}.json`)
    },
    // Обновить или добавить заправку
    patchUserFuel(fuel, carIndex, fuelIndex) {
        return axiosInstance.patch(
            `0/userCars/${carIndex}/fuelings/${fuelIndex}.json`,
            {
                ...fuel,
            }
        )
    },
    // Удалить заправку
    deleteUserFuel(carIndex, fuelIndex) {
        return axiosInstance.delete(
            `0/userCars/${carIndex}/fuelings/${fuelIndex}.json`
        )
    },
    // Обновить или добавить прочие расходы
    patchUserEtc(etc, carIndex, etcIndex) {
        return axiosInstance.patch(
            `0/userCars/${carIndex}/etc/${etcIndex}.json`,
            {
                ...etc,
            }
        )
    },
    // Удалить прочие расходы
    deleteUserEtc(carIndex, etcIndex) {
        return axiosInstance.delete(
            `0/userCars/${carIndex}/etc/${etcIndex}.json`
        )
    },
}
