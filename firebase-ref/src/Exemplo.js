import {useEffect, useState} from 'react';
import firebase from './firebaseConnection'
import './style.css';


function App() {

  const [idPost, setIdPost] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(false);
  const [userLogged, setUserLogged] = useState({});

  useEffect(() =>{
    async function loadPosts() {
      firebase.firestore()
              .collection('posts')
              .onSnapshot( (docs) => {
                  let novos = [];
                  docs.forEach( doc => {
                      novos.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        autor: doc.data().autor
                      }
                      );
                  });
                  setPosts(novos);
                });
    }

    loadPosts();
  }, []);

  useEffect(()=>{
    async function checkLogin() {
      await firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          setUser(true);
          setUserLogged({
            uid: user.id,
            email: user.email
          });
          console.log('tem user', user)
        } else {
          setUser(false);
          setUserLogged({});
          console.log('Sem!!!!');
        }
      });
    }

    checkLogin();

  }, []);
  async function handleAddV1() {
      await firebase.firestore()
                    .collection('posts')
                    .doc('1')
                    .set({
                      titulo: titulo,
                      autor: autor
                    })
                    .then( () => console.log('salvou com sucesso'))
                    .catch( (error) => console.log('Errou ao salvar: ', error));

  }

  async function handleAdd() {
      await firebase.firestore()
                    .collection('posts')
                    .add({
                      titulo: titulo,
                      autor: autor
                    })
                    .then( () => {
                      console.log('Salvo com sucesso');
                      setTitulo('');
                      setAutor('');
                    })
                    .catch( (error) => console.log('Deu error!'));
  }

  async function buscarPost() {
    await firebase.firestore()
                  .collection('posts')
                  .doc('1')
                  .get()
                  .then( (snapshot) => {
                    setTitulo( snapshot.data().titulo);
                    setAutor( snapshot.data().autor);
                  })
                  .catch( () => console.log('Deu erro ao pegar o documento'));
  }

  async function buscarPost() {
    await firebase.firestore()
                  .collection('posts')
                  .get()
                  .then( (snapshot) => {
                      
                      let novosPost = snapshot.docs
                                              .map( doc => {
                                                return {
                                                    id: doc.id,
                                                    titulo: doc.data().titulo,
                                                    autor: doc.data().autor
                                                  };
                      });
                      setPosts(novosPost);
                  })
                  .catch( (error) => console.log('Deu erro', error));
  }

  async function editarPost() {
      await firebase.firestore()
                    .collection('posts')
                    .doc(idPost)
                    .update({
                      titulo: titulo,
                      autor: autor
                    })
                    .then(()=> {
                      setIdPost('');
                      setTitulo('');
                      setAutor('');
                    })
                    .catch( () => console.log('Erro ao atualizar o post.'));
  }

  async function excluirPost(id) {
    await firebase.firestore()
                  .collection('posts')
                  .doc(id)
                  .delete()
                  .then( () => console.log('excluído com sucesso.'))
                  .catch( () => console.log('erro ao excluír'));
    console.log('Foi');
  }

  async function novoUsuario() {
    await firebase.auth()
                  .createUserWithEmailAndPassword(email, senha)
                  .then( () => console.log('CADASTRADO COM SUCESSO'))
                  .catch( (error) => {
                    if(error.code === 'auth/weak-password') {
                      alert('Senha fraca');
                    } else if (error.code === 'auth/email-already-in-use') {
                      alert('Esse email já existe')
                    }
                  });
  }

  async function logout(){
    await firebase.auth().signOut();
  }

  async function fazerLogin() {
    await firebase.auth()
                  .signInWithEmailAndPassword(email, senha)
                  .then( (value) => console.log(value))
                  .catch( () => console.log('Erro ao logar!!'));
  }

  return (
    <div>
      <h1>React Js + Firebase</h1>

      { user && (
        <div>
          <strong>Bem vindo!!!</strong>
          <span>{userLogged.uid} - {userLogged.email}</span>
          <br/><br/>
        </div>
      )}

      <div className="container">
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <label>Senha</label>
          <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)}></input>

          <button onClick={novoUsuario}>Cadastrar</button>
          <button onClick={logout}>logout</button>
          <button onClick={fazerLogin}> Fazer login</button>
      </div>

      <hr />
      <div className="container">

        <h2>Banco de dados</h2>
        <label>ID</label>
        <input type="text" value={idPost} onChange={ (e) => setIdPost(e.target.value)}></input>

        <label>Título</label>
        <textarea type="text" value={titulo} onChange={ (e) => { setTitulo(e.target.value)}} />

        <label>Autor</label>
        <input type="text" value={autor} onChange={(e)=> { setAutor(e.target.value)}} />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar</button>
        <button onClick={editarPost}>Editar</button> <br></br>

        <ul>
          { posts.map( (post) => (
            <li key={post.id}>
              <span>{post.id}</span> <br></br>
              <span>Título: {post.titulo} </span><br></br>
              <span>Autor: {post.autor} </span> <br/>
              <button onClick={() => excluirPost(post.id)}>Excluir</button>
              <br/><br/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
