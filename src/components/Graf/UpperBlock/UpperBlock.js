/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React from 'react'
import s from './UpperBlock.module.css'
import { changeGrafikActionCreator } from '../../../redux/reduxStore'

function UpperBlock({ carName, dispatch }) {
    const wrapper = React.useRef()

    // Функция меняет классы у переключателей графиков и запускает функцию смены графиков
    function changeBtn(event) {
        wrapper.current.childNodes.forEach((elem) =>
            elem.classList.remove(`${s.click}`)
        )
        event.currentTarget.classList.add(`${s.click}`)
        dispatch(changeGrafikActionCreator(event.currentTarget.id))
    }

    return (
        <div className={s.UpperBlock} ref={wrapper}>
            <div
                className={`${s.moneyForFuel} ${s.btn} ${s.click}`}
                onClick={(event) => {
                    changeBtn(event)
                }}
                id="1"
            >
                <span>Расходы на топливо</span>
            </div>

            <div
                className={`${s.averageDistance} ${s.btn}`}
                onClick={(event) => {
                    changeBtn(event)
                }}
                id="2"
            >
                <span>Средний пробег</span>
            </div>

            <div
                className={`${s.averageConsumption} ${s.btn}`}
                onClick={(event) => {
                    changeBtn(event)
                }}
                id="3"
            >
                <span>Средний расход</span>
            </div>

            <div
                className={`${s.costFuel} ${s.btn}`}
                onClick={(event) => {
                    changeBtn(event)
                }}
                id="4"
            >
                <span>Стоимость топлива</span>
            </div>

            <div
                className={`${s.moneyForEtc} ${s.btn}`}
                onClick={(event) => {
                    changeBtn(event)
                }}
                id="5"
            >
                <span>Остальные расходы</span>
            </div>

            <div className={`${s.carInfo} ${s.btn}`}>
                <span>
                    <b>{carName}</b>
                </span>{' '}
                {/* Потом сделать кнопкой для редактирования текущей машины */}
                <span className={s.word}>
                    <i>Редактировать</i>
                </span>
            </div>
        </div>
    )
}

export default UpperBlock
