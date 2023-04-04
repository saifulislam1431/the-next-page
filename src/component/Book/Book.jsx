import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({singleBook}) => {
    // console.log(singleBook);
    const {image,price,title,subtitle,url,isbn13} = singleBook;
    return (
        <Link to={`/singleBook/${isbn13}`} className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2'>
            <img src={image} alt="Book Cover" className='object-cover w-full h-56 md:h-64 xl:h-80 mb-8 shadow-lg rounded-lg' />
            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col  text-gray-300 font-medium p-4 rounded-lg absolute inset-0'>
                <p>{title}</p>
                <br />
                <p>{subtitle.substring(0,30)}....</p>
                <br />
                <p className='mt-auto'>Price: {price}</p>
            </div>
        </Link>
    );
};

export default Book;