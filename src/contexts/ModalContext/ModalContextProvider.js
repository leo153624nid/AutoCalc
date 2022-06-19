/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import ModalContext from './ModalContext'

function ModalProvider({ children }) {
    const [modalOpened, setModalOpened] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    const openModal = (modalConfig) => {
        setModalContent(modalConfig)
        setModalOpened(true)
    }
    const closeModal = () => {
        setModalOpened(false)
    }

    const valueModalProvider = {
        openModal,
        closeModal,
    }
    return (
        <ModalContext.Provider value={valueModalProvider}>
            {modalOpened && <Modal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
