import React from 'react';
import './sign-in-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const  SignInAndSignUp = (props)  => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
        </div>
    )
}


export default SignInAndSignUp;