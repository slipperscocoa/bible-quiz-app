import React from 'react'; 
// import { useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 



class CrosswordsApp extends React.Component {
    // useScript = () => {
    //     useEffect(() => {
    //         const script = document.createElement('script'); 
    
    //         script.src = "https://www.puzzlefast.com/en/puzzles/2021072723590350E/embed-script?width=600px&height=800px"; 
    //         script.async = true; 
    
    //         document.body.appendChild(script); 
    
    //         return () => {
    //             document.body.removeChild(script);
    //         }
    //     }, [url]);
    // };
    
    render() {
        return (
            <div>
                <h4 className="text-warning">This is a description of the crosswords game. Organized by Section Title</h4>
                <br/>
                <ul style={{ listStyleType: 'none', fontSize: '20px' }}>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc1s1">Chapter 1: The Genealogy of Jesus the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc1s2">Chapter 1: Joseph Accepts Jesus as His Son</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc2s1">Chapter 2: The Magi Visit the Messiah</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc2s2">Chapter 2: The Escape to Egypt</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><Link style={{ color: 'white'}} to="/cwc2s3">Chapter 2: The Return to Nazareth</Link></li>
                    <li style={{ paddingBottom: '15px', textAlign: 'left' }}><a href="https://crosswordhobbyist.com/938513/FAVORITE-AUTHORS" style={{ color: 'white'}}>This is just a trial</a></li>

                    {/* <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc6">Chapter 6</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc7">Chapter 7</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc8">Chapter 8</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc14">Chapter 14</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc15">Chapter 15</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc27">Chapter 27</Link></a></li>
                    <li style={{ paddingBottom: '15px' }}><a style={{ color: 'white'}}><Link to="/uwc28">Chapter 28</Link></a></li> */}
                </ul>
                {/* <p><script type="text/javascript" src="https://CrosswordHobbyist.com/embedjs?puzzle_id=938513"></script></p> */}
                {/* <a script={{ type="text/javascript", src="https://CrosswordHobbyist.com/embedjs?puzzle_id=938513"}}>Click</a> */}
                <a href="https://CrosswordHobbyist.com/embedjs?puzzle_id=938513">Click</a>

                {/* <button onClick={this.useScript}>Click</button> */}
            </div>
        )
    }
}

export default CrosswordsApp; 