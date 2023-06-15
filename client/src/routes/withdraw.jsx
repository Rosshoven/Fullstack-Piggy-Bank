// import React from "react"; //not needed in a CRA (I think!)
import { useState } from "react";
import ATM from "../ATM";
import Pig_Withdraw from "../images/Pig_Withdraw.jpg";
import {  useBalanceContext  } from "./balance-context";

export default function Withdraw () {
  // withdraw state is used in handlechange where setWithdraw defines the withdrawal amount that is then used in handleSubmit
    const [withdraw, setWithdraw] = useState(0);
    // validTransaction-setValidTransaction is used to change the text of the button within the ATM component
    const [validTransaction, setValidTransaction] = useState(false);
    // Bringing in the same BalanceContext so the balance remains the same throughout app.
    //  Need the parens() after useBalanceContext, otherewise you're not calling it and balance will be undefined...which will lead to toFixed() not working either. Needs to be useBalanceContext();
    const {balance, setBalance} = useBalanceContext();
    // const { balance, setBalance} = useContext(BalanceContext);
  
    // const isWithdraw = true //don't see purpose of this code.
    // let status = `${balance}`; //don't need this because I'm using balance context

    const handleChange = (event) => {
            // Take away success-message from previous transaction as soon as handleChange is reactivated 
            document.getElementById('success-message').innerHTML = ``;
            if (Number(event.target.value) <= 0) { 
            document.getElementById('error-message').innerHTML = `Oink! Please enter amount above $0.`
            return setValidTransaction(false); //NOT UNneccessary because button needs to remain disabled
          } else if (Number(event.target.value) > balance) {
            document.getElementById('error-message').innerHTML = `Oink! Your Piggy Bank doesn't have $${event.target.value}.`
            return setValidTransaction(false); //NOT UNneccessary because button needs to remain disabled
          } else {
            // validTransaction changed to true to enable button. The button is what engages handleSubmit()
            setValidTransaction(true);
            document.getElementById('error-message').innerHTML = ``; //NOT UNneccessary, because otherwise the error message will remain on the page even when you enter a valid ammount.  
          }
          // once number is validated, a withdraw number is established for use in handleSubmit()
          setWithdraw(Number(event.target.value));
        };
  

    const handleSubmit = (event) => {
      // create a new total from balance (context) and withdraw (state)
      let newTotal = balance - withdraw;
      // use setBalnce to update balance
      setBalance(newTotal);
      //  re-disable button
      setValidTransaction(false);
      // event.preventDefault() keeps your form and submission from being reset as soon as the setBalance(newTotal) is processed. Prevent the form from defaulting so it can fulfill the process. 
      event.preventDefault();
      // reset for placeholder
      document.getElementById('number-input').value = '';
      // sucess message
      document.getElementById('success-message').innerHTML = `Success! $${withdraw.toFixed(2)} withdrawn. `;
    };
  
    return (
        
        <div style={{display: 'flex', flexDirection: 'column', padding: '10% 0% 40% 0%', backgroundColor: 'lightblue'}}>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid 1px green'}} src={Pig_Withdraw} alt="Pig with Cash" /> 
            <h1 style={{margin: '5% 1%', padding: '0%', display: 'flex', justifyContent: 'center', fontFamily: 'Architects Daughter, cursive', fontSize: '3rem'}}>Take Some Coins From Your Piggy Bank</h1>
            <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid 1px green'}} src={Pig_Withdraw} alt="Pig with Cash" /> 
          </div>
          
          <form style={{ borderRadius: '5px', width: '30rem', marginRight: 'auto', marginLeft: 'auto', border: '2px solid green'}} 
          // onSubmit={handleSubmit}
          >
                <div className="card">
                    <div className="card-header" style={{fontWeight: 'bold', fontFamily: 'Forum, cursive', fontSize: '2.2rem'}}>
                      {`Account Balance: $${(balance).toFixed(2)}`}
                    </div>
                <div className="card-body" style={{display: 'flex', flexDirection: 'column', backgroundColor: '#ffd3d9'}}>

                        <div style={{color: 'green', fontSize: '1.7rem', margin: '3% auto'}} id="success-message"></div>
                        <div style={{color: 'red', }} id="error-message"></div>
                        <h3 style={{fontFamily: 'Forum, cursive', fontSize: '2.2rem'}}> Withdrawal Amount:</h3>
                        <ATM
                        onChange={handleChange}
                        // isWithdraw={isWithdraw} // Don't see purpose of this≈
                        isValid={validTransaction}

                        onClick={handleSubmit}
                        // deposit = false make button say Withdraw
                        deposit={false}
                        ></ATM>
                    </div>
                </div>
          </form>
        </div>
    );
  };

