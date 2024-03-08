import { Component } from 'react';
import './style.css'

class CadastroComponent extends Component {
    render() {
        return (
            <form>
                <label>Nome de usuário:</label>
                <input type="text" />

                <label>Senha:</label>
                <input type="password" />

                <label>E-mail:</label>
                <input type="email" />

                <button type="submit">Cadastrar</button>
            </form>
        );
    }
}

export default CadastroComponent;
