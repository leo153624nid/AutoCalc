import React from 'react'
import s from './ArrowNext.module.css'
import arrowPic from '../../../img/arrow-next.png'

function ArrowNext() {
    return (
        <div className={s.ArrowNext}>
            <img src={arrowPic} alt="arrow" />
        </div>
    )
}

export default ArrowNext
