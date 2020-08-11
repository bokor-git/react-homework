import React from "react";
import {Menu} from "../tasks/task5/Menu";
import {MessageList} from "../tasks/task1/Messenger";
import {TaskList} from "../tasks/task2/TaskList";
import {InputTask} from "../tasks/task3/InputTask";
import {CustomComponents} from "../tasks/task4/CustomComponents";

export function PreJuniorPage() {
    return <div>
        <Menu/>
        <h2>Task 1</h2>
        <MessageList/>
        <h2>Task 2</h2>
        <TaskList/>
        <h2>Task 3</h2>
        <InputTask/>
        <h2>Task 4</h2>
        <CustomComponents/>
    </div>
}

