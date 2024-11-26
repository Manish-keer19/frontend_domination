import React from 'react';

function Stripe({val}) {
    return (
        <>
            <div className='w-[100%] p-5 h-24 text-white flex border-t-2 border-b-2 border-r-2 border-l-2 items-center gap-10 justify-around mt-10'>
                 
                 <img className='object-cover' src={val.url} alt="" />
                 <h1>{val.number}</h1>

            </div>
        </>
    );
}

export default Stripe;
