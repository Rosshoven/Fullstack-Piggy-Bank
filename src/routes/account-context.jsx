// import createContext, and useContext and useState hooks
import React, { createContext, useContext, useState } from 'react'

// Creating/defining a context named AccountContext 
const AccountContext = createContext([{}])
// this is the context object that will be used to share state between components. It will have .Provider with a value added to it.


// This is the provider component that includes AccountContext.Provider with value. It is exported and will wrap our children components and provide the context to all of our child components.You will find this in the index.js file, wrapping the RouterProvider at the bottom. 
// The { children } prop represents all the components that have access to the Account Provider. 
export const AccountProvider = ({ children }) => {

  // useState hook where the state variable "accounts" is being defined along with setter function used to update account information. 
  const [accounts, setAccounts] = useState([]);

  // Function that takes the new data or values, and adds them to the accounts. "This function is reponsible for updating the account information in the state." 
  // Is this where I would add connection to a db? 
  const handleSetAccountData = (data) => {
    // update the accounts. spread syntax for the ...accounts already created, and the data parameter to update it. In the create-account, "values"  from the formik end up being the argument we pass into handleSetAccountData(data)
    setAccounts([...accounts, data])
  }

  return (
    // Providing a value that is: A function to modify the account data, and the state variable "accounts"
    // The two things defined in this - accounts useState & handleSetAccountData(data) - are used for the value of the AccountContext.Provider 
    <AccountContext.Provider value={{ handleSetAccountData, accounts }}>
      {children}
    </AccountContext.Provider>
  )
}


// Exporting a component that uses AccountContext and its values - handleSetAccountData and accounts
// This is created for 2 reasons: 1) import { useAccountContext } from "./account-context"; is used in Create Account where accounts are updated, but not displayed. 2) const { accounts } = useAccountContext() in All Data helps use display accounts.
export const useAccountContext = () => useContext(AccountContext);
// useAccountContext now has all the values and code that was in .Provider value. 