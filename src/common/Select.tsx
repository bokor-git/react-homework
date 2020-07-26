import React from "react";

type SelectProps = {
    options: Array<string>
    size: number
    value:string
    onChange:(value:string)=>void
}


export function Select({options, size, value, onChange}: SelectProps) {
const onSelectChange = (value:string)=>onChange(value)
    return <select style={{width:"200px",height:"30px", fontSize:"16px"}} placeholder={"Choose"} size={size} value={value} onChange={(event)=>onSelectChange(event.currentTarget.value)}>
        <option value={value} hidden>{value}</option>
        {options.map(opt => <option value={opt}>{opt}</option>)}
    </select>

}
