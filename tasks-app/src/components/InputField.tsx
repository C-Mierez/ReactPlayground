import React, { useState } from "react";
import "./styles.css";

export interface InputFieldProps {
    taskValue: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: (e: React.FormEvent) => void;
}

export const InputField = ({
    taskValue,
    setTask,
    onSubmit,
}: InputFieldProps) => {
    const [pressed, setPressed] = useState(false);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onSubmit(e);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const buttonClass = pressed ? "pressed" : "unpressed";
    const buttonContent = pressed ? "Loading" : "Submit";

    return (
        <div className="input_row">
            <input
                className="inputBox"
                type="input"
                placeholder="Input a task"
                value={taskValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            ></input>
            <button className={`submit ${buttonClass}`} onClick={onSubmit}>
                {buttonContent}
            </button>
        </div>
    );
};

export default InputField;
