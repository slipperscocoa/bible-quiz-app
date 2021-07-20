import React from 'react'; 
import { Link } from 'react-router-dom'; 

class UniqueWordsApp extends React.Component {
    render() {
        return (
            <div>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/chapterOne">Chapter 1</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 2</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 3</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 4</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 5</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 6</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 7</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 8</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 14</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 15</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 27</li>
                    <li style={{ paddingBottom: '15px' }}>Chapter 28</li>
                </ul>
            </div>
        )
    }
}

export default UniqueWordsApp; 