import React, {useState} from 'react';
import Form from "../components/Form";
import Listagem from "../components/List";
import style from './App.module.scss'
import Chronometer from "../components/Chronometer";
import {ITarefa} from "../types/tarefas";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionaTarefa(tarefaSelecionada: ITarefa) {
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })))
    }

    return (
        <div className={style.AppStyle}>
            <Form setTarefas={setTarefas}/>
            <Listagem tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
            <Chronometer selecionado={selecionado}/>
        </div>
    );
}

export default App;
