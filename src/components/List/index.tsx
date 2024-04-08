import style from './List.module.scss'
import Item from "./Item";
import {ITarefa} from "../../types/tarefas";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
const Listagem = ({tarefas, selecionaTarefa}: Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
                ))}
            </ul>
        </aside>
    )
}

export default Listagem