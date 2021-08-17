import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

var score = 0; 

class UWC2App extends React.Component {
    
    disturbed = (e) => {
        var answer = e.target.value; 

        if (answer === "disturbed") {
            document.getElementById("disturbed").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "disturbed") {
            document.getElementById("disturbed").style.color='red';
        }
    }

    ruler = (e) => {
        var answer = e.target.value; 

        if (answer === "ruler") {
            document.getElementById("ruler").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "ruler") {
            document.getElementById("ruler").style.color='red';
        }
    }

    exact = (e) => {
        var answer = e.target.value; 

        if (answer === "exact") {
            document.getElementById("exact").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "exact") {
            document.getElementById("exact").style.color='red';
        }
    }

    carefully = (e) => {
        var answer = e.target.value; 

        if (answer === "carefully") {
            document.getElementById("carefully").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "carefully") {
            document.getElementById("carefully").style.color='red';
        }
    }

    overjoyed = (e) => {
        var answer = e.target.value; 

        if (answer === "overjoyed") {
            document.getElementById("overjoyed").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "overjoyed") {
            document.getElementById("overjoyed").style.color='red';
        }
    }

    bowed = (e) => {
        var answer = e.target.value; 

        if (answer === "bowed") {
            document.getElementById("bowed").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "bowed") {
            document.getElementById("bowed").style.color='red';
        }
    }

    presented = (e) => {
        var answer = e.target.value; 

        if (answer === "presented") {
            document.getElementById("presented").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "presented") {
            document.getElementById("presented").style.color='red';
        }
    }

    frankincense = (e) => {
        var answer = e.target.value; 

        if (answer === "frankincense") {
            document.getElementById("frankincense").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "frankincense") {
            document.getElementById("frankincense").style.color='red';
        }
    }

    myrrh = (e) => {
        var answer = e.target.value; 

        if (answer === "myrrh") {
            document.getElementById("myrrh").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "myrrh") {
            document.getElementById("myrrh").style.color='red';
        }
    }

    route = (e) => {
        var answer = e.target.value; 

        if (answer === "route") {
            document.getElementById("route").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "route") {
            document.getElementById("route").style.color='red';
        }
    }

    stayed = (e) => {
        var answer = e.target.value; 

        if (answer === "stayed") {
            document.getElementById("stayed").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "stayed") {
            document.getElementById("stayed").style.color='red';
        }
    }

    realized = (e) => {
        var answer = e.target.value; 

        if (answer === "realized") {
            document.getElementById("realized").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "realized") {
            document.getElementById("realized").style.color='red';
        }
    }

    outwitted = (e) => {
        var answer = e.target.value; 

        if (answer === "outwitted") {
            score = score + 1; 
        }
        else if (answer !== "outwitted") {
            document.getElementById("outwitted").style.color='red';
        }
    }

    boys = (e) => {
        var answer = e.target.value; 

        if (answer === "boys") {
            document.getElementById("boys").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "boys") {
            document.getElementById("boys").style.color='red';
        }
    }

    ramah = (e) => {
        var answer = e.target.value; 

        if (answer === "Ramah") {
            document.getElementById("ramah").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Ramah") {
            document.getElementById("ramah").style.color='red';
        }
    }

    mourning = (e) => {
        var answer = e.target.value; 

        if (answer === "mourning") {
            document.getElementById("mourning").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "mourning") {
            document.getElementById("mourning").style.color='red';
        }
    }

    rachel = (e) => {
        var answer = e.target.value; 

        if (answer === "Rachel") {
            document.getElementById("rachel").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Rachel") {
            document.getElementById("rachel").style.color='red';
        }
    }

    refusing = (e) => {
        var answer = e.target.value; 

        if (answer === "refusing") {
            document.getElementById("refusing").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "refusing") {
            document.getElementById("refusing").style.color='red';
        }
    }

    childs = (e) => {
        var answer = e.target.value; 

        if (answer === "child's") {
            document.getElementById("childs").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "child's") {
            document.getElementById("childs").style.color='red';
        }
    }

    archelaus = (e) => {
        var answer = e.target.value; 

        if (answer === "Archelaus") {
            document.getElementById("archelaus").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Archelaus") {
            document.getElementById("archelaus").style.color='red';
        }
    }

    reigning = (e) => {
        var answer = e.target.value; 

        if (answer === "reigning") {
            document.getElementById("reigning").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "reigning") {
            document.getElementById("reigning").style.color='red';
        }
    }

    district = (e) => {
        var answer = e.target.value; 

        if (answer === "district") {
            document.getElementById("district").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "district") {
            document.getElementById("district").style.color='red';
        }
    }

