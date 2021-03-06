import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.amount };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
    };
};

export default function ReducerExample() {
    // dispatch to tradycyjna nazwa na funkcję zwracaną przez useReducer()
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment", amount: 1 })}>Add 1</button>
            <button onClick={() => dispatch({ type: "increment", amount: 5 })}>Add 5</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Substract 1</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
};