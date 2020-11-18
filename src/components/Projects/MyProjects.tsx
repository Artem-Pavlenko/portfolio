import React from "react";
import s from "./MyProjects.module.scss";
import Project from "./project/Project";
import Title from "../../common/common components/Title/Title";
import socialImg from "../../assets/people2.jpg"
import TodoImg from "../../assets/ToDo.jpg"
import {Fade} from "react-awesome-reveal";


const MyProjects = () => {
    const socialNetworkStyle = {
        backgroundImage: `url(${socialImg} )`
    }
    const todoStyle = {
        backgroundImage: `url(${TodoImg} )`
    }

    return (
        <Fade>
            <div id='projects' className={s.projectsBlock}>
                <div className={s.projectsContainer}>
                    <Title title={'projects'}/>
                    <div className={s.projects}>
                        <Project projectName={'Social Network'}
                                 projectDescription={"Social network for finding parties and meeting new people"}
                                 style={socialNetworkStyle}
                                 linkProject='https://artem-pavlenko.github.io/social_network'
                        />
                        <Project projectName={'Todo list'}
                                 projectDescription={"To-do or task list. With the ability to control execution, edit tasks and lists"}
                                 style={todoStyle}
                        />
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default MyProjects;