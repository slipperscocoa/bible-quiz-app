import React from 'react'; 
import { Link } from 'react-router-dom'; 

class UniqueWordsApp extends React.Component {
    render() {
        return (
            <div>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc1">Chapter 1</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc2">Chapter 2</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc3">Chapter 3</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc4">Chapter 4</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc5">Chapter 5</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc6">Chapter 6</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc7">Chapter 7</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc8">Chapter 8</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc14">Chapter 14</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc15">Chapter 15</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc27">Chapter 27</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc28">Chapter 28</Link></a></li>
                </ul>
            </div>
        )
    }
}

export default UniqueWordsApp; 