import React, {useCallback, useState} from 'react';
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
import {Select} from "./common/Select";
import {Radio} from "./common/Radio";
import {ReducersTask} from "./ReducersTask";
import {DateTask} from "./DateTask";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {Preloader} from "./common/Preloader";
import {Range} from "./common/Range";

function App() {
    let [value, setValue] = useState<string>("Editable span example")
    let [checked, setChecked] = useState<boolean>(true)
    const setSpanValue = (value: string) => setValue(value)
    const onChangeCheckbox = (checked: boolean) => setChecked(checked)
    const onChange = (e: string) => setValue(e)
    const onEnterPress = (e: string) => {
        alert(e)
        setValue("")
    }
    const onClick = () => alert("done")


    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    const options = ["1 year", "4 year", "12 year", "15 year", "16 year", "20 year"]
    let [selected, setSelected] = useState<string>("Select please...")
    const onChangeSelect = (selectedValue: string) => setSelected(selectedValue)
    let radioState: Array<string> = ["Trainee", "Junior", "Middle", "Senior"]

    let [radioValue, setRadioValue] = useState<string>(" ")
    const onRadioChange = (newRadioValue: string) => setRadioValue(newRadioValue)


    let loading = useSelector<AppRootStateType, boolean>(state => state.juniorPage.loading)
    let dispatch = useDispatch()
    const setLoading = () => {
        dispatch({type: "SET_LOADING", loading: true})
        setTimeout(() => dispatch({type: "SET_LOADING", loading: false}), 3000)
    }

    let [rangeValue, setRangeValue] = useState<number>(0)
    const onRangeChange = useCallback((value:number)=>setRangeValue(value),[setRangeValue])
    return (
        <HashRouter>
            <Menu/>
            <div className="App">
                <Switch>
                    <Route path="/preJunior/" render={() => (<>
                        <h2>Task 1</h2>
                        <MessageList/>
                        <h2>Task 2</h2>
                        <TaskList/>
                        <h2>Task 3</h2>
                        <Input/>
                        <h2>Task 4</h2>
                        <MyInput error={false} value={value} onChange={onChange} placeholder={"Name"}
                                 onEnterPress={onEnterPress}/>
                        <MyCheckbox onClick={onChangeCheckbox} checked={checked} text={"Custom checkbox"}/>
                        <MyButton disabled={false} text={"Send"} onClick={onClick}/>
                    </>)}/>
                    {!loading ? <Route path="/Junior/" render={() => (<>
                            <h2>Task 6</h2>
                            <EditableSpan onChange={setSpanValue} value={value}/>
                            <div style={{display: "flex"}}>
                                <MyButton onClick={() => saveState<string>("spanValue", value)} text={"Save state"}/>
                                <MyButton onClick={() => {
                                    setValue(restoreState<string>("spanValue", value))
                                }} text={"Restore state"}/>
                            </div>
                            <h2>Task 7</h2>
                            <div><Select options={options} size={1} value={selected} onChange={onChangeSelect}/></div>
                            <Radio name={"Health"} radio={radioState} onChange={onRadioChange}/>
                            Current radio value:<b>{radioValue}</b>
                            <h2>Task 8</h2>
                            <ReducersTask/>
                            <h2>Task 9</h2>
                            <DateTask/>
                            <h2>Task 10</h2>
                            <MyButton onClick={setLoading} text={"Start loading..."}/>
                            <h2>Task 11</h2>
                            <Range rangeValue={rangeValue} onChange={onRangeChange} text={"Value"} step={1} maxValue={50} minValue={0}/>
                        </>)}/> :
                        <Preloader/>}
                    <Route path="/Junior+/" render={() => (<h1>Will be soon...</h1>)}/>
                </Switch>
            </div>
        </HashRouter>
    );
}


export default App;
