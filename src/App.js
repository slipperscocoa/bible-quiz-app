import React, { useState } from 'react'; 
import './App.css';
// import LoginApp from './Login/LoginApp'; 
// import HomePageApp from './HomePage/HomePage';
import NavbarApp from './HomePage/Navbar.js'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    // const [ token, setToken ] = useState(); 

    // if(!token) {
    //     return <LoginApp setToken={setToken} />
    // }

    return (
    <div className="App">
      <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {/* <HomePageApp /> */}
                    <NavbarApp />
                </Route>
            </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
