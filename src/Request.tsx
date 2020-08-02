import React, {useState} from "react";
import {requestAPI} from "./homework-api";
import {MyCheckbox} from "./common/MyCheckbox";
import {MyButton} from "./common/MyButton";


export function Request() {
    let [success, setSuccess] = useState<boolean>(false)
    let [response, setResponse] = useState("")

    const sendRequest = () => {
        requestAPI.postData(success)
            .then(res => setResponse(res.data.info))
            .catch(err => setResponse(err.response.data.info))
    }
    return <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <MyCheckbox text={"Payload true/false"} checked={success} onClick={(value) => setSuccess(value)}/>
        <MyButton onClick={sendRequest} text={"Send Request"}/>
        <div><b>Response:</b></div>
        <div>{response}</div>
    </div>
}

