import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {MessageList} from "./Messenger";
import {TaskList} from "./TaskList";
import {Input} from "./Input";
import {MyInput} from "./common/MyInput";
import {MyButton} from "./common/MyButton";

function App() {
    let [value, setValue] = useState<string>("")
    const onChange = (e: string) => setValue(e)
    const onEnterPress = (e: string) => {
        alert(e)
        setValue("")
    }
    const onClick =()=> alert("done")
    return (
        <div className="App">
            {/*<MessageList/>*/}
            {/*<TaskList/>*/}
            {/*<Input/>*/}
            <MyInput error={false} value={value} onChange={onChange} placeholder={"Name"} onEnterPress={onEnterPress}/>
            {/*<div>{value?.toUpperCase().split("").reverse()}</div>*/}
            <MyButton disabled={false} text={"Send"} onClick={onClick}/>
        </div>
    );
}

export default App;
