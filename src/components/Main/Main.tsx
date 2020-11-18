import React from "react";
import s from "./Main.module.scss"
import MyPhoto from "../../assets/photo_Artem.jpg"
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const Particles = require('react-particles-js')
const Fade = require('react-reveal/Fade')

const particlesParams = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

const Main = () => {

    return (
        <Fade big>
            <div id='home' className={s.mainBlock}>
                <Particles parems={particlesParams} className={s.particles}/>
                <div className={s.mainContainer}>
                    <div className={s.text}>
                        <span>Hi There</span>
                        <span>I am Artem <span className={s.lastName}> Pavlenko</span></span>
                        {/*<h1>Frontend Developer.</h1>*/}
                        <div><ReactTypingEffect text={'Frontend Developer.'} /></div>
                    </div>
                        <div className={s.photo}>
                            <div>
                                <Tilt>
                                    <img src={MyPhoto} alt=""/>
                                </Tilt>
                            </div>
                        </div>

                </div>
            </div>
        </Fade>
    )
}

export default Main;