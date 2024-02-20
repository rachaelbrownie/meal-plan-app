import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {ErrorPage} from './error';
import {Account} from './routes/account';
import {Fridge} from './routes/fridge';
import {New} from './routes/new';
import {Root} from './routes/root';
import {Saved} from './routes/saved';
import Signup, {action as SignupAction, loader as SignupLoader} from './routes/signup';

const router = createBrowserRouter([
  {
    path: '/dog',
    element: <Signup />,
    errorElement: <ErrorPage />,
    loader: SignupLoader,
    action: SignupAction,
  },
  {
    path: '/grocery',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'new',
        element: <New />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'fridge',
        element: <Fridge />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'saved',
        element: <Saved />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'account',
        element: <Account />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
