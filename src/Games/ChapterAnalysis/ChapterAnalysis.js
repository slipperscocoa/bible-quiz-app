import React from 'react';
import { Link } from 'react-router-dom'; 

class ChapterAnalysisApp extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4 className="text-warning">Chapter Analysis</h4>
                <br/>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac1">Chapter 1</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac2">Chapter 2</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac3">Chapter 3</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac4">Chapter 4</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac5">Chapter 5</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac6">Chapter 6</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac7">Chapter 7</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac8">Chapter 8</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac14">Chapter 14</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac15">Chapter 15</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac27">Chapter 27</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac28">Chapter 28</Link></li>
                </ul>
                <br/>
                <br/>
            </div>
        )
    }
}

export default ChapterAnalysisApp;