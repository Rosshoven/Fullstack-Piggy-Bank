import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from '../src/error-page';
import AllData from './routes/all-data';
import CreateAccount from './routes/create-account.jsx';
import Deposit from './routes/deposit';
import Home from './routes/home';
import Root from './routes/root';
import Withdraw from './routes/withdraw';

// imporiting Contexts for router
import { AccountProvider } from './routes/account-context';
import { BalanceProvider } from "../src/routes/balance-context";


// setting up my routes
// router is defined as a createBrowserRouter(imported from react-router-dom) with routes I create
// This is not a navbar. This is the router the navbar uses to go from page to page
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // the path given for index will show upon inital load
        index: 'home',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'create-account',
        element: <CreateAccount />
      },
      {
        path: 'deposit',
        element: <Deposit />
      }, 
      {
        path: 'withdraw',
        element: <Withdraw />
      },
      {
        path: 'all-data',
        element: <AllData />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* AccountProvider component from account-context, this component returns (<AccountContext.Provider value={{ handleSetAccountData, accounts}}> {children} </AccountContext.Provider>*/} 
    {/* Did the same for Balance Provider */}
    <AccountProvider>
      <BalanceProvider>
      <RouterProvider router={router} />
      </BalanceProvider>
    </AccountProvider>
  </React.StrictMode>
);

