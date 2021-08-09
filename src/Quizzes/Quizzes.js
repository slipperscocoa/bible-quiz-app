import React from 'react'; 
import { Link } from 'react-router-dom'; 

class QuizzesApp extends React.Component {
    render() {
        return(
            <div>
                <h3 className="text-warning" style={{ paddingTop: '100px' }}>Quizzes</h3>
                <h6 style={{ margin: '10px', marginTop: '20px' }}>These quizzes are the ultimate test to determine how well you know each verse. 
                    Rearrange the verses by putting each word in its correct place. If the verse is too long, it will be continued on the next slide.
                </h6>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc1s1">Chapter 1: The Genealogy of Jesus the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc1s2">Chapter 1: Joseph Accepts Jesus as His Son</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc2s1">Chapter 2: The Magi Visit the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc2s2">Chapter 2: The Escape to Egypt</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc2s3">Chapter 2: The Return to Nazareth</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc3s1">Chapter 3: John the Baptist Prepares the Way</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc3s2">Chapter 3: The Baptism of Jesus</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc4s1">Chapter 4: Jesus is Tested in the Wilderness</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc4s2">Chapter 4: Jesus Begins to Preach</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc4s3">Chapter 4: Jesus Calls His First Disciples</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc4s4">Chapter 4: Jesus Heals the Sick</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s1">Chapter 5: Introduction to the Sermon on the Mount</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s2">Chapter 5: The Beatitudes</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s3">Chapter 5: Salt and Light</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s4">Chapter 5: The Fulfillment of the Law</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s5">Chapter 5: Murder</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s6">Chapter 5: Adultery</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s7">Chapter 5: Divorce</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s8">Chapter 5: Oaths</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s9">Chapter 5: Eye for Eye</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc5s10">Chapter 5: Love for Enemies</Link></li>
                </ul>
                <h4>Don't worry! Other chapters are coming!</h4>
            </div>
        )
    }
}

export default QuizzesApp;