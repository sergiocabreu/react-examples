import React, { useCallback, useEffect, useMemo, useState } from "react";

function Hooks1() {
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage));
        }

        return () => {} //executar após sainda do component.
    }, []) // executa após montar a tela.

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]); // escuta o state tarefas

    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

    const handleAdd = useCallback( () => {
        setTarefas([...tarefas, input]);
        setInput('');
    }, [tarefas, input]);

    return (
        <>
            <h3>Hooks1</h3>
            <ul>
                {
                    tarefas.map(tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))
                }
            </ul>
            <strong>Você tem {totalTarefas} tarefas!</strong><br/>
            <input type="text" value={input} onChange={ e => setInput(e.target.value) }/>
            <button onClick={handleAdd}>Adicionar</button>
        </>
    );
}

export default Hooks1;