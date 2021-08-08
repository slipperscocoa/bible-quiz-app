import React from 'react';
import { Link } from 'react-router-dom'; 

class ChapterAnalysisApp extends React.Component {
    render() {
        return (
            <div>
                <h4 className="text-warning">Chapter Analysis </h4>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac1">Chapter 1</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac2">Chapter 2</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac3">Chapter 3</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac4">Chapter 4</Link></li>
                    <li style={{ paddingBottom: '15px' }}><Link style={{ color: 'white'}} to="/cac5">Chapter 5</Link></li>
                    {/* <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc6">Chapter 6</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc7">Chapter 7</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc8">Chapter 8</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc14">Chapter 14</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc15">Chapter 15</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc27">Chapter 27</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc28">Chapter 28</Link></a></li> */}
                </ul>
                <h4>Don't worry! Other chapters are coming!</h4>
            </div>
        )
    }
}

export default ChapterAnalysisApp;