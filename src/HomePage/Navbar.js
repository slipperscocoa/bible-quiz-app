import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import GamesApp from '../Games/Games.js'; 
import QuizzesApp from '../Quizzes/Quizzes'; 

class NavbarApp extends React.Component {
    render() {
        return(
            <div>
            <Router>
                <Navbar bg="info" className="HomePageNavBar" fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Link to="/" style={{ color: "black", margin: "15px" }}>Home</Link>
                        <Link to="/games" style={{ color: "black", margin: "15px" }}>Games</Link>
                        <Link to="/quizzes" style={{ color: "black", margin: "15px" }}>Quizzes</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                    
                    <Switch>
                        <Route path="/games">
                            <GamesApp />
                        </Route>
                        <Route path="/quizzes">
                            <QuizzesApp />
                        </Route>
                    </Switch>
                    </Router>
            </div>
        )
    }
    
    
}

export default NavbarApp; 