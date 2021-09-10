import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var score = 0;

class UWC14App extends React.Component {
    tetrarch = (e) => {
        var answer = e.target.value;

        if (answer === "tetrarch") {
            document.getElementById("tetrarch").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "tetrarch") {
            document.getElementById("tetrarch").style.color = 'red';
        }
    }

    reports = (e) => {
        var answer = e.target.value;

        if (answer === "reports") {
            document.getElementById("reports").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "reports") {
            document.getElementById("reports").style.color = 'red';
        }
    }

    philips = (e) => {
        var answer = e.target.value;

        if (answer === "Philip's") {
            document.getElementById("philips").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Philip's") {
            document.getElementById("philips").style.color = 'red';
        }
    }

    herods = (e) => {
        var answer = e.target.value;

        if (answer === "Herod's") {
            document.getElementById("herods").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Herod's") {
            document.getElementById("herods").style.color = 'red';
        }
    }

    birthday = (e) => {
        var answer = e.target.value;

        if (answer === "birthday") {
            document.getElementById("birthday").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "birthday") {
            document.getElementById("birthday").style.color = 'red';
        }
    }

    danced = (e) => {
        var answer = e.target.value;

        if (answer === "danced") {
            document.getElementById("danced").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "danced") {
            document.getElementById("danced").style.color = 'red';
        }
    }

    promised = (e) => {
        var answer = e.target.value;

        if (answer === "promised") {
            document.getElementById("promised").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "promised") {
            document.getElementById("promised").style.color = 'red';
        }
    }

    prompted = (e) => {
        var answer = e.target.value;

        if (answer === "Prompted") {
            document.getElementById("prompted").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Prompted") {
            document.getElementById("prompted").style.color = 'red';
        }
    }

