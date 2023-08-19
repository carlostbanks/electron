import React from 'react';

interface Props {}

export const Text: React.FC<Props> = ({...args}) => {
    return (
        <input 
        type='text'
        className='px-2 py-3 mt-2 mb-2 border rounded shadow-sm w-full'
        {...args}
        />
    );
};