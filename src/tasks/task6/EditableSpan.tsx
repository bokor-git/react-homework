import React, {useState} from "react";
import {Input} from "../../common/Input/Input";

type EditableSpanType = {
    onChange: (value:string)=>void
    value:string
}

export function EditableSpan({onChange, value}:EditableSpanType) {
    let [editMode, setEditMode]= useState<boolean>(false)
    
return <div>
    {editMode?<Input onBlur={()=>{setEditMode(false)}} onChange={onChange} error={false} value={value} placeholder={"Please set the value"}/>:
        <span onDoubleClick={()=>setEditMode(true)}>{value}</span>}

</div>
}