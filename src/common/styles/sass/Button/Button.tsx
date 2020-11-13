import React from "react";
import s from "../Button/Button.module.scss"



const Button: React.FC<{text: string}> = ({text}) => {

    return (
        <a href="" className={s.btn}>{text.toUpperCase()}</a>
    )
}

export default Button