const CHANGE_GRAFIK = 'CHANGE_GRAFIK'

const idGrafikReducer = (state, action) => {
    if (action.type === CHANGE_GRAFIK) {
        // eslint-disable-next-line no-param-reassign
        state.idGrafik = +action.key
    }
    return state.idGrafik
}

export default idGrafikReducer
