const CHANGE_CARUSEL = 'CHANGE_CARUSEL'

const caruselReducer = (state, action) => {
    if (action.type === CHANGE_CARUSEL) {
        const cars = state.userData.userCars
        const lastCarId = cars.findIndex(
            (item) => item.carId === state.carusel.at(-1).carId
        )
        const firstCarId = cars.findIndex(
            (item) => item.carId === state.carusel[0].carId
        )
        switch (action.direction) {
            case 'left':
                state.carusel.shift()
                if (lastCarId !== cars.length - 1) {
                    state.carusel.push(cars[lastCarId + 1])
                } else {
                    state.carusel.push(cars[0])
                }
                break
            case 'right':
                state.carusel.pop()
                if (firstCarId !== 0) {
                    state.carusel.unshift(cars[firstCarId - 1])
                } else {
                    state.carusel.unshift(cars.at(-1))
                }
                break
            default:
                break
        }
    }
    return state.carusel
}

export default caruselReducer
