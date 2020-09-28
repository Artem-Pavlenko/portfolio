import React from "react";
import common from "../../common/styles/Container.module.css";
import s from "./Remote.module.css";

const Remote = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={common.container + " " + s.remote}>
                <h3>Considering options for remote work</h3>
                <button >Offer</button>
            </div>
        </div>
    )
}

export default Remote;