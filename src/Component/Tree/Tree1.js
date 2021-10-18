import React from 'react';
import Tree2 from './Tree2';
import { useContext } from 'react';
import { CountContext } from '../RootTree/RootTree';

const Tree1 = () => {
    const count = useContext(CountContext)
    return (
        <div className="tree-1">
            <Tree2/>
            <h1 className="text-center">{count}</h1>
        </div>
    );
};

export default Tree1;