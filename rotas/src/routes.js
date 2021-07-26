import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto/Produto';


const Routes = () => {
    return (
        <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            <Route exact path="/contato">
                <Contato />
            </Route>
            <Route path="/produto/:id">
                <Produto />
            </Route>
            <Route path="*">
                <Erro />
            </Route>
        </Switch>
      </BrowserRouter>  
    );
}

export default Routes;