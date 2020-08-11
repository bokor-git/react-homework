import React from "react";

type RadioProps = {
    radio: Array<string>
    onChange:(newRadioValue:string)=>void
    name:string
}

export function Radio({radio,onChange, name}:RadioProps) {
    const onRadioChange = (newRadioValue:string)=>onChange(newRadioValue)
    return <div>
        {radio.map(r=><p style={{display:"flex"}}>
            <input onChange={(event)=>onRadioChange(event.currentTarget.value)}
                   type="radio" name={name}
                   value={r}/>{r}</p>)
        }
    </div>



}
