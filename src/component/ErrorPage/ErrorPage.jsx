import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import notFound from "../../assets/36395-lonely-404.json";

const ErrorPage = () => {
    const navigate = useNavigate()
    const handlePrevious = ()=>{
        navigate(-1);
    }
    return (
        <div className='  flex flex-col lg:flex-row justify-center items-center min-h-[100vh]'>
            <div >
                <h1 className='font-extrabold text-5xl text-red-600'>Page Not Found!</h1>
                <button className='py-2 px-5 mt-5 bg-emerald-600 rounded-lg font-medium text-xl text-yellow-50' onClick={handlePrevious}>Go Back</button>
            </div>
            <div>
            <Lottie animationData={notFound} loop={true} />
            </div>
        </div>
    );
};

export default ErrorPage;