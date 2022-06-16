import React from 'react'
import s from './CarDataInput.module.css'

// eslint-disable-next-line react/prop-types
function CarDataInput({ label, value, change }) {
    return (
        <div className={s.CarDataInput}>
            <span className={s.pad}>
                <b>{label}</b>
            </span>
            <input
                onChange={(e) => {
                    change(e.target.value)
                }}
                placeholder="введите значение"
                className={s.input}
                value={value}
            />
        </div>
    )
}

export default CarDataInput
