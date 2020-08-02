import {useDispatch} from "react-redux";
import {changeSiteModeAC} from "./pageModeReducer";
import {Menu} from "./Menu";
import {Radio} from "./common/Radio";
import React from "react";
import {Request} from "./Request";

export function JuniorPage() {
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
    return <>
        <Menu/>
        <h2>Task 12</h2>
        <h4>Please select mode:</h4>
        <Radio radio={siteMode} onChange={onSiteModeChange} name={"Set Dark Mode"}/>
        <h2>Task 13</h2>
        <Request/>
    </>

}