import axios from "axios"


const instance = axios.create({
        baseURL: 'https://node-js-smtp-server.herokuapp.com/'
    })

export const sendMess = (name: string, email: string, text: string) => {
    instance.post('sendMessage', {name, email, text})
        .then( () => {
            alert('message send')
            console.log(instance)
        })
        .catch( (e) => console.log(e.message))
}