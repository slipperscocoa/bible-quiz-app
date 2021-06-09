import React from 'react'; 
import { Card } from 'react-bootstrap';  
import { Redirect } from 'react-router-dom'; 

class GamesApp extends React.Component {
    render() {
        return(
            <div>
                <GamesFeed />
            </div>
        )
    }
}


class GamesFeed extends React.Component {
    constructor(props) {
        super(props); 
        this.onClicking = this.onClicking.bind(this); 
    }

    onClicking = (e) => {
        console.log("The link was clicked");
        return <Redirect to="/crosswords" />
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} action="/crosswords">
                    <Card.Img variant="top" src="https://i.picsum.photos/id/321/200/200.jpg?hmac=V8qQPhFl_8KjI8JgGI74LQepgBOnxdXOuZmBclxHU90" />
                    <Card.Body>
                        <Card.Title style={{ color: "black "}}>Crosswords</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        {/* <Button variant="primary" onClick={this.onClicking}>Crosswords</Button> */}
                        <a href="/crosswords">Crosswords</a>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GamesApp;