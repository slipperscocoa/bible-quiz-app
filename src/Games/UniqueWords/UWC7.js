import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 

var score = 0;

class UWC7App extends React.Component {

    measure = (e) => {
        var answer = e.target.value;

        if (answer === "measure") {
            document.getElementById("measure").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "measure") {
            document.getElementById("measure").style.color = 'red';
        }
    }

    measured = (e) => {
        var answer = e.target.value;

        if (answer === "measured") {
            document.getElementById("measured").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "measured") {
            document.getElementById("measured").style.color = 'red';
        }
    }

    sawdust = (e) => {
        var answer = e.target.value;

        if (answer === "sawdust") {
            document.getElementById("sawdust").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sawdust") {
            document.getElementById("sawdust").style.color = 'red';
        }
    }

    hypocrite = (e) => {
        var answer = e.target.value;

        if (answer === "hypocrite") {
            document.getElementById("hypocrite").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hypocrite") {
            document.getElementById("hypocrite").style.color = 'red';
        }
    }

    clearly = (e) => {
        var answer = e.target.value;

        if (answer === "clearly") {
            document.getElementById("clearly").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "clearly") {
            document.getElementById("clearly").style.color = 'red';
        }
    }

    remove = (e) => {
        var answer = e.target.value;

        if (answer === "remove") {
            document.getElementById("remove").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "remove") {
            document.getElementById("remove").style.color = 'red';
        }
    }

    trample = (e) => {
        var answer = e.target.value;

        if (answer === "trample") {
            document.getElementById("trample").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "trample") {
            document.getElementById("trample").style.color = 'red';
        }
    }

    knock = (e) => {
        var answer = e.target.value;

        if (answer === "knock") {
            document.getElementById("knock").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "knock") {
            document.getElementById("knock").style.color = 'red';
        }
    }

    seeks = (e) => {
        var answer = e.target.value;

        if (answer === "seeks") {
            document.getElementById("seeks").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "seeks") {
            document.getElementById("seeks").style.color = 'red';
        }
    }

    knocks = (e) => {
        var answer = e.target.value;

        if (answer === "knocks") {
            document.getElementById("knocks").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "knocks") {
            document.getElementById("knocks").style.color = 'red';
        }
    }

    snake = (e) => {
        var answer = e.target.value;

        if (answer === "snake") {
            document.getElementById("snake").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "snake") {
            document.getElementById("snake").style.color = 'red';
        }
    }

    sums = (e) => {
        var answer = e.target.value;

        if (answer === "sums") {
            document.getElementById("sums").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sums") {
            document.getElementById("sums").style.color = 'red';
        }
    }

    broad = (e) => {
        var answer = e.target.value;

        if (answer === "broad") {
            document.getElementById("broad").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "broad") {
            document.getElementById("broad").style.color = 'red';
        }
    }

    destruction = (e) => {
        var answer = e.target.value;

        if (answer === "destruction") {
            document.getElementById("destruction").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "destruction") {
            document.getElementById("destruction").style.color = 'red';
        }
    }

    sheeps = (e) => {
        var answer = e.target.value;

        if (answer === "sheep's") {
            document.getElementById("sheeps").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sheep's") {
            document.getElementById("sheeps").style.color = 'red';
        }
    }

    clothing = (e) => {
        var answer = e.target.value;

        if (answer === "clothing") {
            document.getElementById("clothing").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "clothing") {
            document.getElementById("clothing").style.color = 'red';
        }
    }

    inwardly = (e) => {
        var answer = e.target.value;

        if (answer === "inwardly") {
            document.getElementById("inwardly").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "inwardly") {
            document.getElementById("inwardly").style.color = 'red';
        }
    }

    ferocious = (e) => {
        var answer = e.target.value;

        if (answer === "ferocious") {
            document.getElementById("ferocious").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "ferocious") {
            document.getElementById("ferocious").style.color = 'red';
        }
    }

    grapes = (e) => {
        var answer = e.target.value;

        if (answer === "grapes") {
            document.getElementById("grapes").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "grapes") {
            document.getElementById("grapes").style.color = 'red';
        }
    }

    thornbushes = (e) => {
        var answer = e.target.value;

        if (answer === "thornbushes") {
            document.getElementById("thornbushes").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "thornbushes") {
            document.getElementById("thornbushes").style.color = 'red';
        }
    }

    figs = (e) => {
        var answer = e.target.value;

        if (answer === "figs") {
            document.getElementById("figs").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "figs") {
            document.getElementById("figs").style.color = 'red';
        }
    }

    thistles = (e) => {
        var answer = e.target.value;

        if (answer === "thistles") {
            document.getElementById("thistles").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "thistles") {
            document.getElementById("thistles").style.color = 'red';
        }
    }

    likewise = (e) => {
        var answer = e.target.value;

        if (answer === "Likewise") {
            document.getElementById("likewise").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Likewise") {
            document.getElementById("likewise").style.color = 'red';
        }
    }

    plainly = (e) => {
        var answer = e.target.value;

        if (answer === "plainly") {
            document.getElementById("plainly").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "plainly") {
            document.getElementById("plainly").style.color = 'red';
        }
    }

    evildoers = (e) => {
        var answer = e.target.value;

        if (answer === "evildoers") {
            document.getElementById("evildoers").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "evildoers") {
            document.getElementById("evildoers").style.color = 'red';
        }
    }

    foundation = (e) => {
        var answer = e.target.value;

        if (answer === "foundation") {
            document.getElementById("foundation").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "foundation") {
            document.getElementById("foundation").style.color = 'red';
        }
    }

    sand = (e) => {
        var answer = e.target.value;

        if (answer === "sand") {
            document.getElementById("sand").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sand") {
            document.getElementById("sand").style.color = 'red';
        }
    }

