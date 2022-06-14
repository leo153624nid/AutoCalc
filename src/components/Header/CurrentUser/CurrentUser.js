import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CurrentUser.module.css'

function CurrentUser() {
    return (
        <div className={s.user}>
            <NavLink to="/" className={s.btn}>
                Current User
            </NavLink>
        </div>
    )
}

export default CurrentUser
