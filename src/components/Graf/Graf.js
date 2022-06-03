import React from "react";
import s from './Graf.module.css';
import UpperBlock from './UpperBlock/UpperBlock';
import GrafBlock from './GrafBlock/GrafBlock';
import BottomBlock from './BottomBlock/BottomBlock';
import { useState } from 'react';

function Graf (props) {
    const [car, setCar] = useState(props.data);

    function changeGrafik (key) {
        console.log(`grafik ${key}`);
    }

    return (
        <div className={s.Graf}>
            <UpperBlock changeGrafik={changeGrafik} carName={car.carName}/>

            <GrafBlock />

            <BottomBlock />
        </div>
    );
}

export default Graf;