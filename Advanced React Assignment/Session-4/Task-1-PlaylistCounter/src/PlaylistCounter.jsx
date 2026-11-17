import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "increment") {
        return state + 1;
    }

    if (action.type === "decrement") {
        return state - 1;
    }

    if (action.type === "reset") {
        return 0;
    }

    return state;
}

function PlaylistCounter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>Playlist Counter</h1>

            <h2>Songs: {count}</h2>

            <button onClick={() => dispatch({ type: "increment" })}>
                +
            </button>

            <button onClick={() => dispatch({ type: "decrement" })}>
                -
            </button>

            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
        </div>
    );
}

export default PlaylistCounter;