import React from "react";
import s from './CurrentUser.module.css';

function CurrentUser () {
    return (
        <div className={s.user}>
            <span>Current User</span>
        </div>
    );
}

export default CurrentUser;