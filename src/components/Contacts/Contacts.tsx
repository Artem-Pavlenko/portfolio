import React from "react";
import s from "./Contacts.module.scss";
import Title from "../../common/common components/Title/Title";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
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