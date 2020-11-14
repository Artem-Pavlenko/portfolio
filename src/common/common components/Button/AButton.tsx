import React from "react";
import s from "./Button.module.scss"

type ButtonType = {
    text: string
    href?: string
}

const AButton : React.FC<ButtonType> = ({text, href="#"}) => {

    return (
        <a href={href} className={s.btn}>{text.toUpperCase()}</a>
    )
}

export default AButton