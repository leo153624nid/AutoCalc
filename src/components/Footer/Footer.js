import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.btn}>
                <NavLink to="/">Главная</NavLink>
            </div>
            <div className={s.btn}>
                <NavLink to="/">О приложении</NavLink>
            </div>
            <div className={s.btn}>
                <NavLink to="/">Поддержка</NavLink>
            </div>
        </div>
    )
}

export default Footer
