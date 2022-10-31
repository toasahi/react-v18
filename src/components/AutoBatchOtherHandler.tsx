import {Fragment, useState} from "react";

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const AutoBatchOtherHandler = () => {
    console.log("AutoBatchOtherHandler");

    const [todos, setTodos] = useState<Todo[] | null>(null);
    const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
    const [state3, setState3] = useState<number>(0);

    const onClickExecuteApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => res.json())
            .then((data) => {
                setTodos(data);
                setIsFinishApi(true);
                setState3((state3) => state3 + 1);
            })
    }

    return (
        <div>
            <p>Automatic Batching確認用(その他)</p>
            <button onClick={onClickExecuteApi}>API実行!</button>
            <p>isFinishApi : {isFinishApi ? 'true' : 'false'}</p>
            {todos?.map((todo) => (
                <Fragment key={todo.id}>
                    <p>{todo.title}</p>
                </Fragment>
            ))}
        </div>
    )
}
