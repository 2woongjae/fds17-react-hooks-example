import { useState } from "react";

// state = {count: 0}
export default function Example3() {
    const [state, setState] = useState({count: 0});

    return (
        <div>
            <p>You clicked {state.count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        // setState => 두번째 배열 요소
        // setState({count: state.count + 1});
        setState(({count}) => ({count: count + 1}));
    }
}