import React from 'react';

const Book = ({singleBook}) => {
    console.log(singleBook);
    const {image,price,title,subtitle,url} = singleBook;
    return (
        <div>
            <img src={image} alt="Book Cover" className='object-cover w-full h-56 md:h-64 xl:h-80 mb-8 shadow-lg rounded-lg' />
        </div>
    );
};

export default Book;