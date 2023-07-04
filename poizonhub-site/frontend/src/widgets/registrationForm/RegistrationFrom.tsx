import React, {useState} from 'react';
import EmptyForm from "../../shared/ui/emptyForm/EmptyForm";
import BorderInput from "../../shared/ui/borderInput/BorderInput";
import {Link} from "react-router-dom";
import BlueButton from "../../shared/ui/blueButton/BlueButton";

const RegistrationFrom = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function registration(event: React.MouseEvent) {
        event.preventDefault()
        console.log(name, phone, email, username, password, confirmPassword)
    }

    return (
        <div>
            <EmptyForm>
                <h1>Регистрация</h1>
                <span className="input-header">ФИО</span>
                <BorderInput
                    placeholder="Введите свое имя"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <span className="input-header">Телефон</span>
                <BorderInput
                    placeholder="Введите свой номер телефона"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                />

                <span className="input-header">Почта</span>
                <BorderInput
                    placeholder="Введите свою почту"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

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

                <BorderInput
                    placeholder="Повторите пароль"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />

                <div className="space-between">
                    <Link to="/login">
                        <BlueButton>Уже есть аккаунт?</BlueButton>
                    </Link>
                    <BlueButton onClick={registration}>Зарегистрироваться</BlueButton>
                </div>
            </EmptyForm>
        </div>
    );
};

export default RegistrationFrom;