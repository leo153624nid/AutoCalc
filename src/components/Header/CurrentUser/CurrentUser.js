/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CurrentUser.module.css'

function CurrentUser({ auth }) {
    return (
        <div className={s.user}>
            <NavLink to="/login" className={s.btn}>
                {auth.userName}
            </NavLink>
        </div>
    )
}

export default CurrentUser
