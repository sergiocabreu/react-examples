import { useContext } from "react"
import { UserContext } from "../../contexts/user"

export default function Aluno() {

    const {alunos} = useContext(UserContext);
    return (
        <div>Aluno component: {alunos}</div>
    )
}