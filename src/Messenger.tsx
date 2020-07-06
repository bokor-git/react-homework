import React, {useState} from "react";
import style from "./Messenger.module.css"

export function MessageList() {

    let initState = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam architecto",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        },
        {
            title: "consectetur cupiditate",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        },
        {
            title: "Lorem ipsum dolor sit amet",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        },
        {
            title: "Hello again",
            date: "12.06.2020",
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        }
    ]

    type MessageType = { title: string, date: string, photo: string, name: string }
    let [message, setMessage] = useState<Array<MessageType>>(initState)
    let [newMessageTitle, setNewMessageTitle] = useState<string>("")

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let date = dd + '.' + mm + '.' + yyyy;

    const addNewMassage = () => {
        let newMessage = {
            title: newMessageTitle,
            date: date,
            photo: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Artem"
        }
        const newMessages = [...message, newMessage]
        setMessage(newMessages)
        setNewMessageTitle("")
    }

    const onEnterPress = (e: any) => {
        if (e.charCode === 13) {
            addNewMassage()
        }
    }
    return <div className={style.message_list}>
        {message.map((m) => <MassageItem message={m}/>)}
        <div className={style.new_message}>
            <input onChange={e => setNewMessageTitle(e.currentTarget.value)} onKeyPress={onEnterPress} type="text"
                   value={newMessageTitle}
                   placeholder="Enter your message"/>
            <button className={style.send_button} onClick={addNewMassage}>SEND</button>
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