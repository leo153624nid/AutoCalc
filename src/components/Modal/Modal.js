/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import ModalContext from '../../contexts/ModalContext/ModalContext'
import s from './Modal.module.css'

// Данные для модального окна "О приложении"
export const ModalBodyAbout = (
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
// Данные для модального окна "Поддержка"
export const ModalBodySupport = (
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

function Modal({ title, body }) {
    const { closeModal } = useContext(ModalContext)

    const [closingModal, setClosingModal] = useState(false)

    const handleCloseModal = () => {
        setClosingModal(true)

        const closeTimeOut = setTimeout(() => {
            closeModal()
            clearTimeout(closeTimeOut)
        }, 300)
    }

    return (
        <div
            className={closingModal ? s.backdropHide : s.backdrop}
            onClick={handleCloseModal}
        >
            <div
                className={closingModal ? s.ModalHide : s.Modal}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className={s.header}>
                    <h3>{title}</h3>
                </div>

                <div className={s.body}>{body}</div>
            </div>
        </div>
    )
}

export default Modal
