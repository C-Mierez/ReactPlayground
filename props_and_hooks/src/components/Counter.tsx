import { useState } from "react";

export interface CounterProps {
    children: (
        count: number,
        setCount: React.Dispatch<React.SetStateAction<number>>
    ) => JSX.Element | null;
}

export const Counter = ({ children }: CounterProps) => {
    const [count, setCount] = useState(0);

    return <div>{children(count, setCount)}</div>;
};
