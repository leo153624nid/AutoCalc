import React from 'react'
import s from './CarDataInput.module.css'

// eslint-disable-next-line react/prop-types
function CarDataInput({ label }) {
    return (
        <div className={s.CarDataInput}>
            <span className={s.pad}>
                <b>{label}</b>
            </span>
            <input placeholder="1" className={s.input} />
        </div>
    )
}

export default CarDataInput
