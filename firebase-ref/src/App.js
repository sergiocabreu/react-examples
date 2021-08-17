import {useState} from 'react';
import firebase from './firebaseConnection'
import './style.css';


function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [user, setUser] = useState({});

  async function novoUsuario() {
    await firebase.auth()
                  .createUserWithEmailAndPassword(email, senha)
                  .then( async (value) => {
                    console.log('CADASTRADO COM SUCESSO');

                    await firebase.firestore()
                            .collection('users')
                            .doc(value.user.uid)
                            .set({
                              nome: nome,
                              cargo: cargo,
                              status: true
                            })
                            .then( () => {
                                setNome('');
                                setCargo('');
                                setEmail('');
                                setSenha('');
                            });

                  })
                  .catch( (error) => {
                    if(error.code === 'auth/weak-password') {
                      alert('Senha fraca');
                    } else if (error.code === 'auth/email-already-in-use') {
                      alert('Esse email já existe')
                    }
                  });
  }

  function login() {
      firebase.auth()
              .signInWithEmailAndPassword(email, senha)
              .then( (value) => {

                firebase.firestore()
                        .collection('users')
                        .doc(value.user.uid)
                        .get()
                        .then( (snapshot) => {
                          setUser({
                            nome: snapshot.data().nome,
                            cargo: snapshot.data().cargo,
                            email: value.email,
                            status: snapshot.data().status
                          });
                        })

              });
  }

  async function logout(){
    await firebase.auth().signOut();
    setUser({});
  }

  return (
    <div>
      <h1>React Js + Firebase</h1>

      <div className="container">

          <label>Nome</label>
          <input type="text" value={nome} onChange={ (e) => setNome(e.target.value)}/><br/>

          <label>Cargo</label>
          <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)}/><br/>

          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>

          <label>Senha</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/><br/>

          <button onClick={novoUsuario}>Cadastrar</button>
          <button onClick={logout}>logout</button>
          <button onClick={login}>Login</button>
      </div>

      <hr/><br/>

      {Object.keys(user).length > 0 && (
        <div>
          <strong>Olá</strong> {user.nome} <br/>
          <strong>Cargo: </strong> {user.cargo} <br/>
          <strong>Email: </strong> {user.email} <br/>
          <strong>Status: </strong> {user.status ? 'ATIVO' : 'INATIVO'} <br/> 
        </div>
      )}

    </div>
  );
}

export default App;
