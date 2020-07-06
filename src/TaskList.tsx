import React, {useState} from "react";
import style from "./Messenger.module.css"

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
        <button onClick={() => hightPriorityTask()}>hight</button>
        <button onClick={() => middlePriorityTask()}>middle</button>
        <button onClick={() => lowPriorityTask()}>low</button>
        <button onClick={() => allTask()}>all</button>
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