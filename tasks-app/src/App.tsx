import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { TaskList } from "./components/TaskList";
import { Task } from "./models/Task";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
    const [taskValue, setTask] = useState("");
    const [tasks, setTasks] = useState<Array<Task>>([]);
    const [counter, setCounter] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskValue) {
            setTasks([
                { id: counter, taskValue: taskValue, isDone: false },
                ...tasks,
            ]);
            setTask("");
            setCounter(counter + 1);
        }
    };

    useEffect(() => {}, [taskValue]);

    const DraggableOnDragEnd = (r: DropResult) => {
        if (
            !r.destination ||
            (r.destination.droppableId === r.source.droppableId &&
                r.destination.index === r.source.index)
        )
            return;

        if (r.destination.droppableId !== r.source.droppableId) {
            const taskToMove = {
                ...tasks[r.source.index],
                isDone: !tasks[r.source.index].isDone,
            };
            let newTasks = tasks.map((t) => {
                return t;
            });
            newTasks.splice(r.source.index, 1, taskToMove);
            setTasks(newTasks);
        }
    };

    return (
        <DragDropContext onDragEnd={DraggableOnDragEnd}>
            <div className="App">
                <span className="heading">Taskr</span>
                <InputField
                    taskValue={taskValue}
                    setTask={setTask}
                    onSubmit={handleSubmit}
                />
                <form className="main_form" onSubmit={handleSubmit}>
                    {tasks.length > 0 ? (
                        <>
                            <TaskList
                                tasks={tasks}
                                setTasks={setTasks}
                            ></TaskList>
                            {tasks.length < 4 ? (
                                <div className="empty_task_list">
                                    <p>Great! How about a few more?</p>
                                    <StickyNote2Icon fontSize="inherit" />
                                </div>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <div className="empty_task_list">
                            <p>Your task list is empty!</p>
                            <StickyNote2Icon fontSize="inherit" />
                        </div>
                    )}
                </form>
            </div>
        </DragDropContext>
    );
}

export default App;
