// import React from "react";  //not needed in a CRA (I think!)

// Two, now 1, important react hooks imported
import { useState } from "react";
// importing the ATM component
import ATM from "../ATM";
// importing the BalanceContext
// import { BalanceContext } from "./balance-context";
// importing images of a piggy bank deposit
import Pig_Deposit from '../images/Pig_Deposit.jpg';

import { useBalanceContext } from "./balance-context";


// Deposit component that processes a deposit 
export default function Deposit() {
    // deposit State - setDeposit is used in handleChange
    const [deposit, setDeposit] = useState(0);
    // validTransaction-setValidTransaction is used to enable button in the ATM component which uses handleChange() where event.target.value is validated
    const [validTransaction, setValidTransaction] = useState(false);
    // Bringing in the BalanceContext which is used in handleSubmit(). balance, setBalance is being defined here. 
    // Here we USE the context
    // const {balance, setBalance} = useContext(BalanceContext);

    const {balance, setBalance} = useBalanceContext();
    
    

    // const isDeposit = true; - I took out this line of code because I don't see its purpose.

    const handleChange = (event) => {
        document.getElementById('success-message').innerHTML = ``;
        // If number entered in ATM component is <= 0, then the div with id="error-message" will display error text. Otherwise, it is blank and nothing from that div is seen.
            Number(event.target.value) <= 0 ? 
            document.getElementById('error-message').innerHTML = "Oink! Please enter amount above $0." : document.getElementById('error-message').innerHTML = ''; 
        //In addition, if number entered is <= 0, then useState of setValidTransaction remains false which keeps the button disabled.
             if (Number(event.target.value) <= 0 ) { 
                return setValidTransaction(false);
              } else {
                // Once event.target.value is a number above 0, setValidTransacrtion us set to true which enables the deposit button in the ATM compoenent below. The button is what engages handleSubmit()
                setValidTransaction(true);
              }
            //   the deposit ammount is being set for use in handleSubmit()
              setDeposit(Number(event.target.value));
            };

    const handleSubmit = (event) => { 
        // balance and deposit both have state, balance state is from useContext so it's throughout. deposit state is local to only this page, is updated in the handleChange, then added to balance with hanldeSubmit()
        let newTotal = (balance + deposit);
        // update the balance
        setBalance(newTotal);
        // disable button again
        setValidTransaction(false);
        // 'Calling preventDefault() during any stage of event flow cancels the event, meaning that any default action normally taken by the implementation as a result of the event will not occur.' -https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        event.preventDefault();
        // This makes the input go back to placeholder after deposit is made. Otherwise, the previous amount will remain in the disabled input and the button will also be disabled. Not smooth.
        document.getElementById('number-input').value = '';
        // Success message appears in div with id success-message, directly above deposit amount 
        document.getElementById('success-message').innerHTML = `Success! Deposit of $${deposit.toFixed(2)} received.`;
    };

    return (
        // div of the whole page, using flexbox to line up elements in column
        <div style={{display: 'flex', flexDirection: 'column', padding: '10% 0% 40% 0%', backgroundColor: 'lightblue'}}>
            
            {/* HEADING */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid 1px green'}} src={Pig_Deposit} alt="Pig with Cash" /> 

                <h1 style={{margin: '5% 1% ', padding: '0%', display: 'flex', justifyContent: 'center', fontFamily: 'Architects Daughter, cursive', fontSize: '3rem'}}>Put Some Coins Into Your Piggy Bank</h1>
                
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid 1px green'}} src={Pig_Deposit} alt="Pig with Cash" /> 
            </div>
            
            {/* CARD w/FORM & ATM component*/}
            <form style={{ borderRadius: '5px', width: '30rem', marginRight: 'auto', marginLeft: 'auto', border: '2px solid green'}} 
            // onSubmit={handleSubmit}  //took out and put handleSubmit within the <button> on the ATM component
            >
                 <div className="card">
                    <div className="card-header" style={{fontWeight: 'bold', fontFamily: 'Forum, cursive', fontSize: '2.2rem'}}>
                     {`Account Balance: $${(balance).toFixed(2)}`}
                    </div>
                    <div className="card-body" style={{backgroundColor: '#ffd3d9'}}>

                    {/* success and error message divs. success message made in handleSubmit() and error message for handlechange()....so maybe it should just be one div with id of message) */}
                    <div style={{color: 'green', fontSize: '1.7rem', margin: '3% auto'}} id="success-message"></div>
                    <div style={{color: 'red', }} id="error-message"></div>
                    
                    <h3 style={{fontFamily: 'Forum, cursive', fontSize: '2.2rem'}}> Deposit Amount:</h3>
                    {/* ATM component with 4 props */}
                    <ATM
                        // use the handleChange function to process deposit
                        onChange={handleChange}
                        // isDeposit={isDeposit} //I took out this line of code because I don't see its purpose.
                        // isValid is for the button being disabled. Since the state of validTransaction is given initial boolean value of false, the button is initially disabled.
                        isValid={validTransaction}
                        // Used onClick prop for ATM - could be easier when making componenet in future. 
                        onClick={handleSubmit}
                        // deposit = true makes button say "Deposit"
                        deposit = {true}
                        ></ATM>
                    </div>
                </div>
            </form>
        </div>
        
    );
}
