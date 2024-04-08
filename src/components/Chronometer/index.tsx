import Button from "../Button";
import Clock from "./Clock";
import style from "./Chronometer.module.scss"
import tempoParSegundos from "../../common/utils/time";
import {ITarefa} from "../../types/tarefas";
import {useEffect, useState} from "react";

const Chronometer = ({selecionado}: { selecionado: ITarefa | undefined }) => {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParSegundos(selecionado.tempo));
        }
    }, [selecionado]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button texto='Começar!'/>
        </div>
    )
}

export default Chronometer