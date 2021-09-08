import React from 'react';
import HomePage from './frames/home/homeFrame.compoenent';
import './App.css';
import { Route, Switch } from 'react-router';
import ShopFrame from './frames/shop/shopFrame.component';

function App() {

  

  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopFrame}/>
        </Switch>
    </div>
  );
}

export default App;
