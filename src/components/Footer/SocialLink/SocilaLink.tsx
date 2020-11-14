import React from "react";
import s from "./SocialLink.module.scss"

type SocialLink = {
    href: string
    imgSrc: string
}

const SocialLink = (props: SocialLink) => {
    return (
        <div className={s.linkBlock}>
            <a href={props.href}>
                <img src={props.imgSrc} alt=""/>
            </a>
        </div>
    )
}

export default SocialLink