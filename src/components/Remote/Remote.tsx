import React from "react";
import s from "./Remote.module.css";

const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            {/*<div className={common.container + " " + s.remote}>*/}
            {/*    <Title title={"I am available for remote work"}/>*/}
            {/*    <button>Offer</button>*/}
            {/*</div>*/}
            <div className={s.circle}>
                <div className={s.text}>
                    <h2>I am available for remote work</h2>
                </div>
            </div>
        </div>
    )
}

export default Remote;