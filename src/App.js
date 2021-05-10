import React from 'react'
import Header from './components/Header'
import Photos from './components/Photos'
import Cart from './components/Cart'
import {Route,Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' ><Photos/></Route>
        <Route path='/cart' ><Cart/></Route>
      </Switch>
    </div>
  );
}

export default App;
