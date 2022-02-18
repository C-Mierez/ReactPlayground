import { ChangeEvent, useEffect, useRef, useState } from "react";

export interface FieldProps {
    text: string;
    i?: number;
    is?: boolean;
    fn: (foo: string) => void;
    obj?: {
        f1: string;
    };
    person?: Person;
}

interface Person {
    v1: string;
    v2: number;
}

// Another way of implementing this functionality as a Hook instead
// function useDidMount() {
//     const isMountRef = useRef(false);

//     useEffect(() => {
//         isMountRef.current = true;
//     }, []);

//     return () => isMountRef.current;
// }

export const Field = (props: FieldProps) => {
    const { fn, text } = props;

    // Test
    // const [person, setPerson] = useState<Person | undefined>({ v1: "", v2: 0 });
    // setPerson(undefined);

    const [input, setInput] = useState("");
    const [count, setCount] = useState<number>(0);

    const didMount2 = useRef(false);
    useEffect(() => {
        fn(input);
        console.log("Render!");

        if (didMount2.current) {
            setCount(input.length);
            console.log("Mounted!");
        } else {
            didMount2.current = true;
            console.log("Not mounted!");
        }
    }, [input]);

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input
                type="text"
                ref={inputRef}
                onChange={(e) => {
                    setInput(e.target.value ?? "Empty");
                }}
                value={input}
                placeholder={"Type something..."}
            />
            <div>{count}</div>
        </div>
    );
};
