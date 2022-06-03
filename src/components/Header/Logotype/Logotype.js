import React from "react";
import s from './Logotype.module.css';
import logo from '../../../img/logo48.png';

function Logotype () {
    return (
        <div className={s.logotype}>
            <img src={logo} alt="logo" />
            <span>AutoCalc</span>
        </div>
    );
}

export default Logotype;