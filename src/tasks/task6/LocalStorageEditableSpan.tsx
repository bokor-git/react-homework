import React, {useState} from "react";
import {EditableSpan} from "./EditableSpan";
import {Button} from "../../common/Button/Button";

export function LocalStorageEditableSpan() {
    let [value, setValue] = useState<string>("JuniorPage example value")
    const setSpanValue = (value: string) => setValue(value)

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    return <div>
        <EditableSpan onChange={setSpanValue} value={value}/>
        <div style={{display: "flex"}}>
            <Button onClick={() => saveState<string>("spanValue", value)} text={"Save state"}/>
            <Button onClick={() => {
                setValue(restoreState<string>("spanValue", value))
            }} text={"Restore state"}/>
        </div>
    </div>

}