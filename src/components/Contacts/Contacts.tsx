import React from "react";
import common from "../../common/styles/Container.module.css";
import s from "./Contacts.module.css";
import Title from "../../common/common components/Title";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={common.container + " " + s.contactsContainer}>
                <form action="">
                    <Title title={"contacts"}/>
                    <div className={s.fields}>
                        <input type="text" placeholder={"Name"}/>
                        <input type="text" placeholder={"email"}/>
                        <textarea placeholder={"message"}/>
                    </div>
                    <input type="submit" value="send"/>
                </form>
            </div>
        </div>
    )
}

export default Contacts;