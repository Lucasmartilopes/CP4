import React from 'react';
import './style.css'

const LoginComponent: React.FC = () => {
    return (
        <form className="login-form">
            <label>Nome de usuário ou E-mail:</label>
            <input type="text" />

            <label>Senha:</label>
            <input type="password" />

            <button type="submit">Login</button>
        </form>
    );
}

export default LoginComponent;
