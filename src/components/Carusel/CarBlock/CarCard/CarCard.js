import React from "react";
import { Link } from "react-router-dom";
import s from './CarCard.module.css';

function CarCard (props) {
  
    const carPic = props.carPic;
    const carName = props.carData.carName;
    const carDistance = props.carData.distance;
    const fuelConsumptions = props.carData.fuelConsumptions;
    const allMonth = Math.floor( props.carData.allMonth );
    const carId = props.carData.carId;
    
    return (
        <div className={s.CarCard}>
            <img src={carPic} alt='CarPic'/>

            <div className={s.CarName}>
                <span className={s.pad}><b>{carName}</b></span>
                <span className={s.pad}>Пробег <span>{carDistance}</span> км</span>
            </div>
            
            <div className={s.CarConsumptions}>
                <div className={s.FuelConsumptions}>
                    <span className={s.pad}>Расход топлива</span>
                    <span className={s.pad}> <span>{fuelConsumptions}</span> л/100 км</span>
                </div>

                <div className={s.AllMonth}>
                    <span className={s.pad}>Содержание</span>
                    <span className={s.pad}> <span>{allMonth}</span> &#8381;/мес</span>
                </div>
            </div>
            
            <div className={s.CarTake}>
                <Link to={`/graf/${carId}`} className={s.btn}>Выбрать</Link>
            </div>
        </div>
    );
}

export default CarCard;