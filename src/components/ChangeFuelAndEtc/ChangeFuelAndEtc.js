/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './ChangeFuelAndEtc.module.css'

function ChangeFuelAndEtc({ carId, listConsumptions, pagesList }) {
    let consumptions = [<h3 key="0">У вас нет расходов</h3>]
    if (listConsumptions.length > 0) {
        consumptions = listConsumptions
    }
    return (
        <div className={s.Change}>
            <div className={s.btnBack}>
                <NavLink to={`/graf/${carId}`} className={s.btn}>
                    К графикам
                </NavLink>
            </div>
            <ol className={s.list}>{consumptions}</ol>
            <div className={s.pages}>{pagesList}</div>
        </div>
    )
}

export default ChangeFuelAndEtc
