import React from 'react'; 
import { Link } from 'react-router-dom'; 

class CrosswordsApp extends React.Component {
    render() {
        return (
            <div>
                <h4 className="text-warning">This is a description of the crosswords game. Organized by Section Title</h4>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}}><Link to="/cwc1s1">Chapter 1: The Genealogy of Jesus the Messiah</Link></a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}}><Link to="/cwc1s2">Chapter 1: Joseph Accepts Jesus as His Son</Link></a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}}><Link to="/cwc2s1">Chapter 2: The Magi Visit the Messiah</Link></a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}}><Link to="/cwc2s2">Chapter 2: The Escape to Egypt</Link></a></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a style={{ color: 'white'}}><Link to="/cwc2s3">Chapter 2: The Return to Nazareth</Link></a></li>
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

export default CrosswordsApp; 