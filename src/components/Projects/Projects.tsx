import React from "react";
import s from "./Projects.module.css";
import Project from "./project/Project";
import common from "../../common/styles/Container.module.css"



const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={common.container + " " + s.projectsContainer}>
                <h3 className={s.title}>My projects</h3>
                <div className={s.projects}>
                    <Project projectName={"Social Network"}
                             projectDescription={"Social network for finding parties and meeting new people"}/>
                    <Project projectName={"Todo list"}
                             projectDescription={"To-do or task list. With the ability to control execution, edit tasks and lists"}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;