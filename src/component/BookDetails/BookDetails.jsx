import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const details = useLoaderData();
    const [fold, setFold] = useState(true);
    console.log(details);
    const {desc,image,authors,language,price,publisher,rating,title,year} = details;
    return (
        <div className=' container py-10 flex flex-col items-center justify-center mx-auto  border-2 border-sky-500'>

         <div className='grid md:grid-cols-2 items-center justify-center gap-10'>
            <div>
                <img src={image} alt="Book Image" className='object-cover w-96 h-56 md:h-96 xl:h-96 mb-8  rounded-lg'/>
            </div>
            <div>
                <p className='badge'>BRAND NEW</p>
                <h1 className='text-3xl font-extrabold my-8 text-slate-800'>{title}</h1>
                <div className='font-medium mb-6'>
                    <p>Authors: {authors}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className='cursor-pointer text-gray-900'>
                {
                    fold ? <><p className=''>{desc.substring(0,100)}.... <span className='font-medium text-sky-600' onClick={()=>setFold(!fold)}>Read More</span></p></> : <><p className=''>{desc}<span className='font-medium text-sky-600' onClick={()=>setFold(!fold)}>Read Less</span></p></>
                }
                </div>
                <div className='mt-8'>
                    <button className='bg-sky-700 py-3 px-5 rounded-xl shadow-lg text-white font-medium mr-5'>Buy Now</button> <span className='text-xl font-semibold text-slate-800'>Price: {price}</span>
                </div>
            </div>
         </div>
            
        </div>
    );
};

export default BookDetails;