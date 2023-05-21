import React, { useContext } from 'react';
import { userContext } from '../Auth/Auth';
import LoaderSpinner from '../component/LoaderSpinner/LoaderSpinner';
import Swal from 'sweetalert2';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(userContext);
    const location = useLocation();

    if(loading){
        return <LoaderSpinner></LoaderSpinner>
    }
    if(!user){
        Swal.fire({
            title: 'Error!',
            text: 'Please Login First!',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return <Navigate to="/login" state={{from: location}} replace/>
    }
    if(user){
        return children;
    }

};

export default PrivateRoute;