import React, {useState} from 'react';
import EmptyForm from "../../shared/ui/emptyForm/EmptyForm";
import BorderInput from "../../shared/ui/borderInput/BorderInput";
import {Link} from "react-router-dom";
import BlueButton from "../../shared/ui/blueButton/BlueButton";

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login(event: React.MouseEvent) {
        event.preventDefault()
        console.log(username, password)
    }

    return (
        <div>
            <EmptyForm>
                <h1>Вход</h1>
                <span className="input-header">Username</span>
                <BorderInput
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />

                <span className="input-header">Password</span>
                <BorderInput
                    placeholder="Введите пароль"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <div className="space-between">
                    <Link to="/registration">
                        <BlueButton>На страницу регистрации</BlueButton>
                    </Link>
                    <BlueButton onClick={login}>Войти</BlueButton>
                </div>
            </EmptyForm>
        </div>
    );
};

export default LoginForm;