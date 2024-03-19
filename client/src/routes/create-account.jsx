// Get formik for the form 
import { useFormik } from "formik";
// Need useState for what is displayed and 
import { useState } from "react";
// importing the yup schema for formik validation
import { basicSchema } from "../schemas/schema";
// importing the Account Context
import { useAccountContext } from "./account-context";
import { Link } from "react-router-dom";
import '../index.css'; 

// import { useBalanceContext } from "./balance-context";

function BasicForm() {
    // defining the handleSetAccountData by destructring. Will be imperitive to use to update the accounts, coming from the Account Context so it will be saved.
    const { handleSetAccountData, setLoggedIn } = useAccountContext();
    // const {balance, setBalance} = useBalanceContext();

    // useState hook used to display text on the button: Create Another Account' OR 'Create Account'  
    const [createAccountTrue, setCreateAccountTrue] = useState(false);
    // show state sets what is displayed on page: Form or Success message
    const [show, setShow] = useState(true);

    // onSubmit function. "values" is the user information submitted and "actions" are a long set of methods provided by formik. I end up using resetForm(). The values I pass into the handleSetAccountData function that is created in account-context
    async function onSubmit(values, actions) {
        console.log(values);
        console.log(actions);

        // console.log("Is this happening twice??") --Was happening twice because I was serving static as well (i think)
        
        // restful route post request, creates a moment of "processing" for the client
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Actual request to an endpoint on the server
        // Relative path - took out localhost 3000 so this fetch will work with any URL
        const response = await fetch(`/account/create/${values.userName}/${values.email}/${values.password}`);
        if (!response.ok) {
            return
        }
        
        // IMPORTANT. Taking the values submitted and adding it to accounts context
        handleSetAccountData(values);
        setLoggedIn(true);

        
    
        actions.resetForm({
            value: {
                // the type of `values` inferred to be Blog
                userName: '',
                email: '',
                password: '',
                confirmPassword: ''
        },
        });
        setCreateAccountTrue(true);
        setShow(false);
    }
    
    
    // destrucuring formik
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        // with below the form will use the schema to validate the form
        validationSchema: basicSchema,
        // Once validated and button clicked, run onSubmit function which is defined above. 
        onSubmit,
    });

    console.log(errors);


    return (
        // show initial state is true so the form starting below will be displayed
        show ? 
        
        <div id="create" className='card form-control relative'>

            <form onSubmit={handleSubmit} autoComplete="off">

                <div className="card-body" id="accountCard" 
                // style={{ borderRadius: '5px', width: '18rem', marginRight: 'auto', marginLeft: 'auto', marginTop: '10%', backgroundColor: '#a6a6a6',  border: '2px solid green' }}
                >
                    <h2 style={{ margin: '2% auto', padding: '2%', backgroundColor: 'pink', borderRadius: '20px', fontFamily: 'Forum, cursive', fontSize: '2.2rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>Create Account</h2>
                    <hr />
                    {/* ADD IMAGE    <img src="..." class="card-img-top" alt="..." /> */}
                    <div className="card-body">

                        <label htmlFor="userName">Username</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="userName"
                            type="text"
                            placeholder="Enter Username"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.userName && touched.userName ? "input-error form-control" : "form-control"} />
                        {errors.userName && touched.userName && <p className="error">{errors.userName}</p>}

                        <label htmlFor="email">Email</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="email"
                            type="email"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email ? "input-error form-control" : "form-control"} />
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}

                        <label htmlFor="password">Password</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? "input-error form-control" : "form-control"} />
                        {errors.password && touched.password && <p className="error">{errors.password}</p>}

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            style={{ marginBottom: '7%' }}
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.confirmPassword && touched.confirmPassword ? "input-error form-control" : "form-control"} />
                        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                        <button 
                        style={{ marginTop: '5%' }} 
                        // button stays disabled if both password and confirm password have nothing in them. Once a letter is put into either, the button is no longer disabled
                        disabled={ values.password.length === 0 && values.confirmPassword.length === 0 ? true : false } 
                        type="submit" 
                        className="btn btn-success"
                        >{createAccountTrue ? 'Create Another Account': 'Create Account'}
                        </button>

                    </div>
                </div>
            </form> 
        </div>
        : (
                <>
                <div className='card form-control relative' style={{ borderSizing: 'border-box', backgroundColor: 'lightblue', position: 'static', paddingBottom: '100%'}}>
                <div className="card w-50" id="loginSuccess">
                    <div className="card-body">
                        <h5 className="card-title">Success! Your account has been created.</h5>
                        <p className="card-text"></p>
                        <Link className="navbar-brand btn btn-success"
                        // className="btn btn-success" 
                        // setter function setShow(true) for the onClick makes the create account form return to the page
                        // onClick={() => setShow(false)}
                        to={'/deposit'}
                        >Let's Bank</ Link>
                    </div>
                    </div>
              
              </div>
              </>

            )


        
    
    );
}
export default BasicForm;

