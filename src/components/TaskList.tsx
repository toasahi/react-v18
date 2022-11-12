import {useDeferredValue} from 'react';
import type {Task} from "./Transition";

type Props = {
    taskList: Task[];
}

export const TaskList = ({taskList}: Props) => {
    const defferedTaskList = useDeferredValue(taskList);
    return (
        <>
            {defferedTaskList.map((task) => (
                <div key={task.id} style={{
                    width: '300px',
                    margin: 'auto',
                    background: 'white',
                    color: '#333',
                }}>
                    <p>タイトル : {task.title}</p>
                    <p>担当 : {task.assignee}</p>
                </div>
            ))}
        </>
    )
}
