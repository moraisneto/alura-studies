import style from './Button.module.scss'

const Button = ({texto} : {texto: string}) => {
    return (
        <button className={style.botao}>{texto}</button>
    )
}

export default Button