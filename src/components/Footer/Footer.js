/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ModalContext from '../../contexts/ModalContext/ModalContext'
import s from './Footer.module.css'

function Footer() {
    const { openModal } = useContext(ModalContext)

    const handleClickAboutBtn = () => {
        openModal({ title: 'О приложении' })
    }

    const handleClickSupportBtn = () => {
        openModal({ title: 'Поддержка' })
    }

    return (
        <div className={s.footer}>
            <div className={s.btn}>
                <NavLink to="/">Главная</NavLink>
            </div>
            <div className={s.btn} onClick={handleClickAboutBtn}>
                <span>О приложении</span>
            </div>
            <div className={s.btn} onClick={handleClickSupportBtn}>
                <span>Поддержка</span>
            </div>
        </div>
    )
}

export default Footer
