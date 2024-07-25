import React, { useState } from 'react'
import './Login.css'
import Signin from '../SignIn Screen/Signup'

function Login() {
    const [signIn, setSignIn] = useState(false)

    return (
        <div className='login-screen'>
            <div className='login-background'>
                <img
                    className='login-logo'
                    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                    alt=''
                />
                <button onClick={() => setSignIn(true)} className='login-button'>Sign In</button>
                <div className='login-gradient' />
            </div>
            <div className='login-body'>
                {signIn ? (
                    <Signin />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h2>Watch anywhere. Cancel anytime</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='login-input'>
                            <form>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                />
                                <button onClick={() => setSignIn(true)} className='login-getstarted'>Get Started</button>
                            </form>
                        </div>
                    </>)}

            </div>

        </div>
    )
}

export default Login