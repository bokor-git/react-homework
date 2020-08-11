import React, {useState} from "react";
import {Select} from "../../common/Select/Select";
import {Radio} from "../../common/Radio/Radio";

export function CustomComponents2() {
    const options = ["1 year", "4 year", "12 year", "15 year", "16 year", "20 year"]
    let [selected, setSelected] = useState<string>("Select please...")
    const onChangeSelect = (selectedValue: string) => setSelected(selectedValue)
    let radioState: Array<string> = ["Trainee", "Junior", "Middle", "Senior"]

    let [radioValue, setRadioValue] = useState<string>(" ")
    const onRadioChange = (newRadioValue: string) => setRadioValue(newRadioValue)


    return <div>
        <div><Select options={options} size={1} value={selected} onChange={onChangeSelect}/></div>
        <Radio name={"Health"} radio={radioState} onChange={onRadioChange}/>
        Current radio value:<b>{radioValue}</b>
    </div>
}