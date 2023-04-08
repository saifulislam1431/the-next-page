import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from "lottie-react";
import bookReading from "../../assets/78917-education-animated-file.json";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=' flex items-center justify-center min-h-[calc(100vh-68px)]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-3 container'>
                <div>
                    <p className='badge'>On Sale!</p>
                    <h1 className='font-bold text-4xl mt-5'>A reader lives a
                        thousand lives <span className='text-sky-500'>before he dies</span></h1>
                    <p className='mt-3'>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                    <div className='mt-8'>
                        <Link to='/books'><button className='bg-sky-700 py-3 px-4 inline-flex text-white font-medium rounded-lg mr-2'>View Store <ShoppingCartIcon className='h-5 w-5 text-sky-100 ml-2' /></button></Link>
                        <Link to='/about' className='text-lg font-semibold hover:text-sky-600'>Learn More</Link>
                    </div>
                </div>

                <div>
                    <div className='mt-10 lg:mt-0'>
                        <Lottie animationData={bookReading} loop={true}></Lottie>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;