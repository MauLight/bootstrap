import React from 'react';

const Alert = () => {
    return (
        <div className='container'>
            <div className='alert alert-warning d-flex justify-content-between' role= 'alert'>
                <p className='alert-heading mb-0 align-middle pt-1'>Alert!! Elv is too beautiful!!</p>
                <button className='btn close' data-bs-dismiss= 'alert'>&times;</button>
            </div>
        </div>
    )
}

export default Alert;