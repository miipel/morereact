import React from 'react';

const validationComponent = ( props ) => {
    const length = props.length;

    return (
        <div>
            {length >= 5 ? <p>Text long enough</p> : <p>Text too short!</p>}
        </div>
    );
}

export default validationComponent;