import React from 'react';

const LoaderSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-68px)]'>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-6 border-dashed rounded-full animate-spin mt-5 border-sky-600'></div>
            <p className='text-7xl font-thin'>ading...</p>
        </div>
    );
};

export default LoaderSpinner;