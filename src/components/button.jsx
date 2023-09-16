import React from 'react';

export const ButtonBox = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className='btn-box'>{props.type}</button>
        </div>
    );
}