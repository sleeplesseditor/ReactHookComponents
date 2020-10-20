import React, { useState } from 'react';
import usePrevious from '../../../components/Hooks/Performance/usePrevious/usePrevious';
import '../../page-structure.scss';
import './usePreviousPage.scss';

const UseResizePage = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div className="page-container">
            <h2 className="page-continer-heading">usePrevious Hook</h2>
            <div className="page-container-content">
                <h3>
                    Now: {count}
                    <br />
                    Before: {prevCount}
                </h3>
                <button className="count-button" onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default UseResizePage;