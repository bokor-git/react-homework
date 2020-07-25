import React from "react";
import "./button.scss"

type MyButtonType = {
    onClick: () =>void
    text :string
    disabled?:boolean
}

export function MyButton({onClick, text, disabled}: MyButtonType) {
    return <div>
        <button disabled={disabled} className="btn paper paper-raise-flatten" onClick={onClick}>{text}</button>
    </div>


}