    distressed = (e) => {
        var answer = e.target.value;

        if (answer === "distressed") {
            document.getElementById("distressed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "distressed") {
            document.getElementById("distressed").style.color = 'red';
        }
    }

    oaths = (e) => {
        var answer = e.target.value;

        if (answer === "oaths") {
            document.getElementById("oaths").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "oaths") {
            document.getElementById("oaths").style.color = 'red';
        }
    }

    beheaded = (e) => {
        var answer = e.target.value;

        if (answer === "beheaded") {
            document.getElementById("beheaded").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "beheaded") {
            document.getElementById("beheaded").style.color = 'red';
        }
    }

    carried = (e) => {
        var answer = e.target.value;

        if (answer === "carried") {
            document.getElementById("carried").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "carried") {
            document.getElementById("carried").style.color = 'red';
        }
    }

    buried = (e) => {
        var answer = e.target.value;

        if (answer === "buried") {
            document.getElementById("buried").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "buried") {
            document.getElementById("buried").style.color = 'red';
        }
    }

    solitary = (e) => {
        var answer = e.target.value;

        if (answer === "solitary") {
            document.getElementById("solitary").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "solitary") {
            document.getElementById("solitary").style.color = 'red';
        }
    }

    late = (e) => {
        var answer = e.target.value;

        if (answer === "late") {
            document.getElementById("late").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "late") {
            document.getElementById("late").style.color = 'red';
        }
    }

    considerable = (e) => {
        var answer = e.target.value;

        if (answer === "considerable") {
            document.getElementById("considerable").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "considerable") {
            document.getElementById("considerable").style.color = 'red';
        }
    }

    buffeted = (e) => {
        var answer = e.target.value;

        if (answer === "buffeted") {
            document.getElementById("buffeted").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "buffeted") {
            document.getElementById("buffeted").style.color = 'red';
        }
    }

    shortly = (e) => {
        var answer = e.target.value;

        if (answer === "Shortly") {
            document.getElementById("shortly").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Shortly") {
            document.getElementById("shortly").style.color = 'red';
        }
    }

    ghost = (e) => {
        var answer = e.target.value;

        if (answer === "ghost") {
            document.getElementById("ghost").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "ghost") {
            document.getElementById("ghost").style.color = 'red';
        }
    }

    fear = (e) => {
        var answer = e.target.value;

        if (answer === "fear") {
            document.getElementById("fear").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "fear") {
            document.getElementById("fear").style.color = 'red';
        }
    }

    courage = (e) => {
        var answer = e.target.value;

        if (answer === "courage") {
            document.getElementById("courage").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "courage") {
            document.getElementById("courage").style.color = 'red';
        }
    }

    walked = (e) => {
        var answer = e.target.value;

        if (answer === "walked") {
            document.getElementById("walked").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "walked") {
            document.getElementById("walked").style.color = 'red';
        }
    }

    toward = (e) => {
        var answer = e.target.value;

        if (answer === "toward") {
            document.getElementById("toward").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "toward") {
            document.getElementById("toward").style.color = 'red';
        }
    }

    sink = (e) => {
        var answer = e.target.value;

        if (answer === "sink") {
            document.getElementById("sink").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sink") {
            document.getElementById("sink").style.color = 'red';
        }
    }

    climbed = (e) => {
        var answer = e.target.value;

        if (answer === "climbed") {
            document.getElementById("climbed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "climbed") {
            document.getElementById("climbed").style.color = 'red';
        }
    }

    gennesaret = (e) => {
        var answer = e.target.value;

        if (answer === "Gennesaret") {
            document.getElementById("gennesaret").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Gennesaret") {
            document.getElementById("gennesaret").style.color = 'red';
        }
    }

    surrounding = (e) => {
        var answer = e.target.value;

        if (answer === "surrounding") {
            document.getElementById("surrounding").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "surrounding") {
            document.getElementById("surrounding").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/27 correct!");
    }

    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 14</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px' }}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:1 At that time Herod the </Form.Text>
                            <Form.Control id="tetrarch" type="text" size="sm" onChange={this.tetrarch}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>heard the</Form.Text>
                            <Form.Control id="reports" type="text" size="sm" onChange={this.reports}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>about Jesus,</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>14:2 and he said to his attendants, "This is John the Baptist; he has risen from the dead! That is why miraculous powers are at work in him."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:3  Now Herod had arrested John and bound him and put him in prison because of Herodias, this brother</Form.Text>
                            <Form.Control id="philips" type="text" size="sm" onChange={this.philips}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>wife,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:4 for John had been saying to him: "It is not lawful for you to have her."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:5 Herod wanted to kill John, but he was afraid of the people, because they considered John a prophet.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:6 On </Form.Text>
                            <Form.Control id="herods" type="text" size="sm" onChange={this.herods}></Form.Control>
                            <Form.Control id="birthday" type="text" size="sm" onChange={this.birthday}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the daughter of Herodias</Form.Text>
                            <Form.Control id="danced" type="text" size="sm" onChange={this.danced}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>for the guests and pleased Herod so much</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:7 that he</Form.Text>
                            <Form.Control id="promised" type="text" size="sm" onChange={this.promised}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>with an oath to give her whatever she asked.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:8</Form.Text>
                            <Form.Control id="prompted" type="text" size="sm" onChange={this.prompted}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> by her mother, she said, "Give me here on a platter the head of John the Baptist."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:9 The king was  </Form.Text>
                            <Form.Control id="distressed" type="text" size="sm" onChange={this.distressed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> but because of his</Form.Text>
                            <Form.Control id="oaths" type="text" size="sm" onChange={this.oaths}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and his dinner guests, he ordered that her request be granted.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:10 and had John</Form.Text>
                            <Form.Control id="beheaded" type="text" size="sm" onChange={this.beheaded}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>in the prison.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:11 His head was brought in on a platter and given to the girl, who</Form.Text>
                            <Form.Control id="carried" type="text" size="sm" onChange={this.carried}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it to her mother.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:12 John's disciples came and took his body and </Form.Text>
                            <Form.Control id="buried" type="text" size="sm" onChange={this.buried}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it. Then they went and told Jesus.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:13 When Jesus heard what had happened, he withdrew by boat privately to a </Form.Text>
                            <Form.Control id="solitary" type="text" size="sm" onChange={this.solitary}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>place. Hearing of this, the crowds followed him on foot from the towns.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:14 When Jesus landed and saw a large crowd, he had compassion on them and healed their sick.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:15 As evening approached, the disciples came to him and said, "This is a remote place, and it's already getting</Form.Text>
                            <Form.Control id="late" type="text" size="sm" onChange={this.late}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>Send the crowds away, so they can go to the villages and buy themselves some food."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:16 Jesus replied, "They do not need to go away. You give them something to eat."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:17 "We have here only five loaves of bread and two fish," they answered. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:18 "Bring them here to me," he said.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:19 And he directed the people to sit down on the grass. Taking the five loaves and the two fish and looking up to heaven, he gave thanks and broke the loaves. Then he gave them to the disciples, and the disciples gave them to the people.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:20 They all ate and were satisfied, and the disciples picked up twelve basketfuls of broken pieces that were left over.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:21 The number of those who ate was about five thousand men, besides women and children.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:22 Immediately Jesus made the disciples get into the boat and go on ahead of him to the other side, while he dismissed the crowd.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:23 After he had dismissed them, he went up on a mountainside by himself to pray. Later that night, he was there alone,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:24 and the boat was already a </Form.Text>
                            <Form.Control id="considerable" type="text" size="sm" onChange={this.considerable}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>distance from land, </Form.Text>
                            <Form.Control id="buffeted" type="text" size="sm" onChange={this.buffeted}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> by the waves because the wind was against it.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:25</Form.Text>
                            <Form.Control id="shortly" type="text" size="sm" onChange={this.shortly}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>before dawn Jesus went out to them, walking on the lake.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:26 When the disciples saw him walking on the lake, they were terrified. "It's a </Form.Text>
                            <Form.Control id="ghost" type="text" size="sm" onChange={this.ghost}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>," they said, and cried out in </Form.Text>
                            <Form.Control id="fear" type="text" size="sm" onChange={this.fear}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:27 But Jesus immediately said to them: "Take</Form.Text>
                            <Form.Control id="courage" type="text" size="sm" onChange={this.courage}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>It is I. Don't be afraid."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:28 "Lord, if it's you," Peter replied, "tell me to come to you on the water."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:29 "Come," he said. Then Peter got down out of the boat, </Form.Text>
                            <Form.Control id="walked" type="text" size="sm" onChange={this.walked}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> on the water and came</Form.Text>
                            <Form.Control id="toward" type="text" size="sm" onChange={this.toward}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> Jesus.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:30 But when he saw the wind, he was afraid and, beginning to</Form.Text>
                            <Form.Control id="sink" type="text" size="sm" onChange={this.sink}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>cried out, "Lord, save me!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:31 Immediately Jesus reached out his hand and caught him. "You of little faith," he said, "why did you doubt?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:32 And when they</Form.Text>
                            <Form.Control id="climbed" type="text" size="sm" onChange={this.climbed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>into the boat, the wind died down.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:33 Then those who were in the boat worshiped him, saying, "Truly you are the Son of God."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:34 When they had crossed over, they landed at </Form.Text>
                            <Form.Control id="gennesaret" type="text" size="sm" onChange={this.gennesaret}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:35 And when the men of that place recognized Jesus, they sent word to all the</Form.Text>
                            <Form.Control id="surrounding" type="text" size="sm" onChange={this.surrounding}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>country. People brought all their sick to him</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>14:36 and begged him to let the sick just touch the edge of his cloak, and all who touched it were healed.</Form.Text>
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

export default UWC14App;