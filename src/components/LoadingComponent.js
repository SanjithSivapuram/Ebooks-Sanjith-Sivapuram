import React from 'react';
import { Spinner } from 'reactstrap';

export const Loading = () => {
    return (
        <div className='col-12 text-center'>
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
        </div>
    );
}