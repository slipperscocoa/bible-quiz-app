import React from 'react'; 
import { Card } from 'react-bootstrap'; 

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
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.picsum.photos/id/321/200/200.jpg?hmac=V8qQPhFl_8KjI8JgGI74LQepgBOnxdXOuZmBclxHU90" />
                    <Card.Body>
                        <Card.Title style={{ color: "black "}}>Crosswords</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        {/* <input type="submit" value="Go to Crossword" src="/crosswords" onClick={this.onClick}/> */}
                        {/* <Button variant="primary"><Link to="/crosswords">Go somewhere</Link></Button> */}
                        {/* <h5><Link to="/crosswords">Go somewhere</Link></h5> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GamesApp;