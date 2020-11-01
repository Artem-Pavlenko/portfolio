import React from "react";
import s from "./Main.module.scss"
import MyPhoto from "../../assets/29063381_2026003124336080_1469933082483901931_n.jpg"

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.text}>
                    <span>Hello World !</span>
                    <h1>
                        I am
                        <span> Artem Pavlenko</span>
                    </h1>
                    <span>A Front-end Developer</span>
                </div>
                <div className={s.photo}>
                    <img src={MyPhoto} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Main;