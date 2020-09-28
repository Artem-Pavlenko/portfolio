import React from "react";
import s from "./Project.module.css"

type ProjectsType = {
    projectName: string
    projectDescription: string
}

const Project = (props: ProjectsType) => {
    return (
        <div className={s.project}>
            <div className={s.backgroundIcon}>
                <button>view</button>
            </div>
            <p>{props.projectName}</p>
            <span>{props.projectDescription}</span>
        </div>
    )
}

export default Project;