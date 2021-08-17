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
                <h6 className="text-white" style={{ margin: '10px', marginTop: '20px' }}>Test your knowledge of each section title's content with these crosswords!</h6>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}} href="https://crosswordlabs.com/embed/the-genealogy-of-jesus-the-messiah">Chapter 1: The Genealogy of Jesus the Messiah</a></li>
                    {/* <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc1s1">Chapter 1: The Genealogy of Jesus the Messiah</Link></li> */}
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc1s2">Chapter 1: Joseph Accepts Jesus as His Son</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc2s1">Chapter 2: The Magi Visit the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc2s2">Chapter 2: The Escape to Egypt</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc2s3">Chapter 2: The Return to Nazareth</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc3s1">Chapter 3: John the Baptist Prepares the Way</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc3s2">Chapter 3: The Baptism of Jesus</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc4s1">Chapter 4: Jesus is Tested in the Wilderness</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc4s2">Chapter 4: Jesus Begins to Preach</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc4s3">Chapter 4: Jesus Calls His First Disciples</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc4s4">Chapter 4: Jesus Heals the Sick</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s1">Chapter 5: Introduction to the Sermon on the Mount</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s2">Chapter 5: The Beatitudes</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s3">Chapter 5: Salt and Light</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s4">Chapter 5: The Fulfillment of the Law</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s5">Chapter 5: Murder</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s6">Chapter 5: Adultery</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s7">Chapter 5: Divorce</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s8">Chapter 5: Oaths</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s9">Chapter 5: Eye for Eye</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc5s10">Chapter 5: Love for Enemies</Link></li>
                </ul>
                <h4 className="text-white">Don't worry! Other chapters are coming!</h4>
            </div>
        )
    }
}

export default CrosswordsApp; 