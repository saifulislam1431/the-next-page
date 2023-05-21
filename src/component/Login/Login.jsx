import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from "../../assets/google.png"
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { userContext } from '../../Auth/Auth';
import Swal from 'sweetalert2';

const Login = () => {
    const [error, setError] = useState("");
    const { googleLog, signIn } = useContext(userContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(res => {
                const loggedUser = res.user;
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign In Successful!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();

            })
            .then(error => {
                setError(error.message)
            })

    }
    const handleGoogleIn = () => {
        googleLog()
            .then(res => {
                const loggedUser = res.user;
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successful!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .then(error => {
                setError(error.message)
            })
    }
    const handleResetPass = () => {

    }
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <div>
                <Link to='/' className="logo">
                    <span className='inline-flex items-center text-center'>
                        <BookOpenIcon className="h-7 w-7 mr-2 text-sky-500" />
                        <h1 className='text-2xl font-bold tracking-wide text-slate-800'>The nextPage</h1>
                    </span>
                </Link>
                <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 mt-5">
                    <h1 className='text-center pt-5 text-2xl font-bold'>Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name='email'

                                    placeholder="email"
                                    className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password'
                                    className="input input-bordered" />

                            </div>
                            <p className='my-3 text-red-600 font-medium'>{error}</p>
                            <button className='bg-sky-700 py-3 px-4 text-white font-medium rounded-lg mr-2 w-full mt-3 text-center'>Sign In</button>

                        </form>
                        <label className="label">
                            <span className="label-text-alt link link-hover" onClick={handleResetPass}>Forgot password?</span>
                        </label>
                        <hr className='border-1 border-sky-500 mt-2' />
                        <div className='text-center items-center mt-3'>
                            <p className='font-medium'>or Sign in with</p>
                            <div className='my-4 space-x-3 w-full'>
                                <button className='inline-flex items-center gap-1 justify-center border border-sky-600 py-2 px-2 rounded-md w-full'   onClick={handleGoogleIn}>
                                    <span>Sign In with</span> <img src={icon} alt="" className='w-6' />
                                </button>
                            </div>
                            <p>New to The nextPage? <Link to="/register" className='text-primary font-semibold'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;