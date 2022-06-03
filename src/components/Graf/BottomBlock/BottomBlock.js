import React from "react";
import s from './BottomBlock.module.css';

function BottomBlock (props) {
    return (
        <div className={s.BottomBlock}>
            <div className={s.distance}>
                <span>Расстояние</span>
                <span>XXXXX км.</span>
            </div>
        
            <div className={s.fuel}>
                <span>Топливо</span>
                <span>XXXXX руб.</span>
            </div>                
                
            <div className={s.etc}>
                <span>Прочее</span>
                <span>XXXXХX руб.</span>
            </div>

            <div className={s.itogo}>
                <span>Итого</span>
                <span>XXXXХX руб.</span>
            </div>
        </div>
    );
}

export default BottomBlock;