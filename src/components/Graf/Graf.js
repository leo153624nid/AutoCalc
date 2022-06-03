import React from "react";
import s from './Graf.module.css';
import UpperBlock from './UpperBlock/UpperBlock';
import GrafBlock from './GrafBlock/GrafBlock';
import BottomBlock from './BottomBlock/BottomBlock';
import { useState } from 'react';

function Graf (props) {
    const [grafik, setGrafik] = useState(1);
    const car = props.data;

    function changeGrafik (key) {
        console.log(`grafik ${key}`);
        setGrafik(+key);
    }

    return (
        <div className={s.Graf}>
            <UpperBlock changeGrafik={changeGrafik} carName={car.carName}/>

            <GrafBlock idGrafik={grafik} car={car}/>

            <BottomBlock car={car}/>
        </div>
    );
}

export default Graf;