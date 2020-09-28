import React from "react";
import common from "../../common/styles/Container.module.css";
import s from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={common.container + " " + s.contactsContainer}>
                <form action="">
                    <h2>Contacts</h2>
                    <div className={s.fields}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    </div>
                    <input type="submit" value="send"/>
                </form>
            </div>
        </div>
    )
}

export default Contacts;