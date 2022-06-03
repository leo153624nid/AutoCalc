import React from "react";
import s from './Graf.module.css';
import UpperBlock from './UpperBlock/UpperBlock';
import GrafBlock from './GrafBlock/GrafBlock';
import BottomBlock from './BottomBlock/BottomBlock';

function Graf (props) {

    return (
        <div className={s.Graf}>
            <UpperBlock {...props}/>

            <GrafBlock />

            <BottomBlock />
        </div>
    );
}

export default Graf;