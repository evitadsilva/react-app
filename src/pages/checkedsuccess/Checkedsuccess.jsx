import React, { useState } from 'react';
import './checkedsuccess.css'; 

function Checkedsuccess() {
    const [operationSuccess, setOperationSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const performOperation = () => {
        setLoading(true);
        setTimeout(() => {
            setOperationSuccess(true);
            setLoading(false);
        }, 2000); // 2-second delay
    };

    const handleClick = () => {
        // Reset the success state
        setOperationSuccess(false);
        performOperation();
    };

    const handleGoBack = () => {
        
    };

    return (
        <div className="container">
            <button className="button" onClick={handleClick} disabled={loading}>
                {loading ? 'Loading...' : 'Perform Operation'}
            </button>
            {loading && <p className="message loading">Please wait, the operation is in progress...</p>}
            {operationSuccess ? (
                <p className="message success">Operation succeeded!</p>
            ) : (
                <p className="message error">Operation failed!</p>
            )}

            <button className="back-button" onClick={handleGoBack}>
                Go Back to Home
            </button>
        </div>
    );
}

export default Checkedsuccess;
