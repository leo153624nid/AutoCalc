/* eslint-disable import/prefer-default-export */
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:
        'https://autocalculato-default-rtdb.europe-west1.firebasedatabase.app/users/',
})

const axiosFBStorageInstance = axios.create({
    baseURL:
        'https://console.firebase.google.com/project/autocalculato/storage/autocalculato.appspot.com/files/',
})

export const userDataAPI = {
    // Получить данные пользователя
    getUserData(userId) {
        return axiosInstance
            .get(`${userId}.json`)
            .then((response) => response.data)
    },
    // Обновить или добавить машину
    patchUserCar(userId, car, index) {
        return axiosInstance.patch(`${userId}/userCars/${index}.json`, {
            ...car,
        })
    },
    // Удалить машину
    deleteUserCar(userId, index) {
        return axiosInstance.delete(`${userId}/userCars/${index}.json`)
    },
    // Обновить или добавить заправку
    patchUserFuel(userId, fuel, carIndex, fuelIndex) {
        return axiosInstance.patch(
            `${userId}/userCars/${carIndex}/fuelings/${fuelIndex}.json`,
            {
                ...fuel,
            }
        )
    },
    // Удалить заправку
    deleteUserFuel(userId, carIndex, fuelIndex) {
        return axiosInstance.delete(
            `${userId}/userCars/${carIndex}/fuelings/${fuelIndex}.json`
        )
    },
    // Обновить или добавить прочие расходы
    patchUserEtc(userId, etc, carIndex, etcIndex) {
        return axiosInstance.patch(
            `${userId}/userCars/${carIndex}/etc/${etcIndex}.json`,
            {
                ...etc,
            }
        )
    },
    // Удалить прочие расходы
    deleteUserEtc(userId, carIndex, etcIndex) {
        return axiosInstance.delete(
            `${userId}/userCars/${carIndex}/etc/${etcIndex}.json`
        )
    },
    // Обновить картинку машины, !!!!!! ДОДЕЛАТЬ !!!!!
    patchCarPic() {
        return axiosFBStorageInstance.patch(``)
    },
}
