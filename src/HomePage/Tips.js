import React from 'react'; 

class TipsApp extends React.Component {
    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center', padding: '10px'}}>"Name", "Name", "Name", and "Name" share some of the strategies they use when memorizing and quizzing:</h2> 
                <br/>
                <br/>
                <h3 className="text-warning">Memorization Tactics:</h3>
                <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                    <li>Idea One</li>
                    <li>Idea Two</li>
                    <li>Idea Three</li>
                    <li>Idea Four</li>
                    <li>Idea Five</li>
                </ul>
                <h3 className="text-warning">Quizzing Tactics:</h3>
                <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                    <li>Idea One</li>
                    <li>Idea Two</li>
                    <li>Idea Three</li>
                    <li>Idea Four</li>
                    <li>Idea Five</li>
                </ul>
            </div>
        )
    }
}

export default TipsApp; 