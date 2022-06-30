/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'
import AddCarBtn from '../common/AddCarBtn/AddCarBtn'
import CurrentUser from './CurrentUser/CurrentUser'
import Logotype from './Logotype/Logotype'
import s from './Header.module.css'

function Header({ auth }) {
    return (
        <header className={s.head}>
            <div className={s.CurrentUser}>
                <CurrentUser auth={auth} />
            </div>

            <div className={s.Logotype}>
                <NavLink to="/" className={s.link}>
                    <Logotype />
                </NavLink>
            </div>

            <div className={s.AddCarBtn}>
                <AddCarBtn />
            </div>
        </header>
    )
}

export default Header
