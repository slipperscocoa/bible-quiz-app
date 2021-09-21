import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var score = 0;

class UWC28App extends React.Component {
    
    week = (e) => {
        var answer = e.target.value;

        if (answer === "week") {
            document.getElementById("week").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "week") {
            document.getElementById("week").style.color = 'red';
        }
    }

    snow = (e) => {
        var answer = e.target.value;

        if (answer === "snow") {
            document.getElementById("snow").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "snow") {
            document.getElementById("snow").style.color = 'red';
        }
    }

    hurried = (e) => {
        var answer = e.target.value;

        if (answer === "hurried") {
            document.getElementById("hurried").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hurried") {
            document.getElementById("hurried").style.color = 'red';
        }
    }

    clasped = (e) => {
        var answer = e.target.value;

        if (answer === "clasped") {
            document.getElementById("clasped").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "clasped") {
            document.getElementById("clasped").style.color = 'red';
        }
    }

    devised = (e) => {
        var answer = e.target.value;

        if (answer === "devised") {
            document.getElementById("devised").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "devised") {
            document.getElementById("devised").style.color = 'red';
        }
    }

    plan = (e) => {
        var answer = e.target.value;

        if (answer === "plan") {
            document.getElementById("plan").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "plan") {
            document.getElementById("plan").style.color = 'red';
        }
    }

    sum = (e) => {
        var answer = e.target.value;

        if (answer === "sum") {
            document.getElementById("sum").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sum") {
            document.getElementById("sum").style.color = 'red';
        }
    }

    stole = (e) => {
        var answer = e.target.value;

        if (answer === "stole") {
            document.getElementById("stole").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "stole") {
            document.getElementById("stole").style.color = 'red';
        }
    }

    gets = (e) => {
        var answer = e.target.value;

        if (answer === "gets") {
            document.getElementById("gets").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "gets") {
            document.getElementById("gets").style.color = 'red';
        }
    }

    satisfy = (e) => {
        var answer = e.target.value;

        if (answer === "satisfy") {
            document.getElementById("satisfy").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "satisfy") {
            document.getElementById("satisfy").style.color = 'red';
        }
    }

    story = (e) => {
        var answer = e.target.value;

        if (answer === "story") {
            document.getElementById("story").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "story") {
            document.getElementById("story").style.color = 'red';
        }
    }

    widely = (e) => {
        var answer = e.target.value;

        if (answer === "widely") {
            document.getElementById("widely").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "widely") {
            document.getElementById("widely").style.color = 'red';
        }
    }

    circulated = (e) => {
        var answer = e.target.value;

        if (answer === "circulated") {
            document.getElementById("circulated").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "circulated") {
            document.getElementById("circulated").style.color = 'red';
        }
    }

    eleven = (e) => {
        var answer = e.target.value;

        if (answer === "eleven") {
            document.getElementById("eleven").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "eleven") {
            document.getElementById("eleven").style.color = 'red';
        }
    }

    doubted = (e) => {
        var answer = e.target.value;

        if (answer === "doubted") {
            document.getElementById("doubted").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "doubted") {
            document.getElementById("doubted").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/15 correct!");
    }
    
    render() {
        return(
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 28</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px'}}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:1 After the Sabbath, at dawn on the first day of the</Form.Text>
                            <Form.Control id="week" type="text" size="sm" onChange={this.week}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>Mary Magdalene and the other Mary went to look at the tomb.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>28:2 There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the tomb, rolled back the stone and sat on it.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:3 His appearance was like lightning, and his clothes were white as</Form.Text>
                            <Form.Control id="snow" type="text" size="sm" onChange={this.snow}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:4 The guards were so afraid of him that they shook and became like dead men.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:5 The angel said to the women, "Do not be afraid, for I know that you are looking for Jesus, who was crucified.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:6 He is not here; he has risen, just as he said. Come and see the place where he lay.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:7 Then go quickly and tell his disciples: 'He has risen from the dead and is going ahead of you into Galilee. There you will see him.' Now I have told you."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:8 So the women</Form.Text>
                            <Form.Control id="hurried" type="text" size="sm" onChange={this.hurried}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>away from the tomb, afraid yet filled with joy, and ran to tell his disciples.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:9 Suddenly Jesus met them. "Greetings," he said. They came to him,</Form.Text>
                            <Form.Control id="clasped" type="text" size="sm" onChange={this.clasped}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>his feet and worshiped him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:10 Then Jesus said to them, "Do not be afraid. Go and tell my brothers to go to Galilee; there they will see me."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:11 While the women were on their way, some of the guards went into the city and reported to the chief priests everything that had happened.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:12 When the chief priests had met with the elders and</Form.Text>
                            <Form.Control id="devised" type="text" size="sm" onChange={this.devised}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>a</Form.Text>
                            <Form.Control id="plan" type="text" size="sm" onChange={this.plan}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>they gave the soldiers a large</Form.Text>
                            <Form.Control id="sum" type="text" size="sm" onChange={this.sum}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of money. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:13 telling them, "You are to say, 'His disciples came during the night and</Form.Text>
                            <Form.Control id="stole" type="text" size="sm" onChange={this.stole}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>him away while we were asleep.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:14 If this report</Form.Text>
                            <Form.Control id="gets" type="text" size="sm" onChange={this.gets}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to the governor, we will</Form.Text>
                            <Form.Control id="satisfy" type="text" size="sm" onChange={this.satisfy}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>him and keep you out of trouble."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:15 So the soldiers took the money and did as they were instructed. And this</Form.Text>
                            <Form.Control id="story" type="text" size="sm" onChange={this.story}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>has been</Form.Text>
                            <Form.Control id="widely" type="text" size="sm" onChange={this.widely}></Form.Control>
                            <Form.Control id="circulated" type="text" size="sm" onChange={this.circulated}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>among the Jews to this very day.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:16 Then the</Form.Text>
                            <Form.Control id="eleven" type="text" size="sm" onChange={this.eleven}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>disciples went to Galilee, to the mountain where Jesus had told them to go.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:17 When they saw him, they worshiped him; but some</Form.Text>
                            <Form.Control id="doubted" type="text" size="sm" onChange={this.doubted}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:18 Then Jesus came to them and said, "All authority in heaven and on earth has been given to me.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:19 Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>28:20 and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Button type="reset" onClick={this.reset}>Reset</Button>
                            <Button onClick={this.getScore}>Get Score</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default UWC28App;