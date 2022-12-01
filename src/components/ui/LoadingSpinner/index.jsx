import React from 'react';

import './styles.sass';

function LoadingSpinner({ size }) {
    return (
        <div className='loader-wrapper'>
            <div className="lds-ring">
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default LoadingSpinner;