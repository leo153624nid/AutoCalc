import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <span>
                <NavLink to="/">Главная</NavLink>
            </span>
            <span>
                <NavLink to="/">О приложении</NavLink>
            </span>
            <span>
                <NavLink to="/">Поддержка</NavLink>
            </span>
        </div>
    )
}

export default Footer
