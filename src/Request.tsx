import React, {useEffect, useState} from "react";
import {requestAPI} from "./homework-api";
import {MyCheckbox} from "./common/MyCheckbox";


export function Request() {
    let [success,setSuccess]= useState(false)
    let [responce,setResponce]= useState("")
    useEffect(()=>{requestAPI.postData(true).then(res=>console.log(res.data.info))},[])

    return <div>
        <MyCheckbox text={"Request body"} checked={success} onClick={(value)=>setSuccess(value)}/>
        {responce}
    </div>

}