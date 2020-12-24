import { useEffect, useState } from "react";
import withHasMounted from "../hocs/withHasMounted";
import useHasMounted from "../hooks/useHasMounted";
import useWindowWidth from "../hooks/useWindowWidth";

function Example6(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Mark');

    const width = useWindowWidth();
    const hasMounted = useHasMounted();

    console.log(props.hasMounted, hasMounted);

    return (
        <div>
            <h2>{name} - {width} - {props.hasMounted.toString()}</h2>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        setCount(count + 1);
    }
}

export default withHasMounted(Example6);