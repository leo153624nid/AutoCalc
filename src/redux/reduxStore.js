/* eslint-disable no-case-declarations */
import NoCarPic from '../img/noCar.jpg'
import userData from '../database/CurrentUser.json'
import caruselReducer from './caruselReducer'
import idGrafikReducer from './idGrafikReducer'

const CHANGE_CARUSEL = 'CHANGE_CARUSEL'
const CHANGE_GRAFIK = 'CHANGE_GRAFIK'

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

export const changeCaruselActionCreator = (direct) => ({
    type: CHANGE_CARUSEL,
    direction: direct,
})

export const changeGrafikActionCreator = (value) => ({
    type: CHANGE_GRAFIK,
    key: value,
})

export default store
