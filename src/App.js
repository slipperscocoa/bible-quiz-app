import React, { Component } from 'react'; 
import './App.css';
import NavbarApp from './HomePage/Navbar.js'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';


class App extends Component {
  setGA = () => {
    ReactGA.initialize('UA-207178733-1');
    ReactGA.pageview('Init page view');
  };
  componentDidMount = () => {
    this.setGA();
  };

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/">
                      <NavbarApp />
                  </Route>
              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
