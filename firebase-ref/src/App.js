import {useEffect, useState} from 'react';
import firebase from './firebaseConnection'
import './style.css';


function App() {

  const [idPost, setIdPost] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

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

  return (
    <div>
      <h1>React Js + Firebase</h1>

      <div className="container">

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
