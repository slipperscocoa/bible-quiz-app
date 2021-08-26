import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 

var score = 0;

class UWC8App extends React.Component {

    lies = (e) => {
        var answer = e.target.value;

        if (answer === "lies") {
            document.getElementById("lies").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "lies") {
            document.getElementById("lies").style.color = 'red';
        }
    }

    roof = (e) => {
        var answer = e.target.value;

        if (answer === "roof") {
            document.getElementById("roof").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "roof") {
            document.getElementById("roof").style.color = 'red';
        }
    }

    myself = (e) => {
        var answer = e.target.value;

        if (answer === "myself") {
            document.getElementById("myself").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "myself") {
            document.getElementById("myself").style.color = 'red';
        }
    }

    feast = (e) => {
        var answer = e.target.value;

        if (answer === "feast") {
            document.getElementById("feast").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "feast") {
            document.getElementById("feast").style.color = 'red';
        }
    }

    subjects = (e) => {
        var answer = e.target.value;

        if (answer === "subjects") {
            document.getElementById("subjects").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "subjects") {
            document.getElementById("subjects").style.color = 'red';
        }
    }

    believed = (e) => {
        var answer = e.target.value;

        if (answer === "believed") {
            document.getElementById("believed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "believed") {
            document.getElementById("believed").style.color = 'red';
        }
    }

    bed = (e) => {
        var answer = e.target.value;

        if (answer === "bed") {
            document.getElementById("bed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "bed") {
            document.getElementById("bed").style.color = 'red';
        }
    }

    wait = (e) => {
        var answer = e.target.value;

        if (answer === "wait") {
            document.getElementById("wait").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "wait") {
            document.getElementById("wait").style.color = 'red';
        }
    }

    infirmities = (e) => {
        var answer = e.target.value;

        if (answer === "infirmities") {
            document.getElementById("infirmities").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "infirmities") {
            document.getElementById("infirmities").style.color = 'red';
        }
    }

    bore = (e) => {
        var answer = e.target.value;

        if (answer === "bore") {
            document.getElementById("bore").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "bore") {
            document.getElementById("bore").style.color = 'red';
        }
    }

    foxes = (e) => {
        var answer = e.target.value;

        if (answer === "Foxes") {
            document.getElementById("foxes").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Foxes") {
            document.getElementById("foxes").style.color = 'red';
        }
    }

    dens = (e) => {
        var answer = e.target.value;

        if (answer === "dens") {
            document.getElementById("dens").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "dens") {
            document.getElementById("dens").style.color = 'red';
        }
    }

    nests = (e) => {
        var answer = e.target.value;

        if (answer === "nests") {
            document.getElementById("nests").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "nests") {
            document.getElementById("nests").style.color = 'red';
        }
    }

    storm = (e) => {
        var answer = e.target.value;

        if (answer === "storm") {
            document.getElementById("storm").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "storm") {
            document.getElementById("storm").style.color = 'red';
        }
    }

    were = (e) => {
        var answer = e.target.value;

        if (answer === "We're") {
            document.getElementById("were").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "We're") {
            document.getElementById("were").style.color = 'red';
        }
    }

    drown = (e) => {
        var answer = e.target.value;

        if (answer === "drown") {
            document.getElementById("drown").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "drown") {
            document.getElementById("drown").style.color = 'red';
        }
    }

    calm = (e) => {
        var answer = e.target.value;

        if (answer === "calm") {
            document.getElementById("calm").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "calm") {
            document.getElementById("calm").style.color = 'red';
        }
    }

    gadarenes = (e) => {
        var answer = e.target.value;

        if (answer === "Gadarenes") {
            document.getElementById("gadarenes").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Gadarenes") {
            document.getElementById("gadarenes").style.color = 'red';
        }
    }

    torture = (e) => {
        var answer = e.target.value;

        if (answer === "torture") {
            document.getElementById("torture").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "torture") {
            document.getElementById("torture").style.color = 'red';
        }
    }

    feeding = (e) => {
        var answer = e.target.value;

        if (answer === "feeding") {
            document.getElementById("feeding").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "feeding") {
            document.getElementById("feeding").style.color = 'red';
        }
    }

    rushed = (e) => {
        var answer = e.target.value;

        if (answer === "rushed") {
            document.getElementById("rushed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "rushed") {
            document.getElementById("rushed").style.color = 'red';
        }
    }

    steep = (e) => {
        var answer = e.target.value;

        if (answer === "steep") {
            document.getElementById("steep").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "steep") {
            document.getElementById("steep").style.color = 'red';
        }
    }

    bank = (e) => {
        var answer = e.target.value;

        if (answer === "bank") {
            document.getElementById("bank").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "bank") {
            document.getElementById("bank").style.color = 'red';
        }
    }

    tending = (e) => {
        var answer = e.target.value;

        if (answer === "tending") {
            document.getElementById("tending").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "tending") {
            document.getElementById("tending").style.color = 'red';
        }
    }

    including = (e) => {
        var answer = e.target.value;

        if (answer === "including") {
            document.getElementById("including").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "including") {
            document.getElementById("including").style.color = 'red';
        }
    }

    pleaded = (e) => {
        var answer = e.target.value;

        if (answer === "pleaded") {
            document.getElementById("pleaded").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "pleaded") {
            document.getElementById("pleaded").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/26 correct!");
    }

    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 8</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px' }}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>8:1 When Jesus came down from the mountainside, large crowds followed him.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>8:2 A man with leprosoy came and knelt before him and said, "Lord, if you are willing, you can make me clean."</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>8:3 Jesus reached out his hand and touched the man. "I am willing," he said. "Be clean!" Immediately he was cleansed of his leprosy.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>8:4 Then Jesus said to him, "See that you don't tell anyone. But go, show yourself to the priest and offer the gift Moses commanded, as a testimony to them."</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>8:5 When Jesus had entered Capernaum, a centurion came to him, asking for help.</Form.Text>
                        </Form.Group>
                        
                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:6 "Lord," he said, "my servant</Form.Text>
                            <Form.Control id="lies" type="text" size="sm" onChange={this.lies}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>at home paralyzed, suffering terribly."</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>8:7 Jesus said to him, "Shall I come and heal him?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:8 The centurion replied, "Lord, I do not deserve to have you come under my</Form.Text>
                            <Form.Control id="roof" type="text" size="sm" onChange={this.roof}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>But just say the word, and my servant will be healed.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:9 For I </Form.Text>
                            <Form.Control id="myself" type="text" size="sm" onChange={this.myself}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>am a man under authority, with soldiers under me. I tell this one, 'Go,' and he goes; and that one, 'Come,' and he comes. I say to my servant, 'Do this,' and he does it.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:10 When Jesus heard this, he was amazed and said to those following him, "Truly I tell you, I have not found anyone in Israel with such great faith.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:11 I say to you that many will come from the east and the west, and will take their places at the</Form.Text>
                            <Form.Control id="feast" type="text" size="sm" onChange={this.feast}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>with Abraham, Isaac, and Jacob in the kingdom of heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:12 But the</Form.Text>
                            <Form.Control id="subjects" type="text" size="sm" onChange={this.subjects}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of the kingdom will be thrown outside, into the darkness, where there will be weeping and gnashing of teeth.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:13 Then Jesus said to the centurion, "Go! Let it be done just as you</Form.Text>
                            <Form.Control id="believed" type="text" size="sm" onChange={this.believed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it would." And his servant was healed at that moment.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:14 When Jesus came into Peter's house, he saw Peter's mother-in-law lying in</Form.Text>
                            <Form.Control id="bed" type="text" size="sm" onChange={this.bed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>with a fever.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:15 He touched her hand and the fever left her, and she got up and began to</Form.Text>
                            <Form.Control id="wait" type="text" size="sm" onChange={this.wait}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>on him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:16 When evening came, many who were demon-possessed were brought to him, and he drove out the spirits with a word and healed all the sick.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:17 This was to fulfill what was spoken through the prophet Isaiah: "He took up our</Form.Text>
                            <Form.Control id="infirmities" type="text" size="sm" onChange={this.infirmities}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and</Form.Text>
                            <Form.Control id="bore" type="text" size="sm" onChange={this.bore}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>our diseases."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:18 When Jesus saw the crowd around him, he gave orders to cross to the other side of the lake.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:19 Then a teacher of the law came to him and said, "Teacher, I will follow you wherever you go."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:20 Jesus replied, "</Form.Text>
                            <Form.Control id="foxes" type="text" size="sm" onChange={this.foxes}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>have</Form.Text>
                            <Form.Control id="dens" type="text" size="sm" onChange={this.dens}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and birds have</Form.Text>
                            <Form.Control id="nests" type="text" size="sm" onChange={this.nests}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>but the Son of Man has no place to lay his head." </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:21 Another disciple said to him, "Lord, first let me go and bury my father."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:22 But Jesus told him, "Follow me, and let the dead bury their own dead."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:23 Then he got into the boat and his disciples followed him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:24 Suddenly a furious</Form.Text>
                            <Form.Control id="storm" type="text" size="sm" onChange={this.storm}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>came up on the lake, so that the waves swept over the boat. But Jesus was sleeping.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:25 The disciples went and woke him, saying, "Lord save us!</Form.Text>
                            <Form.Control id="were" type="text" size="sm" onChange={this.were}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>going to</Form.Text>
                            <Form.Control id="drown" type="text" size="sm" onChange={this.drown}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:26 He replied, "You of little faith, why are you so afraid?" Then he got up and rebuked the winds and the waves, and it was completely</Form.Text>
                            <Form.Control id="calm" type="text" size="sm" onChange={this.calm}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:27 The men were amazed and asked, "What kind of man is this? Even the winds and the waves obey him!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:28 When he arrived at the other side in the region of the </Form.Text>
                            <Form.Control id="gadarenes" type="text" size="sm" onChange={this.gadarenes}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>two demon-possessed men coming from the tombs met him. They were so violent that no one could pass that way.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:29 "What do you want with us, Son of God?" they shouted. "Have you come here to</Form.Text>
                            <Form.Control id="torture" type="text" size="sm" onChange={this.torture}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>us before the appointed time?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:30 Some distance from them a large herd of pigs was</Form.Text>
                            <Form.Control id="feeding" type="text" size="sm" onChange={this.feeding}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:31 The demons begged Jesus, "If you drive us out, send us into the herd of pigs."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:32 He said to them, "Go!" So they came out and went into the pigs, and the whole herd</Form.Text>
                            <Form.Control id="rushed" type="text" size="sm" onChange={this.rushed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>down the</Form.Text>
                            <Form.Control id="steep" type="text" size="sm" onChange={this.steep}></Form.Control>
                            <Form.Control id="bank" type="text" size="sm" onChange={this.bank}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>into the lake and died in the water.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:33 Those</Form.Text>
                            <Form.Control id="tending" type="text" size="sm" onChange={this.tending}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the pigs ran off, went into the town and reported all this,</Form.Text>
                            <Form.Control id="including" type="text" size="sm" onChange={this.including}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>what had happened to the demon-possessed men.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>8:34 Then the whole town went out to meet Jesus. And when they saw him, they</Form.Text>
                            <Form.Control id="pleaded" type="text" size="sm" onChange={this.pleaded}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>with him to leave their region.</Form.Text>
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

export default UWC8App;