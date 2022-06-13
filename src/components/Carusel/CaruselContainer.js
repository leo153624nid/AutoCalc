import { connect } from 'react-redux'
import Carusel from './Carusel'
import { changeCaruselActionCreator } from '../../redux/userDataReducer'

const mapStateToProps = (state) => ({
    carusel: state.userData.carusel,
})

const mapDispatchToProps = (dispatch) => ({
    changeCarusel: (direction) => {
        dispatch(changeCaruselActionCreator(direction))
    },
})

const CaruselContainer = connect(mapStateToProps, mapDispatchToProps)(Carusel)

export default CaruselContainer
