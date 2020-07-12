import React from "react";
import style from "./input.module.css"

type MyInputType = {
    onChange: (e:string) =>void
    onEnterPress:(e:string)=>void
    error:boolean
    value:string
    placeholder:string
}

export function MyInput({onChange,onEnterPress, value, error, placeholder}: MyInputType) {
    const enterEvent = (e: any) => {
        if (e.charCode === 13) {
            onEnterPress((e.currentTarget.value))
        }
    }
    return <div className={style.group}>
        <input  style={error?{color:"red"}:{}} value={value} onKeyPress={enterEvent} placeholder={placeholder} type="text" onChange={(e => onChange(e.currentTarget.value))}/>
        <span className={style.bar}></span>
    </div>


}

