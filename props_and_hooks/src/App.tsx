import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Field } from "./components/Field";

function App() {
    return (
        <div className="App">
            <Field
                text="Hi"
                fn={(foo) => {
                    console.log(foo);
                }}
            />
            <br />
            <Counter>
                {(count, setCount) => (
                    <div>
                        {count}
                        <br />
                        <button onClick={() => setCount(count + 1)}></button>
                    </div>
                )}
            </Counter>
        </div>
    );
}

export default App;
