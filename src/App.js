import React from 'react';
import HomePage from './frames/home/homeFrame.compoenent';
import './App.css';
import { Route, Switch } from 'react-router';
import ShopFrame from './frames/shop/shopFrame.component';
import Header from './components/header/header.component.js';
import SignInAndSignUp from './frames/sing-in-up/sing-in-up.component';

import {auth} from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
      this.setState({currentUser: user})
    })
  }

  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopFrame}/>
          <Route path ='/signin' component={SignInAndSignUp}/>
        </Switch>
    </div>
  );}
}

export default App;
