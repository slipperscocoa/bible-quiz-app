import React, { Component } from 'react'; 
import './App.css';
// import LoginApp from './Login/LoginApp'; 
// import HomePageApp from './HomePage/HomePage';
import NavbarApp from './HomePage/Navbar.js'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactGA from 'react-ga';

// function App() {
//     // const [ token, setToken ] = useState(); 

//     // if(!token) {
//     //     return <LoginApp setToken={setToken} />
//     // }

//     setGA = () => {
//       ReactGA.initialize('UA-207178733-1');
//       ReactGA.pageview('Init page view');
//     };
//     componentDidMount = () => {
//       this.setGA();
//     };

//     return (
//     <div className="App">
//       <div>
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/">
//                     {/* <HomePageApp /> */}
//                     <NavbarApp />
//                 </Route>
//             </Switch>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

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
                      {/* <HomePageApp /> */}
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
