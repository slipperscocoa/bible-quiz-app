import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

var score = 0; 

class UWC3App extends React.Component {
    straight = (e) => {
        var answer = e.target.value; 

        if (answer === "straight") {
            document.getElementById("straight").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "straight") {
            document.getElementById("straight").style.color='red';
        }
    }

    paths = (e) => {
        var answer = e.target.value; 

        if (answer === "paths") {
            document.getElementById("paths").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "paths") {
            document.getElementById("paths").style.color='red';
        }
    }

    camels = (e) => {
        var answer = e.target.value; 

        if (answer === "camel's") {
            document.getElementById("camels").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "camel's") {
            document.getElementById("camels").style.color='red';
        }
    }

    leather = (e) => {
        var answer = e.target.value; 

        if (answer === "leather") {
            document.getElementById("leather").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "leather") {
            document.getElementById("leather").style.color='red';
        }
    }

    belt = (e) => {
        var answer = e.target.value; 

        if (answer === "belt") {
            document.getElementById("belt").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "belt") {
            document.getElementById("belt").style.color='red';
        }
    }

    waist = (e) => {
        var answer = e.target.value; 

        if (answer === "waist") {
            document.getElementById("waist").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "waist") {
            document.getElementById("waist").style.color='red';
        }
    }

    locusts = (e) => {
        var answer = e.target.value; 

        if (answer === "locusts") {
            document.getElementById("locusts").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "locusts") {
            document.getElementById("locusts").style.color='red';
        }
    }

    wild = (e) => {
        var answer = e.target.value; 

        if (answer === "wild") {
            document.getElementById("wild").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "wild") {
            document.getElementById("wild").style.color='red';
        }
    }

    honey = (e) => {
        var answer = e.target.value; 

        if (answer === "honey") {
            document.getElementById("honey").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "honey") {
            document.getElementById("honey").style.color='red';
        }
    }

    confessing = (e) => {
        var answer = e.target.value; 

        if (answer === "Confessing") {
            document.getElementById("confessing").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Confessing") {
            document.getElementById("confessing").style.color='red';
        }
    }

    river = (e) => {
        var answer = e.target.value; 

        if (answer === "River") {
            document.getElementById("river").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "River") {
            document.getElementById("river").style.color='red';
        }
    }

    wrath = (e) => {
        var answer = e.target.value; 

        if (answer === "wrath") {
            document.getElementById("wrath").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "wrath") {
            document.getElementById("wrath").style.color='red';
        }
    }

    keeping = (e) => {
        var answer = e.target.value; 

        if (answer === "keeping") {
            document.getElementById("keeping").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "keeping") {
            document.getElementById("keeping").style.color='red';
        }
    }

    ax = (e) => {
        var answer = e.target.value; 

        if (answer === "ax") {
            document.getElementById("ax").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "ax") {
            document.getElementById("ax").style.color='red';
        }
    }

    powerful = (e) => {
        var answer = e.target.value; 

        if (answer === "powerful") {
            document.getElementById("powerful").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "powerful") {
            document.getElementById("powerful").style.color='red';
        }
    }

    winnowing = (e) => {
        var answer = e.target.value; 

        if (answer === "winnowing") {
            document.getElementById("winnowing").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "winnowing") {
            document.getElementById("winnowing").style.color='red';
        }
    }

    fork = (e) => {
        var answer = e.target.value; 

        if (answer === "fork") {
            document.getElementById("fork").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "fork") {
            document.getElementById("fork").style.color='red';
        }
    }

    clear = (e) => {
        var answer = e.target.value; 

        if (answer === "clear") {
            document.getElementById("clear").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "clear") {
            document.getElementById("clear").style.color='red';
        }
    }

    threshing = (e) => {
        var answer = e.target.value; 

        if (answer === "threshing") {
            document.getElementById("threshing").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "threshing") {
            document.getElementById("threshing").style.color='red';
        }
    }

    floor = (e) => {
        var answer = e.target.value; 

        if (answer === "floor") {
            document.getElementById("floor").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "floor") {
            document.getElementById("floor").style.color='red';
        }
    }

    burning = (e) => {
        var answer = e.target.value; 

        if (answer === "burning") {
            document.getElementById("burning").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "burning") {
            document.getElementById("burning").style.color='red';
        }
    }

    chaff = (e) => {
        var answer = e.target.value; 

        if (answer === "chaff") {
            document.getElementById("chaff").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "chaff") {
            document.getElementById("chaff").style.color='red';
        }
    }

    unquenchable = (e) => {
        var answer = e.target.value; 

        if (answer === "unquenchable") {
            document.getElementById("unquenchable").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "unquenchable") {
            document.getElementById("unquenchable").style.color='red';
        }
    }

    tried = (e) => {
        var answer = e.target.value; 

        if (answer === "tried") {
            document.getElementById("tried").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "tried") {
            document.getElementById("tried").style.color='red';
        }
    }

    deter = (e) => {
        var answer = e.target.value; 

        if (answer === "deter") {
            document.getElementById("deter").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "deter") {
            document.getElementById("deter").style.color='red';
        }
    }

    consented = (e) => {
        var answer = e.target.value; 

        if (answer === "consented") {
            document.getElementById("consented").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "consented") {
            document.getElementById("consented").style.color='red';
        }
    }

    descending = (e) => {
        var answer = e.target.value; 

        if (answer === "descending") {
            document.getElementById("descending").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "descending") {
            document.getElementById("descending").style.color='red';
        }
    }

