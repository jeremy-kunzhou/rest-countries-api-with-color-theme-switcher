import React from 'react';

export const Error = ({message}) => {
    return(
        <div style={{ 
            display: 'grid', gridTemplateRows: '300px 1fr', placeContent: 'center', placeItems: 'center'
        }} className="message-info">
            <span className="fa fa-times fa-3x fa-fw text-primary"></span>
            <p>{message}</p>
        </div>

    );
};