import { connect } from 'react-redux'
import Carusel from './Carusel'
import { changeCaruselAC, getCaruselAC } from '../../redux/userDataReducer'

const mapStateToProps = (state) => ({
    carusel: state.userData.carusel,
})

const mapDispatchToProps = (dispatch) => ({
    changeCarusel: (direction) => {
        dispatch(changeCaruselAC(direction))
    },
    // На будущее, установка первоначальной карусели карт
    // (данные с сервера при первой отрисовки страницы)
    getCarusel: (cars) => {
        dispatch(getCaruselAC(cars))
    },
})

const CaruselContainer = connect(mapStateToProps, mapDispatchToProps)(Carusel)

export default CaruselContainer
