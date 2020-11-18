import React, {useRef} from "react";
import s from "./Contacts.module.scss";
import Title from "../../common/common components/Title/Title";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {sendMess} from "../../features/sendMess";


const Fade = require('react-reveal/Fade')


type FormType = {
    name: string
    "your email": string
    text: string
}

const Contacts = () => {

    const inRef = useRef<HTMLInputElement>(null)

    const schemaLogin = yup.object().shape({
        "your email": yup.string().required().email(),
        name: yup.string().required().min(1)
    })
    const {register, handleSubmit, reset, errors} = useForm<FormType>({
        resolver: yupResolver(schemaLogin)
    })

    const onSubmit = (data: FormType) => {
        reset()
        sendMess(data.name, data["your email"], data.text)
    }
    errors["your email"] && console.log(errors)

    return (
        <Fade>
            <div id='contacts' className={s.contactsBlock}>
                <div className={s.contactsContainer}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <Title title={"contacts"}/>
                        <div className={s.fields}>
                            <input name="name" ref={register({required: true})} type="text" placeholder={"Name"}/>
                            {errors.name && <span>{errors.name.message}</span>}
                            <input name="your email" ref={register({required: true})} type="text"
                                   placeholder={"Email"}/>
                            {errors["your email"] && <span>{errors["your email"].message}</span>}
                            <textarea name="text" ref={register({required: true})} placeholder={"Message"}/>
                        </div>
                        <input ref={inRef} type="submit" value="send"/>
                        <a onClick={() => inRef && inRef.current && inRef.current.click()}>send</a>
                    </form>
                </div>
            </div>
        </Fade>
    )
}

export default Contacts;