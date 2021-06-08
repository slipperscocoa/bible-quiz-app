import React from 'react'; 

class CrosswordsApp extends React.Component {
    constructor(props) {
        super(props); 
        this.onClick = this.onClick.bind(this); 
    }

    onClick = (e) => {
        alert("This is the Crosswords page"); 
        console.log(e); 
    }
    
    render() {
        return (
            <div>
                <button onClick={this.onClick}>Click</button>
            </div>
        )
    }
}

export default CrosswordsApp; 