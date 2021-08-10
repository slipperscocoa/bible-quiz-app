import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';

class CWC5S5App extends React.Component {
    render() {
        return (
            <div>
                <a style={{ fontSize: '36px' }} href="https://crosswordlabs.com/embed/murder-155">Click for Crossword!</a>
                <Navbar style={{ margin: '10px', borderStyle: 'solid' }} fixed="bottom">
                    <Nav>
                        <h6>Note: Clicking on the link above will
                            redirect you to another site. I am currently working on embedding these crosswords into my
                            app, but for now, here is where you can access them. Enjoy!
                        </h6>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default CWC5S5App; 