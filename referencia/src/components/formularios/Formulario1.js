import React, { Component } from 'react';

class Formulario1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: ''
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        event.preventDefault();

        const {nome, email, senha} = this.state;

        if (nome !== '' && email !== '' && senha !== '') {
            console.log(`${nome}, ${email}, ${senha}`);
            this.setState({error: ''});
        } else {
            this.setState({error: 'Preencha todos os campos.'});
        }
    }

    render() {
        return (
        <form onSubmit={this.cadastrar}>

            {this.state.error && <p>{this.state.error}</p> }

            <label>Nome</label>
            <input 
                type="text" 
                name="nome" 
                value={this.state.nome} 
                onChange={(e) => {
                    this.setState({nome: e.target.value})
                }}
            />
            <br/>

            <label>email</label>
            <input 
                type="text"
                name="email"
                value={this.state.email}
                onChange={(e) => {
                    this.setState({ email: e.target.value})
                }}
            />
            <br/>

            <label>Senha</label>
            <input 
                type="password"
                name="senha"
                value={this.state.senha}
                onChange={(e) => { 
                    this.setState({ senha: e.target.value}) 
                }}
            />
            <br/>

            <button>Cadastrar</button>

        </form>
        )
    }
}

export default Formulario1;