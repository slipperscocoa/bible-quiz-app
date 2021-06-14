import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import HomePageApp from './HomePage'; 
import QuizzesApp from '../Quizzes/Quizzes'; 
import ChapterAnalysisApp from '../Games/ChapterAnalysis/ChapterAnalysis'; 
import CrosswordsApp from '../Games/Crosswords/Crosswords'; 
import DottedVersesApp from '../Games/DottedVerses/DottedVerses'; 
import UniqueWordsApp from '../Games/UniqueWords/UniqueWords';
import TipsApp from './Tips'; 

class NavbarApp extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Navbar bg="info" className="HomePageNavBar" sticky="top">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav>
                            <Link to="/" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Home</Link>
                            <NavDropdown title="Games" id="basic-nav-dropdown" style={{ color: "black", margin: "15px" }}>
                                <li><Link to="/crosswords" >Crosswords</Link></li>
                                <li><Link to="/chapteranalysis">Chapter Analysis</Link></li>
                                <li><Link to="/dottedverses">Dotted Verses</Link></li>
                                <li><Link to="/uniquewords">Unique Words</Link></li>
                            </NavDropdown>
                            <Link to="/quizzes" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Quizzes</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                
                    <Link to="/tips">Link To Tips</Link>

                    <Switch>
                        <Route exact path="/" component={HomePageApp} />

                        <Route exact path="/crosswords" component={CrosswordsApp} />
                            
                        <Route exact path="/chapteranalysis" component={ChapterAnalysisApp} />
                            
                        <Route exact path="/dottedverses" component={DottedVersesApp} />
                            
                        <Route exact path="/uniquewords" component={UniqueWordsApp} />
                            
                        <Route exact path="/quizzes" component={QuizzesApp} />

                        <Route exact path="/tips" component={TipsApp} />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default NavbarApp; 