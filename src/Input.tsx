import React, {useState} from "react";
import {v1} from 'uuid';

type namesType = { id: string, name: string }

export function Input() {
    let initState: Array<namesType> = [
        {id: v1(), name: "Bohdan"},
        {id: v1(), name: "Roman"},
        {id: v1(), name: "Victor"}]
    let [names, setNames] = useState<Array<namesType>>(initState)
    let [newMessageTitle, setNewMessageTitle] = useState<string>("")
    const addNewMassage = () => {
        if (newMessageTitle.trim().length != 0) {
            setNames([...names, {id: v1(), name: newMessageTitle}])
            alert(`Hello ${newMessageTitle}!!!`)
            setNewMessageTitle("")
        }
    }
    const onEnterPress = (e: any) => {
        if (e.charCode === 13) {
            addNewMassage()
        }
    }
    return <div>
        <input onChange={e => setNewMessageTitle(e.currentTarget.value)} onKeyPress={onEnterPress} type="text"
               value={newMessageTitle}
               placeholder="Enter your name"/>
        <button onClick={addNewMassage}>SEND</button>
        {names.map(n => <div key={n.id}>{n.name}</div>)}
    </div>
}