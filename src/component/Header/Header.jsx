import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BookOpenIcon,Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
    
         <nav className=' p-5 flex justify-between items-center'>
            <Link to='/' className="logo">
                <span className='inline-flex items-center'>
                <BookOpenIcon className="h-7 w-7 mr-2 text-sky-500" />
                <h1 className='text-2xl font-bold tracking-wide text-slate-800'>The nextPage</h1>
                </span>                
            </Link>
            <ul className='text-lg font-semibold hidden lg:flex'>
                <li className='mr-6'>
                    <NavLink to='/' className={({isActive})=> (isActive ? 'text-sky-800' : 'text-sky-500')}>Home</NavLink> 
                </li>
                <li className='mr-6'>
                <NavLink to='/books' className={({isActive})=> (isActive ? 'text-sky-800' : 'text-sky-500')}>Books</NavLink>
                </li>
                <li className='mr-6'>
                <NavLink to='/about' className={({isActive})=> (isActive ? 'text-sky-800' : 'text-sky-500')}>About Us</NavLink>
                </li>
            </ul>
            <ul className='text-lg font-semibold flex flex-col lg:hidden'>
                <button onClick={()=>setOpen(!isOpen)}>

                    {
                        isOpen ? <XMarkIcon className='h-8 w-8 text-sky-500'/> : <Bars3Icon className='h-8 w-8 text-sky-500' />
                    }

                </button>

                <ul className={`text-lg font-semibold flex flex-col justify-center items-center  absolute duration-300 bg-sky-200 w-full py-10 ${isOpen ? 'right-0 top-16' : ' hidden'}`}>
                <li className='mr-6'>
                    <NavLink to='/' className={({isActive})=> (isActive ? 'text-sky-800' : 'text-sky-500')}>Home</NavLink> 
                </li>
                <li className='mr-6'>
                <NavLink to='/books' className={({isActive})=> (isActive ? 'text-sky-800' : 'text-sky-500')}>Books</NavLink>
                </li>
                <li className='mr-6'>
                <NavLink to='/about' className={({isActive})=> (isActive ? 'text-sky-800' : 'text-sky-500')}>About Us</NavLink>
                </li>
            </ul>

            </ul>
        </nav>
       
        
    );
};

export default Header;