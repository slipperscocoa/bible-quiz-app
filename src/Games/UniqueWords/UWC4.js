import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

var score = 0;

class UWC4App extends React.Component {
    tempted = (e) => {
        var answer = e.target.value; 

        if (answer === "tempted") {
            document.getElementById("tempted").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "tempted") {
            document.getElementById("tempted").style.color='red';
        }
    }

    tempter = (e) => {
        var answer = e.target.value; 

        if (answer === "tempter") {
            document.getElementById("tempter").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "tempter") {
            document.getElementById("tempter").style.color='red';
        }
    }

    concerning = (e) => {
        var answer = e.target.value; 

        if (answer === "concerning") {
            document.getElementById("concerning").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "concerning") {
            document.getElementById("concerning").style.color='red';
        }
    }

    showed = (e) => {
        var answer = e.target.value; 

        if (answer === "showed") {
            document.getElementById("showed").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "showed") {
            document.getElementById("showed").style.color='red';
        }
    }

    kingdoms = (e) => {
        var answer = e.target.value; 

        if (answer === "kingdoms") {
            document.getElementById("kingdoms").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "kingdoms") {
            document.getElementById("kingdoms").style.color='red';
        }
    }

    bow = (e) => {
        var answer = e.target.value; 

        if (answer === "bow") {
            document.getElementById("bow").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "bow") {
            document.getElementById("bow").style.color='red';
        }
    }

    attended = (e) => {
        var answer = e.target.value; 

        if (answer === "attended") {
            document.getElementById("attended").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "attended") {
            document.getElementById("attended").style.color='red';
        }
    }

    area = (e) => {
        var answer = e.target.value; 

        if (answer === "area") {
            document.getElementById("area").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "area") {
            document.getElementById("area").style.color='red';
        }
    }

    shadow = (e) => {
        var answer = e.target.value; 

        if (answer === "shadow") {
            document.getElementById("shadow").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "shadow") {
            document.getElementById("shadow").style.color='red';
        }
    }

    dawned = (e) => {
        var answer = e.target.value; 

        if (answer === "dawned") {
            document.getElementById("dawned").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "dawned") {
            document.getElementById("dawned").style.color='red';
        }
    }

    beside = (e) => {
        var answer = e.target.value; 

        if (answer === "beside") {
            document.getElementById("beside").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "beside") {
            document.getElementById("beside").style.color='red';
        }
    }

    preparing = (e) => {
        var answer = e.target.value; 

        if (answer === "preparing") {
            document.getElementById("preparing").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "preparing") {
            document.getElementById("preparing").style.color='red';
        }
    }

    syria = (e) => {
        var answer = e.target.value; 

        if (answer === "Syria") {
            document.getElementById("syria").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Syria") {
            document.getElementById("syria").style.color='red';
        }
    }

    severe = (e) => {
        var answer = e.target.value; 

        if (answer === "severe") {
            document.getElementById("severe").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "severe") {
            document.getElementById("severe").style.color='red';
        }
    }

    pain = (e) => {
        var answer = e.target.value; 

        if (answer === "pain") {
            document.getElementById("pain").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "pain") {
            document.getElementById("pain").style.color='red';
        }
    }

