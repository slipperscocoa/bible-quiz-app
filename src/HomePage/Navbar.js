import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import RegisterApp from '../Register/RegisterApp';
import HomePageApp from './HomePage'; 
import DottedVersesApp from './DottedVerses';
import TipsApp from './Tips';
import HelpApp from './Help';

import QuizzesApp from '../Quizzes/Quizzes'; 
import QC1S1App from '../Quizzes/QC1S1';
import QC1S2App from '../Quizzes/QC1S2';
import QC2S1App from '../Quizzes/QC2S1';
import QC2S2App from '../Quizzes/QC2S2';
import QC2S3App from '../Quizzes/QC2S3';

import ChapterAnalysisApp from '../Games/ChapterAnalysis/ChapterAnalysis';

import CrosswordsApp from '../Games/Crosswords/Crosswords'; 
import CWC1S1App from '../Games/Crosswords/CWC1S1';
import CWC1S2App from '../Games/Crosswords/CWC1S2';
import CWC2S1App from '../Games/Crosswords/CWC2S1';
import CWC2S2App from '../Games/Crosswords/CWC2S2';
import CWC2S3App from '../Games/Crosswords/CWC2S3';
import CWC3S1App from '../Games/Crosswords/CWC3S1';
import CWC3S2App from '../Games/Crosswords/CWC3S2';
import CWC4S1App from '../Games/Crosswords/CWC4S1';
import CWC4S2App from '../Games/Crosswords/CWC4S2';
import CWC4S3App from '../Games/Crosswords/CWC4S3';
import CWC4S4App from '../Games/Crosswords/CWC4S4';
import CWC5S1App from '../Games/Crosswords/CWC5S1';
import CWC5S2App from '../Games/Crosswords/CWC5S2';
import CWC5S3App from '../Games/Crosswords/CWC5S3';
import CWC5S4App from '../Games/Crosswords/CWC5S4';
import CWC5S5App from '../Games/Crosswords/CWC5S5';
import CWC5S6App from '../Games/Crosswords/CWC5S6';
import CWC5S7App from '../Games/Crosswords/CWC5S7';
import CWC5S8App from '../Games/Crosswords/CWC5S8';
import CWC5S9App from '../Games/Crosswords/CWC5S9';
import CWC5S10App from '../Games/Crosswords/CWC5S10';

import UniqueWordsApp from '../Games/UniqueWords/UniqueWords';
import UWC1App from '../Games/UniqueWords/UWC1'; 
import UWC2App from '../Games/UniqueWords/UWC2';
import UWC3App from '../Games/UniqueWords/UWC3';
import UWC4App from '../Games/UniqueWords/UWC4';
import UWC5App from '../Games/UniqueWords/UWC5';
import UWC6App from '../Games/UniqueWords/UWC6';
import UWC7App from '../Games/UniqueWords/UWC7';
import UWC8App from '../Games/UniqueWords/UWC8';
import UWC14App from '../Games/UniqueWords/UWC14';
import UWC15App from '../Games/UniqueWords/UWC15';
import UWC27App from '../Games/UniqueWords/UWC27';
import UWC28App from '../Games/UniqueWords/UWC28';


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
                                <li><Link to="/crosswords" >Crosswords</Link></li>
                                <li><Link to="/chapteranalysis">Chapter Analysis</Link></li>
                                <li><Link to="/uniquewords">Unique Words</Link></li>
                            </NavDropdown>
                            <Link to="/quizzes" style={{ color: "black", margin: "15px", marginTop: "23px" }}>Quizzes</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                
                    <Switch>
                        <Route exact path="/" component={HomePageApp} />

                        <Route exact path="/crosswords" component={CrosswordsApp} />
                        <Route exact path="/cwc1s1" component={CWC1S1App} />
                        <Route exact path="/cwc1s2" component={CWC1S2App} />
                        <Route exact path="/cwc2s1" component={CWC2S1App} />
                        <Route exact path="/cwc2s2" component={CWC2S2App} />
                        <Route exact path="/cwc2s3" component={CWC2S3App} />
                        <Route exact path="/cwc3s1" component={CWC3S1App} />
                        <Route exact path="/cwc3s2" component={CWC3S2App} />
                        <Route exact path="/cwc4s1" component={CWC4S1App} />
                        <Route exact path="/cwc4s2" component={CWC4S2App} />
                        <Route exact path="/cwc4s3" component={CWC4S3App} />
                        <Route exact path="/cwc4s4" component={CWC4S4App} />
                        <Route exact path="/cwc5s1" component={CWC5S1App} />
                        <Route exact path="/cwc5s2" component={CWC5S2App} />
                        <Route exact path="/cwc5s3" component={CWC5S3App} />
                        <Route exact path="/cwc5s4" component={CWC5S4App} />
                        <Route exact path="/cwc5s5" component={CWC5S5App} />
                        <Route exact path="/cwc5s6" component={CWC5S6App} />
                        <Route exact path="/cwc5s7" component={CWC5S7App} />
                        <Route exact path="/cwc5s8" component={CWC5S8App} />
                        <Route exact path="/cwc5s9" component={CWC5S9App} />
                        <Route exact path="/cwc5s10" component={CWC5S10App} />
                            
                        <Route exact path="/chapteranalysis" component={ChapterAnalysisApp} />
                                                        
                        <Route exact path="/uniquewords" component={UniqueWordsApp} />
                        <Route exact path="/uwc1" component={UWC1App} />
                        <Route exact path="/uwc2" component={UWC2App} />
                        <Route exact path="/uwc3" component={UWC3App} />
                        <Route exact path="/uwc4" component={UWC4App} />
                        <Route exact path="/uwc5" component={UWC5App} />
                        <Route exact path="/uwc6" component={UWC6App} />
                        <Route exact path="/uwc7" component={UWC7App} />
                        <Route exact path="/uwc8" component={UWC8App} />
                        <Route exact path="/uwc14" component={UWC14App} />
                        <Route exact path="/uwc15" component={UWC15App} />
                        <Route exact path="/uwc27" component={UWC27App} />
                        <Route exact path="/uwc28" component={UWC28App} />
                            
                        <Route exact path="/quizzes" component={QuizzesApp} />
                        <Route exact path="/qc1s1" component={QC1S1App} />
                        <Route exact path="/qc1s2" component={QC1S2App} />
                        <Route exact path="/qc2s1" component={QC2S1App} />
                        <Route exact path="/qc2s2" component={QC2S2App} />
                        <Route exact path="/qc2s3" component={QC2S3App} />

                        <Route exact path="/dottedverses" component={DottedVersesApp} />

                        <Route exact path="/tips" component={TipsApp} />

                        <Route exact path="/help" component={HelpApp} />

                        <Route exact path="/register" component={RegisterApp} />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default NavbarApp; 