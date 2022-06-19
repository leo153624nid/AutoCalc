/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'
import ModalContext from '../../contexts/ModalContext/ModalContext'
import s from './Modal.module.css'

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

    const backdropHide = closingModal ? 'hide' : ''
    return (
        <div
            className={`${s.backdrop} ${`s.${backdropHide}`}`}
            onClick={handleCloseModal}
        >
            <div
                className={s.Modal}
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
