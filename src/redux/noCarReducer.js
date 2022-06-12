const NO_CAR = 'NO_CAR'

const noCarReducer = (state, action) => {
    switch (action.type) {
        case NO_CAR:
            return state
        default:
            return state
    }
}

export const noCarActionCreator = () => ({
    type: NO_CAR,
})

export default noCarReducer
