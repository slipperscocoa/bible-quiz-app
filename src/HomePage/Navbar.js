import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import QuizzesApp from '../Quizzes/Quizzes'; 

import ChapterAnalysisApp from '../Games/ChapterAnalysis/ChapterAnalysis'; 
import CrosswordsApp from '../Games/Crosswords/Crosswords'; 
import DottedVersesApp from '../Games/DottedVerses/DottedVerses'; 
import UniqueWordsApp from '../Games/UniqueWords/UniqueWords'; 

class NavbarApp extends React.Component {
    render() {
        return(
            <div>
            <Router>
                <Navbar bg="info" className="HomePageNavBar" fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Link to="/" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Home</Link>
                        <NavDropdown title="Games" id="basic-nav-dropdown" style={{ color: "black", margin: "15px" }}>
                            <li><Link to="/crosswords">Crosswords</Link></li>
                            <li><Link to="/chapteranalysis">Chapter Analysis</Link></li>
                            <li><Link to="/dottedverses">Dotted Verses</Link></li>
                            <li><Link to="/uniquewords">Unique Words</Link></li>
                        </NavDropdown>
                        <Link to="/quizzes" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Quizzes</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                    
                    <Switch>
                        <Route path="/crosswords">
                            <CrosswordsApp />
                        </Route>
                        <Route path="/chapteranalysis">
                            <ChapterAnalysisApp />
                        </Route>
                        <Route path="/dottedverses">
                            <DottedVersesApp />
                        </Route>
                        <Route path="/uniquewords">
                            <UniqueWordsApp />
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