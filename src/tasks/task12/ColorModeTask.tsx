import {useDispatch} from "react-redux";
import {changeSiteModeAC} from "./pageModeReducer";
import {Radio} from "../../common/Radio/Radio";
import React from "react";

export function ColorModeTask() {
    const dispatch = useDispatch()
    let siteMode: Array<string> = ["Dark Mode", "White Mode"]
    const onSiteModeChange = (newRadioValue: string) => {
        if (newRadioValue === "Dark Mode") {
            dispatch(changeSiteModeAC(true))
        }
        if (newRadioValue === "White Mode") {
            dispatch(changeSiteModeAC(false))
        }
    }
    return <div>
        <h4>Please select mode:</h4>
        <Radio radio={siteMode} onChange={onSiteModeChange} name={"Set Dark Mode"}/>
    </div>
}