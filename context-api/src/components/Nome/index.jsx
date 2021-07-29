import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export default function Nome() {

    const {alunos, setAlunos} = useContext(UserContext);

    return (<div>
        Nome component {alunos}<br></br>
        <button onClick={ () => setAlunos('Novo nome')}>Trocar nome</button>
        </div>)
}