import React, {Component} from 'react';


class Formulario3 extends Component {

    constructor(props) {

        super(props);

        this.state = {
            form: {
                nome: "",
                email : "",
                senha: "",
                sexo: ""
            }
        }
        this.alterarFormulario = this.alterarFormulario.bind(this);
    }

    alterarFormulario(event) {
        const form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState({form})
    }

    render() {
        return (
            <div>
                <h3>Formulário 3</h3>

                <label>Nome</label>
                <input 
                    type="text" 
                    name="nome" 
                    value={this.state.form.nome} 
                    onChange={this.alterarFormulario}
                />
                <br/>

                <label>Email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={this.state.form.email} 
                    onChange={this.alterarFormulario}
                /><br/>

                <label>Senha</label>
                <input 
                    type="password" 
                    name="senha" 
                    value={this.state.form.senha} 
                    onChange={this.alterarFormulario}
                />
                <br/>

                <label>Sexo</label>
                <select 
                    name="sexo" 
                    value={this.state.sexo} 
                    onChange={this.alterarFormulario}>
                    <option value="masculino">Masculino</option>
                    <option value="femino">Feminino</option>
                </select>

                <h3>{this.state.form.nome}</h3>
                <h3>{this.state.form.email}</h3>
                <h3>{this.state.form.senha}</h3>
                <h3>{this.state.form.sexo}</h3>
            </div>
        );
    }
}


export default Formulario3;