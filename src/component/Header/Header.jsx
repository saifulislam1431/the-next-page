import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { userContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const { user, logOut } = useContext(userContext);
    const handleOut = ()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Log Out Successful!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
        .then(error=>{
            console.log(error.message)
        })
    }
    const navItems = <>
        <li className='mr-6'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-sky-800' : 'text-sky-500')}>Home</NavLink>
        </li>
        <li className='mr-6'>
            <NavLink to='/books' className={({ isActive }) => (isActive ? 'text-sky-800' : 'text-sky-500')}>Books</NavLink>
        </li>
        <li className='mr-6'>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-sky-800' : 'text-sky-500')}>About Us</NavLink>
        </li>
        {
            user ? 
            <li className='mr-6 flex items-center gap-2'>
            <p className='text-sky-800 font-medium'>{user.displayName}</p>
            <button className='border border-sky-500 px-2 rounded-md font-medium text-sky-500' onClick={handleOut}>Log Out</button>
        </li>
            :       
        <li className='mr-6'>
            <NavLink to='/login' className={({ isActive }) => (isActive ? 'text-sky-800' : 'text-sky-500')}>Sign In</NavLink>
        </li>
        }


    </>
    return (

        <nav className=' p-5 flex justify-between items-center'>
            <Link to='/' className="logo">
                <span className='inline-flex items-center'>
                    <BookOpenIcon className="h-7 w-7 mr-2 text-sky-500" />
                    <h1 className='text-2xl font-bold tracking-wide text-slate-800'>The nextPage</h1>
                </span>
            </Link>

            {/* Large device layout */}
            <ul className='text-lg font-semibold hidden lg:flex'>
                {navItems}
            </ul>

            {/* Phone menu layout */}
            <ul className='text-lg font-semibold flex flex-col lg:hidden'>
                <button onClick={() => setOpen(!isOpen)}>

                    {
                        isOpen ? <XMarkIcon className='h-8 w-8 text-red-500' /> : <Bars3BottomRightIcon className='h-8 w-8 text-sky-500' />
                    }

                </button>

                <ul className={`text-lg font-semibold flex flex-col justify-center items-center  absolute duration-300 bg-sky-200 w-full py-10 z-40 ${isOpen ? 'right-0 top-16' : ' hidden'}`}>
                    {navItems}
                </ul>

            </ul>
        </nav>


    );
};

export default Header;