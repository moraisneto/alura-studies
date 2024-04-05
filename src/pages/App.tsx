import React, {useState} from 'react';
import Form from "../components/Form";
import Listagem from "../components/List";
import style from './App.module.scss'
import Chronometer from "../components/Chronometer";
import {ITarefa} from "../types/tarefas";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    return (
        <div className={style.AppStyle}>
            <Form setTarefas={setTarefas} />
            <Listagem tarefas={tarefas} />
            <Chronometer />
        </div>
    );
}

export default App;
