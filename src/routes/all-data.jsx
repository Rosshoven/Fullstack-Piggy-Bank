// Need for accounts
import { useAccountContext } from "./account-context";
import Pig_Logo from '../images/Pig_Logo.png';


// The All Data Component
export default function AllData() {

    // take in accounts data from useAccountContext
    // this is destrucuring. I will display the accounts data with accounts.map
    const { accounts } = useAccountContext();
   
    // checking to see if accounts are coming through
console.log('accounts', accounts)
    
    return (

        
        // Div of whole comfponent
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '13% 0% 40% 0%', backgroundColor: 'lightblue', fontFamily: 'Forum, cursive', fontSize: '2rem'}}>
            
        {/* HEADING */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid .5px black', alignSelf: 'center'}} src={Pig_Logo} alt="Logo" />
                <h1 style={{marginTop: '5%', display: 'flex', justifyContent: 'center', fontFamily: 'Architects Daughter, cursive', fontSize: '4rem'}}>User's Piggy Bank Info</h1>
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid .5px black', alignSelf: 'center'}} src={Pig_Logo} alt="Logo" />
            </div>   

         

            <div className="card" style={{width: '35rem', margin: '3% auto', border: 'solid 2px green', backgroundColor: 'green'}}>
                {/* <div class="card-header">
                    Featured
                </div> */}
                    {/* <ul className="list-group list-group-flush">
                        <li className="list-group-item"><u>Username</u>: MichaelRoss</li>
                        <li className="list-group-item"><u>Email</u>: MisterMichael@gmail.com</li>
                        <li className="list-group-item"><u>Password</u>: Piano23!</li>
                    </ul> */}

                {/* map over accounts and return a jsx expression */}
                {accounts.map((account) => {
                    return (    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><u>Username</u>: {account.userName}</li>
                        <li className="list-group-item"><u>Email</u>: {account.email}</li>
                        <li className="list-group-item"><u>Password</u>: {account.password}</li>
                    </ul>
                )
            }
        )}

            </div>
        
        </div>     
        );
    } 
