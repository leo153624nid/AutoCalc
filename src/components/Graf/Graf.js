import React from "react";
import s from './Graf.module.css';
import { Link } from 'react-router-dom';

function Graf (props) {
    return (
        <div className={s.Graf}>
            <span><Link to='/'>Home</Link></span>
        </div>
    );
}

export default Graf;