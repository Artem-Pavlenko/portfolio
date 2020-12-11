import React from "react";
import s from "./Remote.module.scss";
import {Fade} from "react-awesome-reveal";
import {BrowserRouter, Link} from "react-router-dom";
import cvIcon from "../../assets/CV/cv.svg"


const Remote = () => {
    return (
        <BrowserRouter>
            <Fade>
                <div className={s.remoteBlock}>
                    <div className={s.circle}>
                        <div className={s.text}>
                            <h2>I'm available for <br/>remote work</h2>
                        </div>
                        <div className={s.email}>
                            <h3><a href="mailto: artemdevakk@gmail.com">ArtemDevAkk@gmail.com</a></h3>
                            <h4>Tel: +380995202588</h4>
                            <div className={s.cv}>
                                <Link to={require('../../assets/CV/CV_Artem_Pavlenko.pdf')} target={'_blank'} download>
                                    <img src={cvIcon} alt="cv"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </BrowserRouter>
    )
}

export default Remote;