import React from "react";
import AddCarBtn from "../AddCarBtn/AddCarBtn";
import CurrentUser from "../CurrentUser/CurrentUser";
import Logotype from "../Logotype/Logotype";
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.head}>
            <div className={s.CurrentUser}>
                <CurrentUser />
            </div>

            <div className={s.Logotype}>
                <Logotype />
            </div>

            <div className={s.AddCarBtn}>
                <AddCarBtn />
            </div>
        </header>
    );
}

export default Header;
