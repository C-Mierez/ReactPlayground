import { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../models/Task";
import "./styles.css";
import { TaskItem } from "./TaskItem";

export interface TaskListProps {
    tasks: Array<Task>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TaskList = ({ tasks, setTasks }: TaskListProps) => {
    const [doneTasks, setDoneTasks] = useState<Array<Task>>([]);

    useEffect(() => {
        setDoneTasks((doneT) => tasks.filter((task) => task.isDone));
    }, [tasks]);

    return (
        <>
            <Droppable droppableId="task_list">
                {(provided) => (
                    <div
                        className="task_list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) =>
                            !task.isDone ? (
                                <TaskItem
                                    key={task.id.toString() + "main"}
                                    index={index}
                                    task={task}
                                    setTasks={setTasks}
                                    tasks={tasks}
                                ></TaskItem>
                            ) : (
                                <></>
                            )
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="done_tasks_list">
                {(provided) => (
                    <div
                        className="done_task_list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className="list_heading">Done Tasks</div>
                        {doneTasks.length > 0 ? (
                            doneTasks.map((task, index) => (
                                <TaskItem
                                    key={task.id.toString() + "main"}
                                    index={index}
                                    task={task}
                                    setTasks={setTasks}
                                    tasks={tasks}
                                ></TaskItem>
                            ))
                        ) : (
                            <div className="empty_task_list small-text">
                                <p>You haven't completed any tasks yet!</p>
                            </div>
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </>
    );
};
