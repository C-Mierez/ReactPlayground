# ReactPlayground

Just a few React projects as I learn the framework

> Also first time with Js and Ts 😄

## Some React Hooks

Basic:

-   `useState(state) => [state, setState]` Handle reactive data. Provides the state and a setter function to modify it.
-   `useContext()` Fetch a value from a the Context Provider.
    -   Defined as `MyContext = createContext(value)`
    -   Used as `<MyContext.Provider value={myValue}>`
    -   Fetch as `myValue = useContext(MyContext)`
        -   Much cleaner to use a Consumer as `<MyContext.Consumer>{(myValue) => Func}`
-   `useEffect(function, statesList?)` Run the function when the DOM is updated.
    -   If no specific state is defined, it will run at `componentDidMount` and `componentDidUpdate`
    -   If `[]` is defined, it will only run at `componentDidMount`
    -   If `[dependency1, dependency2, ...]` are defined, it will run when these stateful variables change.
    -   For **deconstruction**, a function should be returned by the user-defined function sent as parameter.

Other:

-   `useReducer(reducer, iniState) => [state, dispatch]` Similar to _setState_ but it follows a different design pattern. (Redux)
    -   Dispatch _Actions_ that are handled by a _Reducer_ which then throws a next _State_.
    -   Actions are objects sent in `dispatch({type: string, payload: any})`
    -   Reducer is a function `reducer(state, action)` that computes the next state.
-   `useRef()` Create a mutable object with an immutable reference.
    -   Will not trigger a re-render when its value changes.
    -   Defined as `myValue = useRef(value)`
    -   Accessed as `myValue.current`
    -   Useful to reference object from the DOM.
-   `useMemo(Func, [dependencies])` Optimizes computation and thus performance. Should only be used for _really_ bad computation that indeed is hampering performance.
-   `useCallback()` Same as previous one but used for functions.
    -   Since functions are objects, using them on multiple places means creating a new one every time. To avoid this, the function can be declared using _useCallback_ instead.
-   `useLayoutEffect(Func)` Similar to _useEffect_ but it runs **after** rendering the component but **before** the painting is done.
    -   Useful when calculations need to be done before the screen is updated (and the screen should wait for this calculation to be over). For example, calculating a scroll position.

> ### 💡 Custom Hooks can be built as well!

## Some Lifecycle Events

-   `componentDidMount()` Component is initialized.
-   `componentDidUpdate()` Component's state is updated.
-   `componentWillUnmount()` Component is destroyed.
