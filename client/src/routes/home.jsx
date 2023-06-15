import home_piggy from '../images/home_piggy.jpg';

export default function Home() {
    return (
        < div style={{backgroundColor: 'lightblue', borderSizing: 'border-box', position: 'static', padding: '3% 0% 30% 0%'}}>
            <div className="card" style={{marginRight: 'auto', marginLeft: 'auto', marginTop: '6.5%', border: 'solid 4px green', width: '42%', fontFamily: 'Forum, cursive', fontSize: '1.4rem'}}>
            
                <h6 style={{padding: '2% 2%', backgroundColor: 'pink', marginBottom: '-1%', fontFamily: 'Forum, cursive'}}><u>Welcome to...</u></h6>
                <h1 style={{ backgroundColor: 'pink', width: '100%', display: 'flex', justifyContent: 'center', margin: '0% auto', padding: '.5%', fontFamily: 'Architects Daughter, cursive', fontSize: '5rem', color: 'lightblue', textShadow: '1.5px 3px 2px black'}}>PIGGY BANK</h1>
                <img style={{ borderTop: 'solid 2px green', borderBottom: 'solid 2px green', borderRadius: '0%'}} src={home_piggy} className="card-img-top" alt="Piggy Bank on Gold Coins" />
                
                <div className="card-body" style={{ backgroundColor: 'pink' }}>
                    <h5 className="card-title" style={{fontSize: '1.4rem', fontFamily: 'Forum, cursive'}}>Here at Piggy Bank you can feel safe and secure knowing that your money is protected by a pig. Only you can feed the piggy, and only you can break the piggy.</h5>
                    <p className="card-text" style={{fontFamily: 'Forum, cursive', fontSize:'1.4rem', color: 'white'}}>
                        <a href="create-account" type="button" className="btn btn btn-outline-success" style={{color: 'white', fontFamily: 'Forum, cursive', fontSize:'1.4rem' }}>
                            Create Account</a> to get started!</p>
                </div>

            </div>
        </div>     
   );
}
