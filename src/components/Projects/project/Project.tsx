import React from "react";
import s from "./Project.module.css"

type ProjectsType = {
    projectName: string
    projectDescription: string
    style?: any
}

const Project = (props: ProjectsType) => {
    return (
        <div className={s.project} >
            <div className={s.backgroundIcon} style={props.style}>
                <a href={"#"}><span>view</span></a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.projectName}</h3>
                <span className={s.description}>{props.projectDescription}</span>
            </div>
        </div>
    )
}

export default Project;