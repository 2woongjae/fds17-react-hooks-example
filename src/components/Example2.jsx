import { useState } from "react";

export default function Example2() {
    const [count, setCount] = useState(0);
    // const [name, setName] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        // setState => 두번째 배열 요소
        setCount(count + 1);
    }
}

// {a, b} => 이름 변경이 어렵다
// [a, b] => 이름이 자유롭다.