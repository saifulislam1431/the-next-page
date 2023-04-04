import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Books from './component/Books/Books';
import BookDetails from './component/BookDetails/BookDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')

      },
      {
       path: 'singleBook/:singleBookId',
       element: <BookDetails></BookDetails>,
       loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.singleBookId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
