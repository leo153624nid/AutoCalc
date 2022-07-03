/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './CurrentUser.module.css'

function CurrentUser({ auth }) {
    return (
        <div className={s.user}>
            {auth.isAuth ? (
                <NavLink to="/" className={s.btn}>
                    {auth.userName}
                </NavLink>
            ) : (
                <NavLink to="/login" className={s.btn}>
                    log in
                </NavLink>
            )}
        </div>
    )
}

export default CurrentUser
