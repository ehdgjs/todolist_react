import React from 'react';

const Hello = ({match}) =>{
    return (
        <div>
            <h2>Hello! {match.params.name}</h2>
        </div>
    )
}

export default Hello;