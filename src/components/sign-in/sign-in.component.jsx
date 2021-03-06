import React, { Component } from 'react';
import FormInput from '../form/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import  { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',

        }
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    };

    handleChange = event => {
        const { value , name } = event.target;
        this.setState({ [ name ] : value})
    };
    
    render() {
        return (
            <div className="sign-in">
                <h2>Already Have Account</h2> 
                <span>Sign in with Email - Pass</span> 
                <form onSubmit={this.handleSubmit}>
                                <FormInput
                                    name='email'
                                    type='email'
                                    handleChange={this.handleChange}
                                    value={this.state.email}
                                    
                                    required
                                />
                                <FormInput
                                    name='password'
                                    type='password'
                                    value={this.state.password}
                                    handleChange={this.handleChange}
                                   
                                    required
                                />
                   <CustomButton type="submit">SignIn</CustomButton>
                   <CustomButton onClick={signInWithGoogle}>SignIn</CustomButton>
                </form>              
            </div>
        )
    }
}
