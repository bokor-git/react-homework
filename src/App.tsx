import React, {useState} from 'react';
import './App.css';
import {MessageList} from "./Messenger";
import {TaskList} from "./TaskList";
import {Input} from "./Input";
import {MyInput} from "./common/MyInput";
import {MyButton} from "./common/MyButton";
import {MyCheckbox} from "./common/MyCheckbox";
import {HashRouter, Route, Switch} from "react-router-dom";
import {Menu} from "./Menu";
import {EditableSpan} from "./common/EditableSpan";

function App() {
    let [value, setValue] = useState<string>("Editable span example")
    let [checked, setChecked] = useState<boolean>(true)
    const setSpanValue = (value:string)=>setValue(value)
    const onChangeCheckbox = (checked: boolean) => setChecked(checked)
    const onChange = (e: string) => setValue(e)
    const onEnterPress = (e: string) => {
        alert(e)
        setValue("")
    }
    const onClick = () => alert("done")


     function saveState<T> (key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

     function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }


    return (
        <HashRouter>
            <Menu/>
            <div className="App">
                <Switch>
                    <Route path="/preJunior/" render={() => (<>
                        <h1>Task 1</h1>
                        <MessageList/>
                        <h1>Task 2</h1>
                        <TaskList/>
                        <h1>Task 3</h1>
                        <Input/>
                        <h1>Task 4</h1>
                        <MyInput error={false} value={value} onChange={onChange} placeholder={"Name"}
                                 onEnterPress={onEnterPress}/>
                        <MyCheckbox onClick={onChangeCheckbox} checked={checked} text={"Custom checkbox"}/>
                        <MyButton disabled={false} text={"Send"} onClick={onClick}/>
                    </>)}/>
                    <Route path="/Junior/" render={() => (<>
                        <h1>Task 6</h1>
                        <EditableSpan onChange={setSpanValue} value={value}/>
                        <div style={{display:"flex"}}>
                            <MyButton onClick={()=>saveState<string>("spanValue",value)} text={"Save state"}/>
                            <MyButton onClick={()=>{setValue(restoreState<string>("spanValue",value))}} text={"Restore state"}/>
                        </div>
                        </>)}/>
                    <Route path="/Junior+/" render={() => (<h1>Will be soon...</h1>)}/>

                </Switch>
            </div>
        </HashRouter>
    );
}


export default App;
