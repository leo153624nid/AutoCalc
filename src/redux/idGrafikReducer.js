const CHANGE_GRAFIK = 'CHANGE_GRAFIK'

const idGrafikReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_GRAFIK:
            // eslint-disable-next-line no-param-reassign
            state.idGrafik = Number(action.key)
            return state.idGrafik
        default:
            return state.idGrafik
    }
}

export const changeGrafikActionCreator = (value) => ({
    type: CHANGE_GRAFIK,
    key: value,
})

export default idGrafikReducer
