import React from 'react'
import s from './NewCar.module.css'
import CarDataInput from './CarDataInput/CarDataInput'
import CarPreview from './CarPreview/CarPreview'

const carName = 'Название машины'
const distance = 'Пробег'
const yearProduction = 'Год производства'
const yearOfBuying = 'Год покупки'
const costOfBuying = 'Стоимость покупки'
const vin = 'VIN номер'
const notes = 'Заметки'

function NewCar() {
    return (
        <div className={s.NewCar}>
            <div className={s.form}>
                <CarDataInput label={carName} />
                <CarDataInput label={distance} />
                <CarDataInput label={yearProduction} />
                <CarDataInput label={yearOfBuying} />
                <CarDataInput label={costOfBuying} />
                <CarDataInput label={vin} />
                <CarDataInput label={notes} />
            </div>

            <CarPreview />
        </div>
    )
}

export default NewCar
