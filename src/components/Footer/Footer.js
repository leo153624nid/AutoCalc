import React from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <span>
                <Link to="/">Главная</Link>
            </span>
            <span>
                <Link to="/">О приложении</Link>
            </span>
            <span>
                <Link to="/">Поддержка</Link>
            </span>
        </div>
    )
}

export default Footer
