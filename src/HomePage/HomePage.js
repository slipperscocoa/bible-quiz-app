import React from 'react';
import './HomePage.css';

import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class HomePageApp extends React.Component {
    render() {
        return (
            <div>
                <HomePageContent />
            </div>
        )
    }
}

class HomePageContent extends React.Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col style={{ paddingTop: '90px' }}>
                            <h1 className="text-warning">Welcome to "Name"!</h1>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Image src="https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU" alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                        <Col>
                            <h6>Each season, certain verses are marked with dots to indicate that quotation questions will only come from those verses. Print this PDF to create your own set of dotted verse flashcards.</h6>
                            <a href="https://www.google.com">Dotted Verse PDF</a>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <p>Click here to check out a few tips and techniques from first place quizzers!</p>
                            <Button variant="outline-info" size="sm"><Link to="/tips">Tips</Link></Button>
                        </Col>
                        <Col>
                            <Image src="https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU" alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Image src="https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU" alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                        <Col>
                            <p>If you are a brand-new quizzer, here is a page that will break down the terminology so you will get the most out of this app.</p>
                            <Button variant="outline-info" size="sm"><Link to="/help">Need Help?</Link></Button>
                        </Col>
                    </Row>
                </Container>
                <Navbar style={{ margin: '10px', borderStyle: 'solid' }} sticky="bottom">
                    <Nav>
                    <h6>Thank you for using "name". Please know that this app is still a work in progress, and errors are inevitable. If you come across them or have suggestions for improvement, contact me at emilyharnish49@gmail.com</h6>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default HomePageApp;