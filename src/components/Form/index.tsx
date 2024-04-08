import Button from "../Button";
import style from './Form.module.scss'
import React, {useState} from "react";
import {ITarefa} from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid';

const Form = ({setTarefas}: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) => {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    const adicionarTarefa = (evento: React.FormEvent) => {
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {
            tarefa,
            tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()
        }])
        setTarefa('');
        setTempo("00:00");
    }

    return (
        <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input value={tarefa} onChange={evento => setTarefa(evento.target.value)} type="text" name="tarefa"
                       id="tarefa" required placeholder="O que você quer estudar?"></input>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input onChange={evento => setTempo(evento.target.value)} value={tempo} type="time" step="1"
                       name="tempo" id="tempo" min="00:00:00" max="01:30:00"
                       required></input>
            </div>
            <Button type="submit" texto='Adicionar'/>
        </form>
    )
}

export default Form