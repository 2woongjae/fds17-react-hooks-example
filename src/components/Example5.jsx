import { useEffect, useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Example5() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Mark');

    const width = useWindowWidth();

    useEffect(() => {
       console.log('componentDidMount & componentDidUpdate');  
       
       return () => {
           console.log('clean up');
       }
    }); // 시점을 지정하지 않으면, 무조건 랜더 된 직후를 의미

    useEffect(() => {
        console.log('componentDidMount');
        
        return () => {
            console.log('componentWillUnmount');
        }; // 함수를 반환하면, 해당 함수는 다음 랜더를 하기 전에 실행한다.
    }, []); // 시점이 빈 배열이면 최초에 랜더 된 직후를 의미

    useEffect(() => {
        console.log('[name]');
        
        return () => {
            console.log('[name] - cleanup');
        };
    }, [name]); // 시점이 배열 안의 값이 변경되어 랜더된 직후

    useEffect(() => {
        console.log('[count]', count);
        
        return () => {
            console.log('[count] - cleanup', count);
        };
    }, [count]); // 시점이 배열 안의 값이 변경되어 랜더된 직후

    return (
        <div>
            <h2>{name} - {width}</h2>
            <p>You clicked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
    );

    function click() {
        setCount(count + 1);
    }
}