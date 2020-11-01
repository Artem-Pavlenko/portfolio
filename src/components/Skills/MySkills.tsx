import React from "react";
import s from "./MySkills.module.scss";
import Skill from "./skill/Skill";
import Title from "../../common/common components/Title";
import ts from "../../assets/typescript.svg"
import reactIcon from "../../assets/react.svg"
import css from "../../assets/css.svg"


let TS = "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript."
let CSS = "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript/TypeScript"
let ReactJS = "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug."

const MySkills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title title={"skills"}/>
                <div className={s.skills}>
                    <Skill title={"TS"} description={TS} icon={ts}/>
                    <Skill title={"CSS"} description={CSS} icon={css}/>
                    <Skill title={"React"} description={ReactJS} icon={reactIcon}/>
                </div>
            </div>
        </div>
    )
}

export default MySkills;