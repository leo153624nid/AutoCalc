import React from "react";
import logo from '../../img/logo48.png';
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.head}>
            <div className={s.user}>
                Current
                User
            </div>

            <div className={s.logotype}>
                <img src={logo} alt="logo" />
                <span>AutoCalc</span>
            </div>

            <div className={s.addCar}>
                Add Car
            </div>
        </header>
    );
}

export default Header;
