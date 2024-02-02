import home_piggy from '../images/home_piggy.jpg';
import '../index.css'; 

export default function Home() {
    return (
        < div style={{
                backgroundColor: 'lightblue', 
                height: '100%', 
                padding: '5% 0% 30% 0%'
                }}>

            <div 
            // className="card" 
            id="home">
            
                <h6 style={{
                    padding: '2% 2%', 
                    backgroundColor: 'pink', 
                    marginBottom: '-2%', 
                    fontFamily: 'Forum, cursive',
                    textDecoration: 'none',
                    fontSize: '1rem'
                    }}>Welcome to...</h6>
                
                <h1 id="logo" style={{ 
                                backgroundColor: 'pink', 
                                width: '100%', 
                                display: 'flex', 
                                justifyContent: 'center', 
                                margin: '0% auto', 
                                padding: '.5%', 
                                fontFamily: 'Architects Daughter, cursive', 
                                color: 'lightblue', 
                                textShadow: '1.5px 3px 2px black'
                                }}>PIGGY BANK</h1>
                <img style={{ 
                        borderTop: 'solid 2px green', 
                        borderBottom: 'solid 2px green', 
                        borderRadius: '0%'
                        }} src={home_piggy} className="card-img-top" alt="Piggy Bank on Gold Coins" />
                
                <h5 className="card-title" style={{
                                                fontSize: '1.4rem', 
                                                fontFamily: 'Forum, cursive',
                                                padding: '.5rem',
                                                textAlign: 'justify'
                                                }}>Here at Piggy Bank you can feel safe and secure knowing that your money is protected by a pig. Only you can feed the piggy, and only you can break the piggy. Open an account today and get $100!</h5>


            </div>
        </div>     
   );
}
