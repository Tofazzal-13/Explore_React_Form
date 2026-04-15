import React from 'react';
import Special from './Special';
import Friends from './Friends';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Tomtom" && <Special asset={asset}></Special>
            }
            {
                name === "Jo jo jo" && <Friends></Friends>
            }
        </div>
    );
};

export default Cousin;