import React, {useState} from "react";
import style from "./Messenger.module.css"
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input";
import moment from "moment";


export function MessageList() {

    let initState = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        }
    ]

    type MessageType = { title: string, date: string, photo: string, name: string }
    let [message, setMessage] = useState<Array<MessageType>>(initState)
    let [newMessageTitle, setNewMessageTitle] = useState<string>("")

    const addNewMassage = () => {
        let newMessage = {
            title: newMessageTitle,
            date: moment().format('h:mm:ss a'),
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        }
        setMessage([...message, newMessage])
        setNewMessageTitle("")
    }

    return <div className={style.message_list}>
        {message.map((m) => <MassageItem message={m}/>)}
        <div className={style.new_message}>
            <Input onChange={setNewMessageTitle} onEnterPress={addNewMassage} error={false}
                   value={newMessageTitle}
                   placeholder="Enter your message"/>
            <Button text={"Send"} disabled={false}  onClick={addNewMassage}/>
        </div>
    </div>
}

type MessageItemPropsType = {
    message: { title: string, date: string, photo: string, name: string }
}

function MassageItem({message}: MessageItemPropsType) {
    return (<div className={style.message_container}>
        <div className={style.message_item}>
            <div className={style.name}>{message.name}</div>
            <div className={style.title}>{message.title}</div>
            <div className={style.message_date}>{message.date}</div>
        </div>
        <img className={style.user_photo} src={message.photo}/>
    </div>)
}