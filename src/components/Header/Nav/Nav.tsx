import React from "react";
import s from "./Nav.module.scss"
import {Link, animateScroll as scroll} from "react-scroll";


const Nav = () => {
    return (
        <div className={s.nav}>
            <Link
                to={'home'}
                activeClass={s.active}
                spy={true}
                smooth={true}
                duration={500}>Home</Link>
            <Link to={'skills'}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}>Skills</Link>
            <Link to={'projects'}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}>Projects</Link>
            <Link to={'contacts'}
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}>Contacts</Link>
        </div>
    )
}

export default Nav;