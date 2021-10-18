import React, { useState, createContext} from 'react';
import Tree1 from '../Tree/Tree1';

export const CountContext = createContext(0);
const RootTree = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="root-tree">
            <CountContext.Provider value = {count}>
                <Tree1/>
                <h1>{count}</h1>
                <button className="btn" onClick={() => setCount(count + 1)}>Add</button>
            </CountContext.Provider>
             
        </div>
    );
};

export default RootTree;