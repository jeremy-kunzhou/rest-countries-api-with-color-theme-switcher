import React from 'react';

export const Loading = () => {
    return(
        <div style={{ 
            display: 'grid', gridTemplateRows: '300px 1fr', placeContent: 'center', placeItems: 'center'
        }} className="message-info">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
        
      
    );
};