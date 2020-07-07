import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {MessageList} from "./Messenger";
import {TaskList} from "./TaskList";
import {Input} from "./Input";
import {MyInput} from "./common/MyInput";

function App() {
    let [value, setValue] = useState<string>("")
    const onChange = (e: string) => setValue(e)
    const onEnterPress = (e: string) => alert(e)
    return (
        <div className="App">
            {/*<MessageList/>*/}
            {/*<TaskList/>*/}
            {/*<Input/>*/}
            <MyInput error={true} value={value} onChange={onChange} onEnterPress={onEnterPress}/>
            <div>{value?.toUpperCase().split("").reverse()}</div>
        </div>
    );
}

export default App;
