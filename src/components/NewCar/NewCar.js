/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react'
import s from './NewCar.module.css'
import CarDataInput from './CarDataInput/CarDataInput'
import CarPreview from './CarPreview/CarPreview'

const name = 'Название машины'
const dist = 'Пробег, км'
const yearProd = 'Год производства'
const yearOfBuy = 'Год покупки'
const costOfBuy = 'Стоимость покупки, руб'
const vinNumber = 'VIN номер'
const note = 'Заметки'

function NewCar({
    newCar,
    yourCar,
    addUserCar,
    delUserCar,
    changeCarName,
    changeDistance,
    changeYearProd,
    changeYearBuy,
    changeCostBuy,
    changeVin,
    changeNotes,
    changeCarPic,
}) {
    return (
        <div className={s.NewCar}>
            <div className={s.form}>
                <CarDataInput
                    label={name}
                    value={newCar.carName}
                    change={changeCarName}
                />
                <CarDataInput
                    label={dist}
                    value={newCar.distance}
                    change={changeDistance}
                />
                <CarDataInput
                    label={yearProd}
                    value={newCar.yearProduction}
                    change={changeYearProd}
                />
                <CarDataInput
                    label={yearOfBuy}
                    value={newCar.yearOfBuying}
                    change={changeYearBuy}
                />
                <CarDataInput
                    label={costOfBuy}
                    value={newCar.costOfBuying}
                    change={changeCostBuy}
                />
                <CarDataInput
                    label={vinNumber}
                    value={newCar.vin}
                    change={changeVin}
                />
                <CarDataInput
                    label={note}
                    value={newCar.notes}
                    change={changeNotes}
                />
            </div>

            <div className={s.carPrev}>
                <CarPreview
                    newCar={newCar}
                    yourCar={yourCar}
                    carId={newCar.carId}
                    addUserCar={addUserCar}
                    delUserCar={delUserCar}
                    changeCarPic={changeCarPic}
                />
            </div>
        </div>
    )
}

export default NewCar
