import React, { useEffect, useRef, useState } from "react";
import { Task } from "../models/Task";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";

const StyledDiv = styled.div`
    display: flex;
`;

export interface TaskItemProps {
    task: Task;
    tasks: Array<Task>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    index: number;
}

export const TaskItem = ({ task, tasks, setTasks, index }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.taskValue);

    const textareaTaskContentEditRef = useRef<HTMLTextAreaElement>(null);

    const handleTaskDone = (e: React.MouseEvent) => {
        e.preventDefault();
        setTasks(
            tasks.map((t) =>
                t.id === task.id ? { ...t, isDone: !t.isDone } : t
            )
        );
    };
    const handleTaskDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        setTasks(tasks.filter((t) => t.id !== task.id));
    };

    const handleTaskEdit = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    const handleTaskConfirmEdit = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsEditing(!isEditing);
        setTasks(
            tasks.map((t) =>
                t.id === task.id ? { ...t, taskValue: editedText } : t
            )
        );
    };
    const handleTaskCancelEdit = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsEditing(!isEditing);
        setEditedText(task.taskValue);
    };
    const handleTaskContentChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        e.preventDefault();
        setEditedText(e.target.value);
    };

    useEffect(() => {
        setEditedText(task.taskValue);
    }, [task]);

    useEffect(() => {
        if (isEditing) {
            textareaTaskContentEditRef.current?.focus();
        }
    }, [isEditing]);

    return (
        <Draggable draggableId={task.id.toString()} index={index}>
            {(provided) => (
                <div
                    className="task_item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {!isEditing ? (
                        <div
                            className={`task_item_title ${
                                task.isDone ? "task_item_done" : ""
                            }`}
                        >
                            {task.taskValue}
                        </div>
                    ) : (
                        <textarea
                            className="task_item_edit"
                            ref={textareaTaskContentEditRef}
                            defaultValue={editedText}
                            onChange={handleTaskContentChange}
                        ></textarea>
                    )}
                    <div className="task_item_icon_row">
                        {task.isDone ? (
                            <></>
                        ) : isEditing ? (
                            <>
                                <span
                                    className="task_item_icon"
                                    onClick={handleTaskConfirmEdit}
                                >
                                    <DoneAllIcon fontSize="inherit" />
                                </span>
                                <span
                                    className="task_item_icon"
                                    onClick={handleTaskCancelEdit}
                                >
                                    <RestartAltIcon fontSize="inherit" />
                                </span>
                            </>
                        ) : (
                            <span
                                className="task_item_icon"
                                onClick={handleTaskEdit}
                            >
                                <EditIcon fontSize="inherit" />
                            </span>
                        )}
                        {isEditing ? (
                            <></>
                        ) : (
                            <span
                                className="task_item_icon"
                                onClick={handleTaskDone}
                            >
                                {!task.isDone ? (
                                    <CheckBoxOutlineBlankIcon fontSize="inherit" />
                                ) : (
                                    <CheckBoxIcon fontSize="inherit" />
                                )}
                            </span>
                        )}

                        <span
                            className="task_item_icon"
                            onClick={handleTaskDelete}
                        >
                            <DeleteForeverIcon fontSize="inherit" />
                        </span>
                    </div>
                </div>
            )}
        </Draggable>
    );
};
