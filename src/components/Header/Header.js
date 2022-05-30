import React from "react";
import AddCarBtn from "../AddCarBtn/AddCarBtn";
import CurrentUser from "../CurrentUser/CurrentUser";
import Logotype from "../Logotype/Logotype";
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.head}>
            <CurrentUser />

            <Logotype />

            <AddCarBtn />
        </header>
    );
}

export default Header;
