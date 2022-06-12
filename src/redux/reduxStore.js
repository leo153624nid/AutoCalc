/* eslint-disable no-case-declarations */
import NoCarPic from '../img/noCar.jpg'
import userData from '../database/CurrentUser.json'

const CHANGE_CARUSEL = 'CHANGE_CARUSEL'
const CHANGE_GRAFIK = 'CHANGE_GRAFIK'

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
    dispatch(action) {
        switch (action.type) {
            case CHANGE_CARUSEL:
                const cars = this.state.userData.userCars
                const lastCarId = cars.findIndex(
                    (item) => item.carId === this.state.carusel.at(-1).carId
                )
                const firstCarId = cars.findIndex(
                    (item) => item.carId === this.state.carusel[0].carId
                )
                switch (action.direction) {
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
                break
            case CHANGE_GRAFIK:
                this.state.idGrafik = +action.key
                this.callsubscriber(this.state)
                break
            default:
                break
        }
    },
}

export const changeCaruselActionCreator = (direct) => ({
    type: CHANGE_CARUSEL,
    direction: direct,
})

export const changeGrafikActionCreator = (value) => ({
    type: CHANGE_GRAFIK,
    key: value,
})

export default store
