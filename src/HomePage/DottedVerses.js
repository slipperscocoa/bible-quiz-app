import React from 'react'; 

class DottedVersesApp extends React.Component {
    render() {
        return (
            <div style={{ padding: '15px' }}>
                <h2 className="text-warning" style={{ textAlign: 'center' }}>Dotted Verses</h2>
                <br/>
                <p>The link below will take you to a Google Doc from which you can print flashcards to quiz yourself. The pages
                    have been organized by meet (so you don't have to print every dotted verse from every chapter right at the 
                    beginning of the season). It is recommended that you only view and print this document from a desktop, and
                    you must print it double-sided in order to get the reference and verse to match up. 
                </p>
                <a href="https://docs.google.com/document/d/13vDvjmK_wdSz1B-wwT0xqaR8-EglzgxgS6FRVM7zM6M/edit?usp=sharing">Dotted Verse Google Doc</a>
            </div>
        )
    }
}

export default DottedVersesApp; 