    crash = (e) => {
        var answer = e.target.value;

        if (answer === "crash") {
            document.getElementById("crash").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "crash") {
            document.getElementById("crash").style.color = 'red';
        }
    }

    taught = (e) => {
        var answer = e.target.value;

        if (answer === "taught") {
            document.getElementById("taught").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "taught") {
            document.getElementById("taught").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/29 correct!");
    }

    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 7</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px' }}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>7:1 Do not judge, or you too will be judged.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:2 For in the same way you judge others, you will be judged, and with the</Form.Text>
                            <Form.Control id="measure" type="text" size="sm" onChange={this.measure}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you use, it will be </Form.Text>
                            <Form.Control id="measured" type="text" size="sm" onChange={this.measured}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to you.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:3 Why do you look at the speck of</Form.Text>
                            <Form.Control id="sawdust" type="text" size="sm" onChange={this.sawdust}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>in your brother's eye and pay no attention to the plank in your own eye?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:4 How can you say to your brother, 'Let me take the speck out of your eye,' when all the time there is a plank in your own eye?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:5 You</Form.Text>
                            <Form.Control id="hypocrite" type="text" size="sm" onChange={this.hypocrite}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>first take the plank out of your own eye, and then you will see</Form.Text>
                            <Form.Control id="clearly" type="text" size="sm" onChange={this.clearly}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to</Form.Text>
                            <Form.Control id="remove" type="text" size="sm" onChange={this.remove}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the speck from your brother's eye.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:6  Do not give dogs what is sacred; do not throw your pearls to pigs. If you do, they may</Form.Text>
                            <Form.Control id="trample" type="text" size="sm" onChange={this.trample}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>them under their feet, and turn and tear you to pieces.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:7 Ask and it will be given to you; seek and you will find;</Form.Text>
                            <Form.Control id="knock" type="text" size="sm" onChange={this.knock}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and the door will be opened to you.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:8 For everyone who asks receives; the one who </Form.Text>
                            <Form.Control id="seeks" type="text" size="sm" onChange={this.seeks}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>finds; and to the one who</Form.Text>
                            <Form.Control id="knocks" type="text" size="sm" onChange={this.knocks}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the door will be opened.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:9 Which of you, if your son asks for bread, will give him a stone?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:10 Of if he asks for a fish, will give him a </Form.Text>
                            <Form.Control id="snake" type="text" size="sm" onChange={this.snake}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:11 If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:12 So in everything, do to others what you would have them do to you, for this </Form.Text>
                            <Form.Control id="sums" type="text" size="sm" onChange={this.sums}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>up the Law and the Prophets.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:13 Enter through the narrow gate. For wide is the gate and </Form.Text>
                            <Form.Control id="broad" type="text" size="sm" onChange={this.broad}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>is the road that leads to </Form.Text>
                            <Form.Control id="destruction" type="text" size="sm" onChange={this.destruction}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and many enter through it.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:14 But small the gate and narrow the road that leads to life, and only a few find it.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:15 Watch out for false prophets. They come to you in</Form.Text>
                            <Form.Control id="sheeps" type="text" size="sm" onChange={this.sheeps}></Form.Control>
                            <Form.Control id="clothing" type="text" size="sm" onChange={this.clothing}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>but</Form.Text>
                            <Form.Control id="inwardly" type="text" size="sm" onChange={this.inwardly}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>they are</Form.Text>
                            <Form.Control id="ferocious" type="text" size="sm" onChange={this.ferocious}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>wolves.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:16 By their fruit you will recognize them. Do people pick</Form.Text>
                            <Form.Control id="grapes" type="text" size="sm" onChange={this.grapes}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>from</Form.Text>
                            <Form.Control id="thornbushes" type="text" size="sm" onChange={this.thornbushes}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>or</Form.Text>
                            <Form.Control id="figs" type="text" size="sm" onChange={this.figs}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>from</Form.Text>
                            <Form.Control id="thistles" type="text" size="sm" onChange={this.thistles}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:17</Form.Text>
                            <Form.Control id="likewise" type="text" size="sm" onChange={this.likewise}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>every good tree bears good fruit, but a bad tree bears bad fruit.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:18 A good tree cannot bear bad fruit, and a bad tree cannot bear good fruit.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:19 Every tree that does not bear good fruit is cut down and thrown into the fire.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:20 Thus, by their fruit you will recognize them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:21 Not everyone who says to me, 'Lord, Lord,' will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:22 Many will say to me on that day, 'Lord, Lord, did we not prophesy in your name and in your name drive out demons and in your name, perform many miracles?'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:23 Then I will tell them</Form.Text>
                            <Form.Control id="plainly" type="text" size="sm" onChange={this.plainly}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>'I never knew you. Away from me, you</Form.Text>
                            <Form.Control id="evildoers" type="text" size="sm" onChange={this.evildoers}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:24 Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:25 The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its</Form.Text>
                            <Form.Control id="foundation" type="text" size="sm" onChange={this.foundation}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>on the rock.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:26 But everyone who hears these words of mine and does not put them into practice is like a foolish man who built his house on</Form.Text>
                            <Form.Control id="sand" type="text" size="sm" onChange={this.sand}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:27 The rain came down, the streams rose, and the winds blew and beat against that house, and it fell with a great</Form.Text>
                            <Form.Control id="crash" type="text" size="sm" onChange={this.crash}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:28 When Jesus had finished saying these things, the crowds were amazed at his teaching,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>7:29 because he</Form.Text>
                            <Form.Control id="taught" type="text" size="sm" onChange={this.taught}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>as one who had authority, and not as their teachers of the law.</Form.Text>
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

export default UWC7App;