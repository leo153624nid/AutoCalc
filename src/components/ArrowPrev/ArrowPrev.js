import React from "react";
import s from './ArrowPrev.module.css';
import arrowPic from '../../img/arrow-prev.png'

function ArrowPrev () {
    return (
        <div className={s.ArrowPrev}>
            <img src={arrowPic} alt='arrow'/>
        </div>
    );
}

export default ArrowPrev;