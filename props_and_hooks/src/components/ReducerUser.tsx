import { useReducer } from "react";

export type Actions =
    | { type: "add"; text: string }
    | { type: "remove"; idx: number };

export interface Todo {
    text: string;
    completed: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { text: action.text, completed: false }];
        case "remove":
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;
    }
};

export const ReducerUser = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
            {JSON.stringify(state)}
            <button
                onClick={() => {
                    dispatch({ type: "add", text: "..." });
                }}
            ></button>
        </div>
    );
};
