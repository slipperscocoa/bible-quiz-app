import React from 'react'; 
import { Link } from 'react-router-dom'; 

class UniqueWordsApp extends React.Component {
    render() {
        return (
            <div>
                <h3 className="text-warning" style={{ paddingTop: '90px' }}>Unique Words</h3>
                <h6 className="text-info" style={{ margin: '10px' }}>Throughout the Scripture portion, there are words that only appear ONCE in the entire book. This Fill-in-the-Blank game will test your knowledge of these unique words.</h6>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc1">Chapter 1</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc2">Chapter 2</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc3">Chapter 3</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc4">Chapter 4</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc5">Chapter 5</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc6">Chapter 6</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc7">Chapter 7</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc8">Chapter 8</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc14">Chapter 14</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc15">Chapter 15</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc27">Chapter 27</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a><Link className="text-white" to="/uwc28">Chapter 28</Link></a></li>
                </ul>
            </div>
        )
    }
}

export default UniqueWordsApp; 