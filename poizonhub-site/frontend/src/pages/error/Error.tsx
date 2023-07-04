import React from 'react';
import {Link} from "react-router-dom";
import BlueButton from "../../shared/ui/blueButton/BlueButton";

const Error = () => {
    return (
        <div>
            <h1>ОШИБКА</h1>
            <div className="center">
                <Link to="/registration">
                    <BlueButton>Зарегистрироваться</BlueButton>
                </Link>
                <Link to="/login">
                    <BlueButton>Войти</BlueButton>
                </Link>
            </div>
        </div>
    );
};

export default Error;