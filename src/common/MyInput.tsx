import React, {ChangeEvent} from "react";

type MyInputType = {
    onChange: (e:string) =>void
    onEnterPress:(e:string)=>void
    error:boolean
    value:string
}

export function MyInput({onChange,onEnterPress, value, error}: MyInputType) {
    const enterEvent = (e: any) => {
        if (e.charCode === 13) {
            onEnterPress((e.currentTarget.value))
        }
    }
    return <div >
        <input style={error?{color:"red"}:{}} value={value} onKeyPress={enterEvent} type="text" onChange={(e => onChange(e.currentTarget.value))}/>
    </div>
}

