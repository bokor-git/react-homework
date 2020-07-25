import React, {useState} from "react";
import {MyInput} from "./MyInput";

type EditableSpanType = {
    onChange: (value:string)=>void
    value:string
}

export function EditableSpan({onChange, value}:EditableSpanType) {
    let [editMode, setEditMode]= useState<boolean>(false)
    
return <div>
    {editMode?<MyInput  onBlur={()=>{setEditMode(false)}} onChange={onChange} error={false} value={value} placeholder={"Please set the value"}/>:
        <span onDoubleClick={()=>setEditMode(true)}>{value}</span>}

</div>
}