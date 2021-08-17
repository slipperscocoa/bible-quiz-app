import React from 'react'; 
import RegisterApp from '../Register/Register'; 
import Camera from '../Images/Camera.svg'; 

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class Login extends React.Component {
    // constructor(props) {
    //     super(props); 
    //     this.state = {
    //         password = "",
    //         username = "",
    //     };
    // }

    // onUsernameChange = (e) => this.setState({ ...this.state, username: e.target.value });
    // onPasswordChange = (e) => this.setState({ ...this.state, password: e.target.value });
    // onLogin = () => {
    //     if (this.state.username === "QuizWhiz" && this.state.password === "Matthew") {
    //         console.log("This works");
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <h1>Login</h1>
    //             <br/>
    //             <br/>
    //             <br/>
    //             <div>
    //                 <label htmlFor="username">Username: </label>
    //                 <br/>
    //                 <input type="text" id="username" name="username" onChange={this.onUsernameChange} />
    //             </div>
    //             <br/>
    //             <div>
    //                 <label htmlFor="password">Password: </label>
    //                 <br/>
    //                 <input type="password" id="password" name="password" onChange={this.onPasswordChange} />
    //             </div>
    //             <br/>
    //             <div>
    //                 <button onClick={this.onLogin}>Log In</button>
    //             </div>
    //         </div>
    //     )
    // }
        render() {
        if (!this.props.token || this.props.token === "") {
            return (
                <div>
                    <div>
                        <h1>Login</h1>
                    </div>
                    <br/>
                    {/* <div>
                        <img 
                            src={Camera}
                            alt="TBQ Logo"
                            width="60"
                            height="60"
                        ></img>
                    </div> */}
                    <br/>
                    <br/>
                    <div style={{ color: "red" }}>{(this.props.error ? this.props.error : '')}</div>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <br/>
                        <input type="text" id="username" name="username" onChange={this.props.onUsernameChange} />
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <br/>
                        <input type="password" id="password" name="password" onChange={this.props.onPasswordChange} />
                    </div>
                    <br/>
                    <div>
                        <button onClick={this.props.onLogin}>Log In</button>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <p>Don't have an account? Create one <a href="/register">here!</a></p>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <Router>
                            <Switch>
                                <Route path="/register">
                                    <RegisterApp />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            );
        } else { return (<div>Logged In</div>); }
    }
}

export default Login; 