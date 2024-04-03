import Button from "../Button";

const Form = () => {
    return (
        <form action="">
            <div>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input type="text" name="tarefa" id="tarefa" required placeholder="O que você quer estudar?"></input>
            </div>
            <div>
                <label htmlFor="tempo">Tempo</label>
                <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required></input>
            </div>
            <Button/>
        </form>
    )
}

export default Form