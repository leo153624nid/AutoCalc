import React from "react";
import s from './Graf.module.css';
import UpperBlock from './UpperBlock/UpperBlock';
import GrafBlock from './GrafBlock/GrafBlock';
import BottomBlock from './BottomBlock/BottomBlock';
import { useState } from 'react';

function Graf (props) {
    const [grafik, setGrafik] = useState(0);
    const car = props.data;
    debugger;
    function checkAndChangeGrafikId (grafikId) {
        if (car.fuelings.length == 0 && car.etc.length) {
            setGrafik(5);
            console.log ('Нет данных о заправках');
            alert('Нет данных о заправках');
        } else if (car.fuelings.length == 0 && car.etc.length == 0) {
            setGrafik(0);
            console.log ('Нет данных о заправках и о прочих расходах');
            alert('Нет данных о заправках и о прочих расходах');
        } else if (car.etc.length == 0 && grafikId === 5) {
            setGrafik(1);
            console.log ('Нет данных о прочих расходах');
            alert('Нет данных о прочих расходах');
        }
        setGrafik(grafikId);
        console.log(grafikId);
    }
    checkAndChangeGrafikId(grafik);
 

    return (
        <div className={s.Graf}>
            <UpperBlock changeGrafik={checkAndChangeGrafikId} carName={car.carName}/>

            <GrafBlock idGrafik={grafik} car={car}/>

            <BottomBlock car={car}/>
        </div>
    );
}

export default Graf;