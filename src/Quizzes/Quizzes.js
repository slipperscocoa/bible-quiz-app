import React from 'react'; 
import { Link } from 'react-router-dom'; 

class QuizzesApp extends React.Component {
    render() {
        return(
            <div>
                <h4 className="text-warning">These quizzes are the ultimate test to determine how well you know each verse. </h4>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc1s1">Chapter 1: The Genealogy of Jesus the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc1s2">Chapter 1: Joseph Accepts Jesus as His Son</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc2s1">Chapter 2: The Magi Visit the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc2s2">Chapter 2: The Escape to Egypt</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/qc2s3">Chapter 2: The Return to Nazareth</Link></li>
                    {/* <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc6">Chapter 6</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc7">Chapter 7</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc8">Chapter 8</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc14">Chapter 14</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc15">Chapter 15</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc27">Chapter 27</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc28">Chapter 28</Link></a></li> */}
                </ul>
            </div>
        )
    }
}

export default QuizzesApp;