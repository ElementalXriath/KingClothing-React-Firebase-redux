import React from 'react';
import HomePage from './frames/home/homeFrame.compoenent';
import './App.css';
import { Route, Switch } from 'react-router';
import ShopFrame from './frames/shop/shopFrame.component';
import Header from './components/header/header.component.js';
import SignInAndSignUp from './frames/sing-in-up/sing-in-up.component';

import {auth} from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { getDoc } from '@firebase/firestore';


class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const snap = getDoc(userRef);
          setCurrentUser({
            id: snap.id,
            ...snap
          });  
        }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <Header/>
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopFrame}/>
          <Route path ='/signin' component={SignInAndSignUp}/>
        </Switch>
    </div>
  );}
}

const mapDispatchtoProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchtoProps)(App);