    dove = (e) => {
        var answer = e.target.value; 

        if (answer === "dove") {
            document.getElementById("dove").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "dove") {
            document.getElementById("dove").style.color='red';
        }
    }

    alighting = (e) => {
        var answer = e.target.value; 

        if (answer === "alighting") {
            document.getElementById("alighting").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "alighting") {
            document.getElementById("alighting").style.color='red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore =() => {
        alert("You got " + score + "/29 correct!");
    }
    
    render() {
        return(
            <div>
                <Form className="text-white" style={{ paddingTop: '90px' }}>
                    <Form.Group>
                        <Form.Text><h1 className="text-warning">Matthew Chapter 3</h1></Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text><h3>Instructions:</h3></Form.Text>
                        <Form.Text>Fill in each blank with the correct unique word. Green text means you gave the 
                            right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:1 In those days John the Baptist came, preaching in the wilderness of Judea</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:2 and saying, "Repent, for the kingdom of heaven has come near."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:3 This is he who was spoken of through the prophet Isaiah: “A voice of one calling in the wilderness, ‘Prepare the way for the Lord, make   </Form.Text>
                        <Form.Control id="straight" type="text" size="sm" onChange={this.straight}></Form.Control>
                        <Form.Control id="paths" type="text" size="sm" onChange={this.paths}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>for him.'" </Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Text style={{ fontSize: '20px' }}>3:4 John's clothes were made of</Form.Text>
                        <Form.Control id="camels" type="text" size="sm" onChange={this.camels}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>hair, and he had a </Form.Text>
                        <Form.Control id="leather" type="text" size="sm" onChange={this.leather}></Form.Control>
                        <Form.Control id="belt" type="text" size="sm" onChange={this.belt}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>around his</Form.Text>
                        <Form.Control id="waist" type="text" size="sm" onChange={this.waist}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>. His food was</Form.Text>
                        <Form.Control id="locusts" type="text" size="sm" onChange={this.locusts}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>and</Form.Text>
                        <Form.Control id="wild" type="text" size="sm" onChange={this.wild}></Form.Control>
                        <Form.Control id="honey" type="text" size="sm" onChange={this.honey}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:5 People went out to him from Jerusalem and all Judea and the whole region of the Jordan.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:6 </Form.Text>
                        <Form.Control id="confessing" type="text" size="sm" onChange={this.confessing}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>their sins, they were baptized by him in the Jordan </Form.Text>
                        <Form.Control id="river" type="text" size="sm" onChange={this.river}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:7 But when he saw many of the Pharisees and Sadducees coming to where he was baptizing, he said to them: "You brood of vipers! Who warned you to flee from the coming </Form.Text>
                        <Form.Control id="wrath" type="text" size="sm" onChange={this.wrath}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:8 Produce fruit in </Form.Text>
                        <Form.Control id="keeping" type="text" size="sm" onChange={this.keeping}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>with repentance. </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:9 And do not think you can say to yourselves, 'We have Abraham as our father.' I tell you that out of these stones God can raise up children for Abraham.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:10 The </Form.Text>
                        <Form.Control id="ax" type="text" size="sm" onChange={this.ax}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>is already at the root of the trees, and every tree that does not produce good fruit will be cut down and thrown into the fire. </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:11 “I baptize you with water for repentance. But after me comes one who is more  </Form.Text>
                        <Form.Control id="powerful" type="text" size="sm" onChange={this.powerful}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:12 His </Form.Text>
                        <Form.Control id="winnowing" type="text" size="sm" onChange={this.winnowing}></Form.Control>
                        <Form.Control id="fork" type="text" size="sm" onChange={this.fork}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>is in his hand, and he will </Form.Text>
                        <Form.Control id="clear" type="text" size="sm" onChange={this.clear}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>his</Form.Text>
                        <Form.Control id="threshing" type="text" size="sm" onChange={this.threshing}></Form.Control>
                        <Form.Control id="floor" type="text" size="sm" onChange={this.floor}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>, gathering his wheat into the barn and </Form.Text>
                        <Form.Control id="burning" type="text" size="sm" onChange={this.burning}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>up the</Form.Text>
                        <Form.Control id="chaff" type="text" size="sm" onChange={this.chaff}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>with </Form.Text>
                        <Form.Control id="unquenchable" type="text" size="sm" onChange={this.unquenchable}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>fire."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:13 Then Jesus came from Galilee to the Jordan to be baptized by John.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:14 But John</Form.Text>
                        <Form.Control id="tried" type="text" size="sm" onChange={this.tried}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>to</Form.Text>
                        <Form.Control id="deter" type="text" size="sm" onChange={this.deter}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>him, saying, “I need to be baptized by you, and do you come to me?”</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:15 Jesus replied, “Let it be so now; it is proper for us to do this to fulfill all righteousness.” Then John  </Form.Text>
                        <Form.Control id="consented" type="text" size="sm" onChange={this.consented}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:16 As soon as Jesus was baptized, he went up out of the water. At that moment heaven was opened, and he saw the Spirit of God </Form.Text>
                        <Form.Control id="descending" type="text" size="sm" onChange={this.descending}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>like a </Form.Text>
                        <Form.Control id="dove" type="text" size="sm" onChange={this.dove}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>and  </Form.Text>
                        <Form.Control id="alighting" type="text" size="sm" onChange={this.alighting}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>on him. </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>3:17 And a voice from heaven said, "This is my Son, whom I love; with him I am well pleased."</Form.Text>
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

export default UWC3App;