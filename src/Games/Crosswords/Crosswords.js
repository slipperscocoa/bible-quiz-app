import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useHistory } from 'react-router-dom';

class CrosswordsApp extends React.Component {
    constructor(props) {
        super(props); 
        this.props.history.push("/");
        this.props.history.push(this.props.match.url);
    }
    render() {
        return (
            <div>
                <h3 className="text-warning" style={{ paddingTop: '100px' }}>Crossword Puzzles</h3>
                <h6 className="text-white" style={{ margin: '10px', marginTop: '20px' }}>
                    Test your knowledge of each section title's content with these crosswords!
                    Note: Clicking on the link below will redirect you to another site. I am 
                    currently working on embedding these crosswords into my app, but for now, 
                    here is where you can access them. Enjoy!
                </h6>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-genealogy-of-jesus-the-messiah">Chapter 1: The Genealogy of Jesus the Messiah</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/joseph-accepts-jesus-as-his-son">Chapter 1: Joseph Accepts Jesus as His Son</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-magi-visit-the-messiah">Chapter 2: The Magi Visit the Messiah</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-escape-to-egypt">Chapter 2: The Escape to Egypt</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-return-to-nazareth">Chapter 2: The Return to Nazareth</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/john-the-baptist-prepares-the-way">Chapter 3: John the Baptist Prepares the Way</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-baptism-of-jesus-4">Chapter 3: The Baptism of Jesus</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/jesus-is-tested-in-the-wilderness-2">Chapter 4: Jesus is Tested in the Wilderness</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/jesus-begins-to-preach">Chapter 4: Jesus Begins to Preach</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/jesus-calls-his-first-disciples">Chapter 4: Jesus Calls His First Disciples</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/jesus-heals-the-sick">Chapter 4: Jesus Heals the Sick</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/introduction-to-the-sermon-on-the-mount">Chapter 5: Introduction to the Sermon on the Mount</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-beatitudes-37">Chapter 5: The Beatitudes</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/salt-and-light-2">Chapter 5: Salt and Light</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-fulfillment-of-the-law">Chapter 5: The Fulfillment of the Law</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/murder-155">Chapter 5: Murder</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/adultery">Chapter 5: Adultery</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/divorce-19">Chapter 5: Divorce</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/oaths">Chapter 5: Oaths</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/eye-for-eye">Chapter 5: Eye for Eye</a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/love-for-enemies">Chapter 5: Love for Enemies</a></li>
                </ul>
                <h4 className="text-white">Don't worry! Other chapters are coming!</h4>
            </div>
        )
    }
}

export default CrosswordsApp; 