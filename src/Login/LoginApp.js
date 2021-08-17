// import React from 'react';
// import Login from './Login'; 
// import NavbarApp from '../HomePage/Navbar'; 
// import { Navbar } from 'react-bootstrap';

// class LoginApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             token: "", 
//             username: "", 
//             password: "", 
//             values: [], 
//             error: "" 
//         };
//     }

//     onLogin = () => {
//         this.setState(fetch("http://localhost:8080/login", {
//             headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//             method: "POST",
//             body: JSON.stringify({ username: this.state.username, password: this.state.password })
//         }))
//             .then(res => res.headers.get("authorization"))
//             .then(token => {
//                 if (token) {
//                     this.setState({ ...this.state, token: token });
//                 } else {
//                     this.setState({ ...this.state, error: "Unable to login with username and password." });
//                 }
//             });
//         // if (this.state.username === "QuizWhiz" && this.state.password === "Matthew") {
//         //     <NavbarApp />
//         // }
//         // else {
//         //     this.setState({ ...this.state, error: "Unable to login with username and password." });
//         // }
//     }

//     onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
//     onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     {(!this.state.token || this.state.token === "")
//                         ? (<Login onUsernameChange={this.onUsernameChange}
//                             onPasswordChange={this.onPasswordChange}
//                             onLogin={this.onLogin}
//                             error={this.state.error}></Login>)
//                         : (<NavbarApp />)}
//                 </header>
//             </div>
//         );
//     }
// }

// export default LoginApp; 