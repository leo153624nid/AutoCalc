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

// let rerender = () => {
//     console.log('rerender')
// }

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
    callsubscriber() {},
    getState() {
        return this.state
    },
    subscribe(observer) {
        this.callsubscriber = observer
    },
    changeCarusel(direction, carusel) {
        const cars = this.state.userData.userCars
        const lastCarId = cars.findIndex(
            (item) => item.carId === carusel.at(-1).carId
        )
        const firstCarId = cars.findIndex(
            (item) => item.carId === carusel[0].carId
        )
        switch (direction) {
            case 'left':
                this.state.carusel.shift()
                if (lastCarId !== cars.length - 1) {
                    this.state.carusel.push(cars[lastCarId + 1])
                } else {
                    this.state.carusel.push(cars[0])
                }
                break
            case 'right':
                this.state.carusel.pop()
                if (firstCarId !== 0) {
                    this.state.carusel.unshift(cars[firstCarId - 1])
                } else {
                    this.state.carusel.unshift(cars.at(-1))
                }
                break
            default:
                break
        }
        this.callsubscriber(this.state)
    },
    changeGrafik(key) {
        this.state.idGrafik = +key
        this.callsubscriber(this.state)
    },
}

export default store
