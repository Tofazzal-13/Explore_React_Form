import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friends = () => {
    const [money, setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h3>Friends</h3>
            <p>Family Got: {money}</p>
        </div>
    );
};

export default Friends;