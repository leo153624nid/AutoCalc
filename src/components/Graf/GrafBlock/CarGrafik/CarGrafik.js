import React from "react";
import s from './CarGrafik.module.css';


function CarGrafik (props) {
    const car = props.car;
    const idGrafik = props.idGrafik;
    


    return (
            <div className={s.grafik}>
                Здесь будет график
            </div>
    );
}

export default CarGrafik;