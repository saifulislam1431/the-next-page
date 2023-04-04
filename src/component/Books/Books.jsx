import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const Books = () => {
    // Loading spinner
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoaderSpinner />
    }
    const allBooks = useLoaderData()
    // console.log(allBooks.books);
    
    return (
        <div className='grid gap-5 lg:grid-cols-4 sm:grid-cols-2  mt-10'>
            {
                allBooks.books.map(singleBook => <Book
                key={singleBook.isbn13}
                singleBook ={singleBook}
                ></Book>)
            }
        </div>
    );
};

export default Books;