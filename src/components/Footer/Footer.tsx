import React from "react";
import s from "./Footer.module.scss";
import instagram from "../../assets/instagram.svg"
import facebook from "../../assets/facebook.svg"
import gmail from "../../assets/gmail.svg"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <a href="#">
                    <h2>Artem Pavlenko</h2>
                </a>
                <div className={s.socialNet}>
                    <a href="https://www.instagram.com/artem_ww/">
                        <img src={instagram} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/pavel.tcs/">
                        <img src={facebook} alt=""/>
                    </a>
                    <a href="mailto: artemdevakk@gmail.com">
                        <img src={gmail} alt=""/>
                    </a>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;