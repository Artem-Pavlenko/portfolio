import React from "react";
import s from "./Main.module.css"
import container from "../../common/styles/Container.module.css";
import MyPhoto from "../../assets/29063381_2026003124336080_1469933082483901931_n.jpg"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={container.container + " " + s.mainContainer}>
                <div className={s.text}>
                    <span>Hello World!</span>
                    <h1>I am Artem Pavlenko</h1>
                    <p>A Front-end Developer</p>
                </div>
                <div className={s.photo}>
                    <img src={MyPhoto} alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Main;