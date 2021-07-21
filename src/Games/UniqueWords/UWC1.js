import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

var score = 0; 

class UWC1App extends React.Component {
    
    genealogy = (e) => {
        var answer = e.target.value; 

        if (answer === "genealogy") {
            document.getElementById("genealogy").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "genealogy") {
            document.getElementById("genealogy").style.color='red';
        }
    }

    zerah = (e) => {
        var answer = e.target.value; 

        if (answer === "Zerah") {
            document.getElementById("zerah").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Zerah") {
            document.getElementById("zerah").style.color='red';
        }
    }

    tamar = (e) => {
        var answer = e.target.value; 

        if (answer === "Tamar") {
            document.getElementById("tamar").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Tamar") {
            document.getElementById("tamar").style.color='red';
        }
    }

    rahab = (e) => {
        var answer = e.target.value; 

        if (answer === "Rahab") {
            document.getElementById("rahab").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Rahab") {
            document.getElementById("rahab").style.color='red';
        }
    }

    ruth = (e) => {
        var answer = e.target.value; 

        if (answer === "Ruth") {
            document.getElementById("ruth").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Ruth") {
            document.getElementById("ruth").style.color='red';
        }
    }

    uriahs = (e) => {
        var answer = e.target.value; 

        if (answer === "Uriah's") {
            document.getElementById("uriahs").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Uriah's") {
            document.getElementById("uriahs").style.color='red';
        }
    }

    generations = (e) => {
        var answer = e.target.value; 

        if (answer === "generations") {
            document.getElementById("generations").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "generations") {
            document.getElementById("generations").style.color='red';
        }
    }

    pledged = (e) => {
        var answer = e.target.value; 

        if (answer === "pledged") {
            document.getElementById("pledged").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "pledged") {
            document.getElementById("pledged").style.color='red';
        }
    }

    expose = (e) => {
        var answer = e.target.value; 

        if (answer === "expose") {
            document.getElementById("expose").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "expose") {
            document.getElementById("expose").style.color='red';
        }
    }

    public = (e) => {
        var answer = e.target.value; 

        if (answer === "public") {
            document.getElementById("public").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "public") {
            document.getElementById("public").style.color='red';
        }
    }

    disgrace = (e) => {
        var answer = e.target.value; 

        if (answer === "disgrace") {
            document.getElementById("disgrace").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "disgrace") {
            document.getElementById("disgrace").style.color='red';
        }
    }

    quietly = (e) => {
        var answer = e.target.value; 

        if (answer === "quietly") {
            document.getElementById("quietly").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "quietly") {
            document.getElementById("quietly").style.color='red';
        }
    }

    conceived = (e) => {
        var answer = e.target.value; 

        if (answer === "conceived") {
            document.getElementById("conceived").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "conceived") {
            document.getElementById("conceived").style.color='red';
        }
    }

    virgin = (e) => {
        var answer = e.target.value; 

        if (answer === "virgin") {
            document.getElementById("virgin").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "virgin") {
            document.getElementById("virgin").style.color='red';
        }
    }

    conceive = (e) => {
        var answer = e.target.value; 

        if (answer === "conceive") {
            document.getElementById("conceive").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "conceive") {
            document.getElementById("conceive").style.color='red';
        }
    }

    immanuel = (e) => {
        var answer = e.target.value; 

        if (answer === "Immanuel") {
            document.getElementById("immanuel").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Immanuel") {
            document.getElementById("immanuel").style.color='red';
        }
    }

    consummate = (e) => {
        var answer = e.target.value; 

        if (answer === "consummate") {
            document.getElementById("consummate").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "consummate") {
            document.getElementById("consummate").style.color='red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore =() => {
        alert("You got " + score + "/17 correct!");
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

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:18 This is how the birth of Jesus the Messiah came about: His mother Mary was </Form.Text>
                        <Form.Control id="pledged" type="text" size="sm" onChange={this.pledged}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>to be married to Joseph, but before they came together, she was found to be pregnant through the Holy Spirit. </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:19 Because Joseph her husband was faithful to the law, and yet did not want to </Form.Text>
                        <Form.Control id="expose" type="text" size="sm" onChange={this.expose}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>her to</Form.Text>
                        <Form.Control id="public" type="text" size="sm" onChange={this.public}></Form.Control>
                        <Form.Control id="disgrace" type="text" size="sm" onChange={this.disgrace}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>he had in mind to divorce her </Form.Text>
                        <Form.Control id="quietly" type="text" size="sm" onChange={this.quietly}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:20 But after he had considered this, an angel of the Lord appeared to him in a dream and said, “Joseph sone of David, do not be afraid to take Mary home as your wife, because what is </Form.Text>
                        <Form.Control id="conceived" type="text" size="sm" onChange={this.conceived}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>in her is from the Holy Spirit.”</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:21 She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:22 All this took place to fulfill what the Lord had said through the prophet:</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:23 "The</Form.Text>
                        <Form.Control id="virgin" type="text" size="sm" onChange={this.virgin}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>will</Form.Text>
                        <Form.Control id="conceive" type="text" size="sm" onChange={this.conceive}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>and give birth to a son, and they will call him </Form.Text>
                        <Form.Control id="immanuel" type="text" size="sm" onChange={this.immanuel}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>(which means “God with us”).” </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:24 When Joseph woke up, he did what the angel of the Lord had commanded him and took Mary home as his wife.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>1:25 But he did not</Form.Text>
                        <Form.Control id="consummate" type="text" size="sm" onChange={this.consummate}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>their marriage until she gave birth to a son. And he gave him the name Jesus. </Form.Text>
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