import React from "react";
import common from "../../common/styles/Container.module.scss";
import s from "./Footer.module.scss";
import Title from "../../common/common components/Title";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={common.container + " " + s.footerContainer}>
                <Title title={"artem pavlenko"} />
                <div className={s.socialNet}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVT-w0qxyF46Gdm7wSGv8V5AUnQXqlEJAVvg&usqp=CAU"
                        alt=""/>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0VGitBs27gmbxRk_ymRIv77mbFlN6Ze50tA&usqp=CAU"
                        alt=""/>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4-EWd7IGFvQrXf4ss_lQcPQQDnnC1oE27vA&usqp=CAU"
                        alt=""/>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQz7QCTVmiOtH4PAfpNQKWUOHCXEfdzK1vxQQ&usqp=CAU"
                        alt=""/>
                </div>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer;