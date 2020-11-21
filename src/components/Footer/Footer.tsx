import React from "react";
import s from "./Footer.module.scss";
import instagram from "../../assets/instagram.svg"
import facebook from "../../assets/facebook.svg"
import gmail from "../../assets/gmail.svg"
import SocialLink from "./SocialLink/SocilaLink";
import {BrowserRouter, Link} from "react-router-dom";
// @ts-ignore
import cv from "../../assets/CV/CV_Artem_Pavlenko.pdf"

const Fade = require('react-reveal/Fade')
const Slide = require('react-reveal/Slide')



const Footer = () => {
    return (
        <BrowserRouter>
        <Fade>
            <div className={s.footerBlock}>
                <div className={s.footerContainer}>
                    <a href="#">
                        <h2>Artem Pavlenko</h2>
                    </a>
                    <div>
                        <Link to={require('../../assets/CV/CV_Artem_Pavlenko.pdf')} target={'_blank'} download>download CV</Link>
                    </div>
                    <div className={s.socialNet}>
                        <SocialLink href={"https://www.instagram.com/artem_ww/"} imgSrc={instagram}/>
                        <SocialLink href={"https://www.facebook.com/pavel.tcs/"} imgSrc={facebook}/>
                        <SocialLink href={"mailto: artemdevakk@gmail.com"} imgSrc={gmail}/>
                    </div>
                    <span>All rights reserved</span>
                </div>
            </div>
        </Fade>
        </BrowserRouter>
    )
}

export default Footer;