import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const allBooks = useLoaderData()
    console.log(allBooks.books);
    return (
        <div>
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