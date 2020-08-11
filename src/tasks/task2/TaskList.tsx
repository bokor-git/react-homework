import React, {useState} from "react";
import style from "../task1/Messenger.module.css"
import {Button} from "../../common/Button/Button";

type TaskType = { id: number, n: string, p: string }

export function TaskList() {

    let allTasks = [
        {id: 1, n: "работа", p: "hight"},
        {id: 2, n: "аниме", p: "low"},
        {id: 3, n: "игры", p: "middle"},
        {id: 4, n: "реакт", p: "hight"},
        {id: 5, n: "хтмл", p: "low"},
        {id: 6, n: "css", p: "low"},
        {id: 7, n: "js", p: "hight"},
    ]
    let [tasks, setTasks] = useState<Array<TaskType>>(allTasks)
    const deleteTask = (id: number) => {
        setTasks([...tasks.filter(t => t.id != id)])
        setFilteredTasks([...filteredTasks.filter(t => t.id != id)])
    }
    const hightPriorityTask = () => {
        setFilteredTasks(tasks.filter(t => t.p === "hight"))
    }
    const middlePriorityTask = () => {
        setFilteredTasks(tasks.filter(t => t.p === "middle"))
    }
    const lowPriorityTask = () => {
        setFilteredTasks(tasks.filter(t => t.p === "low"))
    }
    const allTask = () => {
        setFilteredTasks(tasks)
    }
    let [filteredTasks, setFilteredTasks] = useState<Array<TaskType>>(tasks)

    return <div>
        {filteredTasks?.map((t) => <TaskItem deleteTask={deleteTask} task={t}/>)}
        <div style={{display:"flex"}}>
            <Button onClick={hightPriorityTask} text={"hight"}/>
            <Button onClick={middlePriorityTask} text={"middle"}/>
            <Button onClick={lowPriorityTask} text={"low"}/>
            <Button onClick={allTask} text={"all"}/></div>

    </div>
}

type TaskItemProps = {
    task: TaskType
    deleteTask: (id: number) => void
}

function TaskItem({task, deleteTask}: TaskItemProps) {

    return <div key={task.id}>{task.n} - {task.p}
        <button onClick={() => deleteTask(task.id)}>X</button>
    </div>

}