import React, { useState, useMemo, useEffect } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
import useTitle from './useTitle';
import useCounter from './useCounter';

function Child() {
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [t, setT] = useState(0);

    const dataCounter = useCounter();
    console.log(dataCounter,"dataCounter");

    useTitle(t);

    function counter() {
        setI(i + 1);
    }

    function counter2() {
        setJ(j + 1);
    }

    const MemoInfo = useMemo(function info() {
        console.log('info just');
        return 'just info';
    }, [j]);


    const MemoChildA = useMemo(() => {
        return <ChildA></ChildA>
    }, [i])

    return (
        <div>
            {/* Custom Hooks example 1 */}
            {dataCounter.counter}
            <br />
            <button onClick={dataCounter.handleCounter}>Custom Hooks Counter</button>
            <p>**************</p>


            {/* Custom Hooks example 2 */}
            <button onClick={() => setT(t + 1)}> Custom Hooks Increase title counter</button>
            <p>**************</p>

            Child Main
            <br />
            I:{i}


            <button onClick={counter}>increment</button>
            <p>**************</p>
            <button onClick={counter2}>increment</button>
            <p>**************</p>


            <ChildA />
            <p>**************</p>
            <ChildB />

            <p>**************</p>
            <br />

            {/* useMemo Hooks example 1 */}
            <p>**************</p>
            <h3>Memo Child</h3>
            <p>**************</p>
            {MemoChildA}


            {/* useMemo Hooks example 2 */}
            <p>**************</p>
            <br />
            {MemoInfo}
        </div>
    )
}

export default Child;
