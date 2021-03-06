import React, {useState} from "react";
import {requestAPI} from "./homework-api";
import {Checkbox} from "../../common/Checkbox/Checkbox";
import {Button} from "../../common/Button/Button";


export function Request() {
    let [success, setSuccess] = useState<boolean>(false)
    let [response, setResponse] = useState("")

    const sendRequest = () => {
        requestAPI.postData(success)
            .then(res => setResponse(res.data.info))
            .catch(err => setResponse(err.response.data.info))
    }
    return <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Checkbox text={"Payload true/false"} checked={success} onClick={(value) => setSuccess(value)}/>
        <Button onClick={sendRequest} text={"Send Request"}/>
        <div><b>Response:</b></div>
        <div>{response}</div>
    </div>
}

