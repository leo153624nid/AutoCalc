import { connect } from 'react-redux'
import Carusel from './Carusel'
import { changeCaruselAC, setCaruselAC } from '../../redux/userDataReducer'

const mapStateToProps = (state) => ({
    carusel: state.userData.carusel,
})

const mapDispatchToProps = (dispatch) => ({
    changeCarusel: (direction) => {
        dispatch(changeCaruselAC(direction))
    },
    setCarusel: (cars) => {
        dispatch(setCaruselAC(cars))
    },
})

const CaruselContainer = connect(mapStateToProps, mapDispatchToProps)(Carusel)

export default CaruselContainer
