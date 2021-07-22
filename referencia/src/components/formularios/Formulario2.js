import React, {Component} from 'react';


class Formulario2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            senha: "",
            sexo: "masculino"
        }

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
    }

    trocaEmail(event) {
        const valorDigitado = event.target.value;
        this.setState({email: valorDigitado});
    }

    trocaSenha(event) {
        const valorDigitado = event.target.value;
        this.setState({senha: valorDigitado});
    }

    render() {
        return (
            <div>
                <h3>Login</h3>

                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.trocaEmail}/><br/>

                <label>Senha</label>
                <input type="password" name="senha" value={this.state.senha} onChange={this.trocaSenha}/><br/>

                <select 
                    name="sexo" 
                    value={this.state.sexo} 
                    onChange={ (e) => { this.setState({sexo: e.target.value}) } }>
                    <option value="masculino">Masculino</option>
                    <option value="femino">Feminino</option>
                </select>

                <h3>{this.state.email}</h3>
                <h3>{this.state.senha}</h3>
                <h3>{this.state.sexo}</h3>
            </div>
        );
    }
}


export default Formulario2;