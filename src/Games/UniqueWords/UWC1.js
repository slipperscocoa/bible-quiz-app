import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

var score = 0; 

class UWC1App extends React.Component {
    
    genealogy = (e) => {
        var answer = e.target.value; 

        if (answer === "genealogy") {
            console.log("You are correct");
            document.getElementById("genealogy").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "genealogy") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    zerah = (e) => {
        var answer = e.target.value; 

        if (answer === "Zerah") {
            console.log("You are correct");
            document.getElementById("zerah").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Zerah") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    tamar = (e) => {
        var answer = e.target.value; 

        if (answer === "Tamar") {
            console.log("You are correct");
            document.getElementById("tamar").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Tamar") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    rahab = (e) => {
        var answer = e.target.value; 

        if (answer === "Rahab") {
            console.log("You are correct");
            document.getElementById("rahab").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Rahab") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    ruth = (e) => {
        var answer = e.target.value; 

        if (answer === "Ruth") {
            console.log("You are correct");
            document.getElementById("ruth").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Ruth") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    uriahs = (e) => {
        var answer = e.target.value; 

        if (answer === "Uriah's") {
            console.log("You are correct");
            document.getElementById("uriahs").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Uriah's") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    generations = (e) => {
        var answer = e.target.value; 

        if (answer === "generations") {
            console.log("You are correct");
            document.getElementById("generations").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "generations") {
            console.log("You are not correct");
            document.getElementById("genealogy").style.color='red';
        }
    }

    reset = (e) => {
        console.log("Reset button was clicked");
        score = 0;
    }

    getScore =() => {
        alert("You got " + score + "/7 correct!");
    }

    render() {
        return (
            <div>
                <Form style={{ paddingTop: '90px' }}>
                    <Form.Group>
                        <Form.Text><h1>Matthew Chapter 1</h1></Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text><h3>Instructions:</h3></Form.Text>
                        <Form.Text>Fill in each blank with the correct unique word. Green text means you gave the 
                            right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:1 This is the </Form.Text>
                        <Form.Control id="genealogy" type="text" size="sm" onChange={this.genealogy}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>of Jesus the Messiah the son of David, the son of Abraham:</Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Text style={{ fontSize: '20px' }}>1:2 Abraham was the father of Isaac, Isaac the father of Jacob, Jacob the father of Judah and his brothers,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:3 Judah the father of Perez and  </Form.Text>
                        <Form.Control id="zerah" type="text" size="sm" onChange={this.zerah}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>whose mother was </Form.Text>
                        <Form.Control id="tamar" type="text" size="sm" onChange={this.tamar}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>Perez the father of Hezron, Hezron the father of Ram,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:4 Ram the father of Amminadab, Amminadab the father of Nahshon, Nahshon the father of Salmon,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:5 Salmon the father of Boaz, whose mother was </Form.Text>
                        <Form.Control id="rahab" type="text" size="sm" onChange={this.rahab}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>Boaz the father of Obed, whose mother was </Form.Text>
                        <Form.Control id="ruth" type="text" size="sm" onChange={this.ruth}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>Obed the father of Jesse,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:6 and Jesse the father of King David. David was the father of Solomon, whose mother had been</Form.Text>
                        <Form.Control id="uriahs" type="text" size="sm" onChange={this.uriahs}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>wife,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:16 and Jacob the father of Joseph, the husband of Mary, and Mary was the mother of Jesus who is called the Messiah.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:17 Thus there were fourteen </Form.Text>
                        <Form.Control id="generations" type="text" size="sm" onChange={this.generations}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}> in all from Abraham to David, fourteen from David to the exile to Babylon, and fourteen from the exile to the Messiah.  </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Button type="reset" onClick={this.reset}>Reset</Button>
                        <Button onClick={this.getScore}>Get Score</Button>
                    </Form.Group>
                </Form> 
            </div>
        )
    }
}

export default UWC1App;