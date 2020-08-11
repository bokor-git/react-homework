import React, {useState} from "react";
import {v1} from 'uuid';
import {Button} from "../../common/Button/Button";
import {Input} from "../../common/Input/Input";

type namesType = { id: string, name: string }

export function InputTask() {
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
    const onChange = (value: string) => setNewMessageTitle(value)
    return <div className="group">
        <Input error={false} onChange={onChange} onEnterPress={addNewMassage}
                   value={newMessageTitle}
                   placeholder="Enter your name"/>
        <Button onClick={addNewMassage} text={"SEND"}/>
        {names.map(n => <div key={n.id}>{n.name}</div>)}
    </div>
}
