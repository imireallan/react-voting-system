import React from 'react';
import './Lang.css'

export default ({ name, votes, vote }) => {
    return (
        <div className="languages">
            <p>{votes}</p>
            <p>{name}</p>
            <button onClick={ () => vote(votes, name)}>Click Here</button>
        </div>
    )
}
