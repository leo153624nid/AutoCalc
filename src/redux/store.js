/* eslint-disable no-case-declarations */
import NoCarPic from '../img/noCar.jpg'
import userData from '../database/CurrentUser.json'
import caruselReducer from './userDataReducer'
import idGrafikReducer from './idGrafikReducer'

const store = {
    state: {
        userData,
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
        carusel: [
            userData.userCars[0],
            userData.userCars[1],
            userData.userCars[2],
        ],
        idGrafik: 1,
    },
    callsubscriber() {},
    getState() {
        return this.state
    },
    subscribe(observer) {
        this.callsubscriber = observer
    },
    dispatch(action) {
        this.state.carusel = caruselReducer(this.state, action)
        this.state.idGrafik = idGrafikReducer(this.state, action)

        this.callsubscriber(this.state)
    },
}

export default store
