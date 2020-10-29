import React from "react";
import s from "./Project.module.scss"

type ProjectsType = {
    projectName: string
    projectDescription: string
    style?: any
    linkProject?: string
}

const Project = (props: ProjectsType) => {
    return (
        <div className={s.project} >
            <div className={s.backgroundIcon} style={props.style}>
                <a href={props.linkProject || '#'}><span>view</span></a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.projectName}</h3>
                <span className={s.description}>{props.projectDescription}</span>
            </div>
        </div>
    )
}

export default Project;