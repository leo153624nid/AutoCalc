import NoCarPic from '../img/noCar.jpg'
import userData from '../database/CurrentUser.json'

// "Пустая" машина, если у пользователя нет машин
// const noCar = {
//     carId: 0,
//     carName: '-',
//     carPic: NoCarPic,
//     distance: '-',
//     fuelConsumptions: '-',
//     etcConsumptions: '-',
//     allMonth: '-',
//     costOneKm: '-',
//     costOneDay: '-',
//     fuelings: [],
//     etc: [],
// }

// // Инициализация карусели машин пользователя
// const caruselInit = () => {
//     if (userData.userCars.length === 0) carusel.push(noCar)
//     if (userData.userCars.length === 1) carusel.push(userData.userCars[0])
//     if (userData.userCars.length === 2)
//         carusel.push(userData.userCars[0], userData.userCars[1])
//     if (userData.userCars.length >= 3)
//         carusel.push(
//             userData.userCars[0],
//             userData.userCars[1],
//             userData.userCars[2]
//         )
// }
// caruselInit()

const store = {
    state: {
        userData,
        carusel: [
            userData.userCars[0],
            userData.userCars[1],
            userData.userCars[2],
        ],
        idGrafik: 1,
        noCar: {
            carId: 0,
            carName: '-',
            carPic: NoCarPic,
            distance: '-',
            fuelConsumptions: '-',
            etcConsumptions: '-',
            allMonth: '-',
            costOneKm: '-',
            costOneDay: '-',
            fuelings: [],
            etc: [],
        },
    },
    getState() {
        return this.state
    },
    changeCarusel() {
        // const newCars = [cars[0], cars[1], cars[2]]
        // const nextCarId = userCars.findIndex(
        //     (item) => item.carId > cars[2].carId
        // )
        // const prevCarId =
        //     userCars.findIndex((item) => item.carId === cars[0].carId) - 1
        // if (direction === 'left') {
        //     newCars.shift()
        //     if (nextCarId !== -1) {
        //         newCars.push(userCars[nextCarId])
        //     } else {
        //         newCars.push(userCars[0])
        //     }
        //     setCars(newCars)
        // } else if (direction === 'right') {
        //     newCars.pop()
        //     if (prevCarId === -1) {
        //         newCars.unshift(userCars.at(-1))
        //     } else {
        //         newCars.unshift(userCars[prevCarId])
        //     }
        //     setCars(newCars)
        // }
    },
}

export default store
