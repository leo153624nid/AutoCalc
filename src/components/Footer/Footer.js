/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ModalContext from '../../contexts/ModalContext/ModalContext'
import s from './Footer.module.css'

const modalBodyAbout = (
    <div>
        <h4>Это учебное приложение для учета автомобильных расходов</h4>
        <div>
            <i>Вы можете:</i>
        </div>
        <div>
            <ul>
                <li>Добавлять данные о машинах</li>
                <li>Редактировать данные о машинах</li>
                <li>Удалять данные о машинах</li>
                <li>Добавлять данные о заправках и прочих расходах</li>
                <li>Редактировать данные о заправках и прочих расходах</li>
                <li>Удалять данные о заправках и прочих расходах</li>
                <li>
                    Получать статистику (графики и средние показатели) о
                    расходах
                </li>
            </ul>
        </div>
    </div>
)
const modalBodySupport = (
    <div>
        <h4>telegram: @leo153624nid</h4>
        <h4>
            LinkedIn:{' '}
            <a href="http://linkedin.com/in/alexey-chaykin-b229b323a">
                alexey-chaykin
            </a>
        </h4>
        <h4>
            GitHub:{' '}
            <a href="https://leo153624nid.github.io/chaykin_aleksey.github.io/">
                leo153624nid
            </a>
        </h4>
    </div>
)

function Footer() {
    const { openModal } = useContext(ModalContext)

    const handleClickAboutBtn = () => {
        openModal({ title: 'О приложении', body: modalBodyAbout })
    }

    const handleClickSupportBtn = () => {
        openModal({
            title: 'Поддержка',
            body: modalBodySupport,
        })
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
