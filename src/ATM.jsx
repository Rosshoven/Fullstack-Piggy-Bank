// The arguments here are the props (deconstructed) to make use of when used on deposit or withdraw page
const ATM = ({ onChange, isValid, deposit, onClick }) => {
  
    return (
     
      <label className="label huge">
        <input min="" placeholder="Please enter amount" id="number-input" type="number" step=".01" width="200" onChange={onChange}
        style={{backgroundColor: 'eggwhite'}}>
        </input>

        <br />

        <button style={{marginTop: '10%', fontFamily: 'Forum, cursive', fontSize: '1.2rem'}} 
        type="submit" 
        className="btn btn-success" 
        disabled={!isValid} 
        onClick={onClick}
        width="200" 
        value="Submit" 
        id="submit-input">{deposit ? 'Deposit' : 'Withdraw'}
        </button>
      </label>
    );
  };

  export default ATM;
