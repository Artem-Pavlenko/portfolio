import React from "react";
import s from "./Remote.module.scss";

const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.circle}>
                <div className={s.text}>
                    <h2>I'm available for <br/>remote work</h2>
                </div>
                <div className={s.email}>
                    <h3><a href="mailto: rozen19942810@gmail.com">rozen19942810@gmail.com</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Remote;