    nazarene = (e) => {
        var answer = e.target.value; 

        if (answer === "Nazarene") {
            document.getElementById("nazarene").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Nazarene") {
            document.getElementById("nazarene").style.color='red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore =() => {
        alert("You got " + score + "/23 correct!");
    }

    render() {
        return (
            <div>
                <Form className="text-white" style={{ paddingTop: '90px' }}>
                    <Form.Group>
                        <Form.Text><h1 className="text-warning">Matthew Chapter 2</h1></Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text><h3>Instructions:</h3></Form.Text>
                        <Form.Text>Fill in each blank with the correct unique word. Green text means you gave the 
                            right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:1 After Jesus was born in Bethlehem in Judea, during the time of King Herod, Magi from the east came to Jerusalem</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:2 and asked, "Where is the one who has been born king of the Jews? We saw his star when it rose and have come to worhsip him."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:3 When King Herod heard this he was  </Form.Text>
                        <Form.Control id="disturbed" type="text" size="sm" onChange={this.disturbed}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>and all Jerusalem with him. </Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Text style={{ fontSize: '20px' }}>2:4 When he had called together all the people's chief priests and teachers of the law, he asked them where the Messiah was to be born.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:5 "In Bethlehem in Judea," they replied, "for this is what the prophet has written:</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:6 “‘But you, Bethlehem, in the land of Judah, are by no means least among the rulers of Judah; for out of you will come a  </Form.Text>
                        <Form.Control id="ruler" type="text" size="sm" onChange={this.ruler}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>who will shepherd my people Israel.’” </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:7 Then Herod called the Magi secretly and found out from them the </Form.Text>
                        <Form.Control id="exact" type="text" size="sm" onChange={this.exact}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>time the star had appeared.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:8 He sent them to Bethlehem and said, “Go and search </Form.Text>
                        <Form.Control id="carefully" type="text" size="sm" onChange={this.carefully}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>for the child. As soon as you find him, report to me, so that I too may go and worship him.” </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:9 After they heard the king, they went on their way, and the star they had seen when it rose went ahead of them until it stopped over the place where the child was.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:10 When they saw the star, they were </Form.Text>
                        <Form.Control id="overjoyed" type="text" size="sm" onChange={this.overjoyed}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:11 On coming to the house, they saw the child with his mother Mary, and they </Form.Text>
                        <Form.Control id="bowed" type="text" size="sm" onChange={this.bowed}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>down and worshiped him. Then they opened their treasures and  </Form.Text>
                        <Form.Control id="presented" type="text" size="sm" onChange={this.presented}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>him with the gifts of gold,</Form.Text>
                        <Form.Control id="frankincense" type="text" size="sm" onChange={this.frankincense}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>and</Form.Text>
                        <Form.Control id="myrrh" type="text" size="sm" onChange={this.myrrh}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:12 And having been warned in a dream not to go back to Herod, they returned to their country by another </Form.Text>
                        <Form.Control id="route" type="text" size="sm" onChange={this.route}></Form.Control>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:13 When they had gone, an angel of the Lord appeared to Joseph in a dream. "Get up," he said, "take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:14 So he go up, took the child and his mother during the night and left for Egypt,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:15 where he </Form.Text>
                        <Form.Control id="stayed" type="text" size="sm" onChange={this.stayed}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>until the death of Herod. And so was fulfilled what the Lord had said through the prophet: “Out of Egypt I called my son.”   </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:16 When Herod </Form.Text>
                        <Form.Control id="realized" type="text" size="sm" onChange={this.realized}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>that he had been  </Form.Text>
                        <Form.Control id="outwitted" type="text" size="sm" onChange={this.outwitted}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>by the Magi, he was furious, and he gave orders to kill all the  </Form.Text>
                        <Form.Control id="boys" type="text" size="sm" onChange={this.boys}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>in Bethlehem and its vicinity who were two years old and under, in accordance with the time he had learned from the Magi. </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:17 Then what was said through the prophet Jeremiah was fulfilled:</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:18 “A voice is heard in </Form.Text>
                        <Form.Control id="ramah" type="text" size="sm" onChange={this.ramah}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>weeping and great </Form.Text>
                        <Form.Control id="mourning" type="text" size="sm" onChange={this.mourning}></Form.Control>
                        <Form.Control id="rachel" type="text" size="sm" onChange={this.rachel}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>weeping for her children and</Form.Text>
                        <Form.Control id="refusing" type="text" size="sm" onChange={this.refusing}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>to be comforted, because they are no more.”</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:19 After Herod died, an angel of the Lord appeared in a dream to Joseph in Egypt</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:20 and said, "Get up, take the child and his mother and go to the land of Israel, for those who were trying to take the</Form.Text>
                        <Form.Control id="childs" type="text" size="sm" onChange={this.childs}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>life are dead.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:21 So he got up, took the child and his mother and went to the land of Israel.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:22 But when he heard that</Form.Text>
                        <Form.Control id="archelaus" type="text" size="sm" onChange={this.archelaus}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>was</Form.Text>
                        <Form.Control id="reigning" type="text" size="sm" onChange={this.reigning}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>in Judea in place of his father Herod, he was afraid to go there. Having been warned in a dream, he withdrew to the </Form.Text>
                        <Form.Control id="district" type="text" size="sm" onChange={this.district}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>of Galilee,</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>2:23 and he went and lived in a town called Nazareth. So was fulfilled what was said through the prophets, that he would be called a </Form.Text>
                        <Form.Control id="nazarene" type="text" size="sm" onChange={this.nazarene}></Form.Control>
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

export default UWC2App;