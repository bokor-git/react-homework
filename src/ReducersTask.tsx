import {useReducer} from "react";
import {hwReducer} from "./homeWorkReducer";
import React from "react";
import {MyButton} from "./common/MyButton";


export function ReducersTask() {
    let [people, dispatchPeople] = useReducer(hwReducer, [
            {id: "1", name: "Bohdan", age: 24},
            {id: "2", name: "Anton", age: 25},
            {id: "3", name: "Dima", age: 29},
            {id: "4", name: "Oleg", age: 20},
            {id: "5", name: "Alex", age: 17},
            {id: "6", name: "Peter", age: 16},
            {id: "7", name: "Cesar", age: 24},
            {id: "8", name: "Zlatan", age: 18}
        ]
    )
    return <div>{people.map(p => <div key={p.id}>Name: <b>{p.name}</b> Age: <b>{p.age}</b></div>)}
        <div style={{display: "flex"}}>
            <MyButton text={"Sort A-Z"} onClick={() => dispatchPeople({type: 'SORT', payload: 'up'})}/>
            <MyButton text={"Sort Z-A"} onClick={() => dispatchPeople({type: 'SORT', payload: 'down'})}/>
            <MyButton text={"Check age"} onClick={() => dispatchPeople({type: 'CHECK', payload: 18})}/>
        </div>
    </div>
}