    decapolis = (e) => {
        var answer = e.target.value; 

        if (answer === "Decapolis") {
            document.getElementById("decapolis").style.color='green';
            score = score + 1; 
        }
        else if (answer !== "Decapolis") {
            document.getElementById("decapolis").style.color='red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore =() => {
        alert("You got " + score + "/16 correct!");
    }
    render() {
        return(
            <div>
                <Form style={{ paddingTop: '90px' }}>
                    <Form.Group>
                        <Form.Text><h1>Matthew Chapter 4</h1></Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text><h3>Instructions:</h3></Form.Text>
                        <Form.Text>Fill in each blank with the correct unique word. Green text means you gave the 
                            right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:1 Then Jesus was led by the Spirit into the wilderness to be </Form.Text>
                        <Form.Control id="tempted" type="text" size="sm" onChange={this.tempted}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>by the devil </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:2 After fasting forty days and forty nights, he was hungry.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:3 The </Form.Text>
                        <Form.Control id="tempter" type="text" size="sm" onChange={this.tempter}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>came to him and said, “If you are the Son of God, tell these stones to become bread.” </Form.Text>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Text style={{ fontSize: '20px' }}>4:4 Jesus answered, "It is written: 'Man shall not live on bread alone, but on every word that comes from the mouth of God.'"</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:5 Then the devil took him to the holy city and had him stand on the highest point of the temple.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:6 “If you are the Son of God,” he said, “throw yourself down. For it is written: “‘He will command his angels </Form.Text>
                        <Form.Control id="concerning" type="text" size="sm" onChange={this.concerning}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>you, and they will lift you up in their hands, so that you will not strike your foot against a stone.’” </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:7 Jesus answered him, "It is also written: 'Do not put the Lord your God to the test.'"</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:8  Again, the devil took him to a very high mountain and </Form.Text>
                        <Form.Control id="showed" type="text" size="sm" onChange={this.showed}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>him all the </Form.Text>
                        <Form.Control id="kingdoms" type="text" size="sm" onChange={this.kingdoms}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>of the world and their splendor.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:9 “All this I will give you,” he said, “if you will </Form.Text>
                        <Form.Control id="bow" type="text" size="sm" onChange={this.bow}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>down and worship me.” </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:10 Jesus said to him, "Away from me, Satan! For it is written: 'Worship the Lord your God, and serve him only.'"</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:11 Then the devil left him, and angels came and  </Form.Text>
                        <Form.Control id="attended" type="text" size="sm" onChange={this.attended}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>him.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:12 When Jesus heard that John had been put in prison, he withdrew to Galilee.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:13 Leaving Nazareth, he went and lived in Capernaum, which was by the lake in the </Form.Text>
                        <Form.Control id="area" type="text" size="sm" onChange={this.area}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>of Zebulun and Naphtali-- </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:14 to fulfill what was said through the prophet Isaiah: </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:15 "Land of Zebulun and land of Naphtali, the Way of the Sea, beyond the Jordan, Galilee of the Gentiles--</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:16  the people living in darkness have seen a great light; on those living in the land of the </Form.Text>
                        <Form.Control id="shadow" type="text" size="sm" onChange={this.shadow}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>of death a light has </Form.Text>
                        <Form.Control id="dawned" type="text" size="sm" onChange={this.dawned}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:17 From that time on Jesus began to preach, "Repent, for the kingdom of heaven has come near."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:18 As Jesus was walking </Form.Text>
                        <Form.Control id="beside" type="text" size="sm" onChange={this.beside}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>the Sea of Galilee, he saw two brothers, Simon called Peter and his brother Andrew. They were casting a net into the lake, for they were fishermen.  </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}> 4:19 "Come, follow me," Jesus said, "and I will send you out to fish for people."</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:20 At once they left their nets and followed him.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:21 Going on from there, he saw two other brothers, James son of Zebedee and his brother John. They were in a boat with their father Zebedee, </Form.Text>
                        <Form.Control id="preparing" type="text" size="sm" onChange={this.preparing}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}> their nets. Jesus called them, </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:22 and immediately they left the boat and their father and followed him.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:23 Jesus went throughout Galilee, teaching in their synagogues, proclaiming the good news of the kingdom, and healing every disease and sickness among the people.</Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:24 News about him spread all over  </Form.Text>
                        <Form.Control id="syria" type="text" size="sm" onChange={this.syria}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>, and people brought to him all who were ill with various diseases, those suffering</Form.Text>
                        <Form.Control id="severe" type="text" size="sm" onChange={this.severe}></Form.Control>
                        <Form.Control id="pain" type="text" size="sm" onChange={this.pain}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>the demon-possessed, those having seizures, and the paralyzed; and he healed them.  </Form.Text>
                    </Form.Group>

                    <Form.Group style={{ padding: '20px' }}>
                        <Form.Text style={{ fontSize: '20px' }}>4:25 Large crowds from Galilee, the </Form.Text>
                        <Form.Control id="decapolis" type="text" size="sm" onChange={this.decapolis}></Form.Control>
                        <Form.Text style={{ fontSize: '20px' }}>Jerusalem, Judea and the region across the Jordan followed him. </Form.Text>
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

export default UWC4App;