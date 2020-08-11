import React, {useState} from "react";
import {Input} from "../../common/Input/Input";
import {Checkbox} from "../../common/Checkbox/Checkbox";
import {Button} from "../../common/Button/Button";

export function CustomComponents() {
    let [value, setValue] = useState<string>("pre-junior value example")
    let [checked, setChecked] = useState<boolean>(true)

    const onChangeCheckbox = (checked: boolean) => setChecked(checked)
    const onChange = (e: string) => setValue(e)
    const onEnterPress = (e: string) => {
        alert(e);
        setValue("")
    }
    const onClick = () => alert("done")
    return <div>
        <Input error={false} value={value} onChange={onChange} placeholder={"Name"}
               onEnterPress={onEnterPress}/>
        <Checkbox onClick={onChangeCheckbox} checked={checked} text={"Custom checkbox"}/>
        <Button disabled={false} text={"Send"} onClick={onClick}/>
    </div>

}