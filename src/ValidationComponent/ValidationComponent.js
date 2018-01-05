import React from 'react';

const validationComponent = ( props ) => {
    const isShort = 5 >= props.textLength;



    return (
        <div>
            { isShort
                ? <p>Text long enough</p>
                : <p>Text too short!</p>
            }
        </div>
    );
}

export default validationComponent;