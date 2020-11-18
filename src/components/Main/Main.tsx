import React from "react";
import s from "./Main.module.scss"
import MyPhoto from "../../assets/photo_Artem.jpg"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <span>I am Artem <span> Pavlenko</span></span>
                    <h1>Frontend Developer.</h1>
                </div>
                <div className={s.photo}>
                    <div><img src={MyPhoto} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default Main;