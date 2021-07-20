import React from 'react';
import './HomePage.css'; 

import { Link } from 'react-router-dom'; 

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 

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
                        <Col>
                            <h1>Mission Statement:</h1>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Image src="https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU" alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                        <Col>
                            <p>Here is just some text that will explain what the picture does.</p>
                            <a href="https://www.google.com">Dotted Verse PDF</a>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <p>Here is just some text that will explain what the picture does.</p>
                            <Button variant="outline-info" size="sm" onClick={this.handleClick}><Link to="/tips">Tips</Link></Button>
                        </Col>
                        <Col>
                            <Image src="https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU" alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Image src="https://i.picsum.photos/id/922/200/200.jpg?hmac=2ePRMbZ5V-IoV8hGz1XNSAUmQLPTOtYIAxgBHVWD3cU" alt="dotted verses" className="LinkPics hover-zoom" fluid></Image>
                        </Col>
                        <Col>
                            <p>Here is just some text that will explain what the picture does.</p>
                            <Button variant="outline-info" size="sm">Dotted Verses PDF</Button>{' '}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePageApp; 