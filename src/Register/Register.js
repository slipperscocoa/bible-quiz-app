import React from 'react'; 
import { Form, Button, Container } from 'react-bootstrap';

class RegisterApp extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>Sign up for a "App Name" Account!</h1>
                <br/>
                <br/>
                <Container className="text-left">
                    <Form onSubmit={this.onClicking}>
                        <Form.Group controlId="formBasicText" role="form">
                            <Form.Label>First Name:</Form.Label>
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