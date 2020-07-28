import React, {useState} from "react";
import moment from "moment";
import {MyButton} from "./common/MyButton";
import "./App.css"

export function DateTask() {
    let [date, setDate] = useState(moment().format('h:mm:ss a'));
    const [timerId, setTimerId] = useState();

    const onClick = () => {
        clearInterval(timerId);
        const timer_id = setInterval(() => setDate(moment().format('h:mm:ss a')), 1000);
        setTimerId(timer_id);
    }

    return <div>
        <div className="date" data-title={moment().format('MMMM Do YYYY')}>{date}</div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <MyButton text={"Start"} onClick={onClick}/>
            <MyButton text={"Stop"} onClick={() => clearInterval(timerId)}/>
        </div>
    </div>
}
