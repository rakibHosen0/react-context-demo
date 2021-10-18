import React from 'react';
import { useContext } from 'react';
import { CountContext } from '../RootTree/RootTree';
const Tree5 = () => {
    const count = useContext(CountContext)
    return (
        <div className="tree-5">
            <h1 className="text-center">{count}</h1>
        </div>
    );
};

export default Tree5;