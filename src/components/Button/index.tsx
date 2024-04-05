import style from './Button.module.scss'

const Button = ({texto, type}: {texto: string, type?: "submit" | "reset" | "button" | undefined}) => {
    return (
        <button type={type} className={style.botao}>{texto}</button>
    )
}

export default Button