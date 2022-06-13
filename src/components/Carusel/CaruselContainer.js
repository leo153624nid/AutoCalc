import React from 'react'
import Carusel from './Carusel'
import { changeCaruselActionCreator } from '../../redux/userDataReducer'

// eslint-disable-next-line react/prop-types
function CaruselContainer({ store }) {
    const changeCarusel = (direction) => {
        // eslint-disable-next-line react/prop-types
        store.dispatch(changeCaruselActionCreator(direction))
    }

    return (
        <Carusel
            // eslint-disable-next-line react/prop-types
            carusel={store.getState().userData.carusel}
            changeCarusel={changeCarusel}
        />
    )
}

export default CaruselContainer
