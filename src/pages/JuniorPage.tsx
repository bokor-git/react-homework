import React, {useCallback, useState} from "react";
import {Menu} from "../tasks/task5/Menu";
import {ReducersTask} from "../tasks/task8/ReducersTask";
import {DateTask} from "../tasks/task9/DateTask";
import {CustomComponents2} from "../tasks/task7/CustomComponents2";
import {LocalStorageEditableSpan} from "../tasks/task6/LocalStorageEditableSpan";
import {SetLoadingTask} from "../tasks/task10/SetLoadingTask";
import {RangeTask} from "../tasks/task11/RangeTask";

export function JuniorPage() {
    return <div>
        <Menu/>
        <h2>Task 6</h2>
        <LocalStorageEditableSpan/>
        <h2>Task 7</h2>
        <CustomComponents2/>
        <h2>Task 8</h2>
        <ReducersTask/>
        <h2>Task 9</h2>
        <DateTask/>
        <h2>Task 10</h2>
        <SetLoadingTask/>
        <h2>Task 11</h2>
        <RangeTask/>
    </div>
}

