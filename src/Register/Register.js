import React from 'react'; 
import { Form, Button, Container } from 'react-bootstrap';

class RegisterApp extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            firstName: "",
            lastName: "", 
            email: "",
            password: ""
        }
        this.onClicking = this.onClicking.bind(this); 
    }

    onClicking = (e) => {
        this.setState(fetch("http://localhost:8080/register", {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify({ firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password })
        }));

        fetch("http://localhost:8080/api/user/register", {
            headers: { 'Accept' : 'application/json', 'Content-Type' : 'application/json' }, 
            method: "POST", 
            body: JSON.stringify({ username: this.state.firstName, password: this.state.password })
        }); 
    }

    onFirstNameChange = (e) => this.setState({ ...this.state, firstName: e.target.value });
    onLastNameChange = (e) => this.setState({ ...this.state, lastName: e.target.value });
    onEmailChange = (e) => this.setState({ ...this.state, email: e.target.value });
    onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });
    
    render() {
        return (
            <div>
                <br/>
                <h1>Sign up for a Quiz Whiz Account!</h1>
                <br/>
                <br/>
                <Container className="text-left">
                    <Form onSubmit={this.onClicking}>
                        <Form.Group controlId="formBasicText" role="form">
                            <Form.Label>First Name (Username):</Form.Label>
                            <Form.Control type="text" onChange={this.onFirstNameChange}/>
                         </Form.Group>

                        <Form.Group controlId="formBasicText" role="form">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" onChange={this.onLastNameChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicUrl" role="form">
                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control type="email" onChange={this.onEmailChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" onChange={this.onPasswordChange}/>
                        </Form.Group>

                        <Form.Group onSubmit={this.onClicking}>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default RegisterApp; 