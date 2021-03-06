import React from "react";
import s from "./Skill.module.scss";

type SkillType = {
    title: string
    description: string
    icon: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Skill;