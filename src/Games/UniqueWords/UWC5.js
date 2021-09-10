import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var score = 0;

class UWC5App extends React.Component {
    meek = (e) => {
        var answer = e.target.value;

        if (answer === "meek") {
            document.getElementById("meek").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "meek") {
            document.getElementById("meek").style.color = 'red';
        }
    }

    hunger = (e) => {
        var answer = e.target.value;

        if (answer === "hunger") {
            document.getElementById("hunger").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hunger") {
            document.getElementById("hunger").style.color = 'red';
        }
    }

    thirst = (e) => {
        var answer = e.target.value;

        if (answer === "thirst") {
            document.getElementById("thirst").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "thirst") {
            document.getElementById("thirst").style.color = 'red';
        }
    }

    merciful = (e) => {
        var answer = e.target.value;

        if (answer === "merciful") {
            document.getElementById("merciful").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "merciful") {
            document.getElementById("merciful").style.color = 'red';
        }
    }

    shown = (e) => {
        var answer = e.target.value;

        if (answer === "shown") {
            document.getElementById("shown").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "shown") {
            document.getElementById("shown").style.color = 'red';
        }
    }

    pure = (e) => {
        var answer = e.target.value;

        if (answer === "pure") {
            document.getElementById("pure").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "pure") {
            document.getElementById("pure").style.color = 'red';
        }
    }

    peacemakers = (e) => {
        var answer = e.target.value;

        if (answer === "peacemakers") {
            document.getElementById("peacemakers").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "peacemakers") {
            document.getElementById("peacemakers").style.color = 'red';
        }
    }

    insult = (e) => {
        var answer = e.target.value;

        if (answer === "insult") {
            document.getElementById("insult").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "insult") {
            document.getElementById("insult").style.color = 'red';
        }
    }

    falsely = (e) => {
        var answer = e.target.value;

        if (answer === "falsely") {
            document.getElementById("falsely").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "falsely") {
            document.getElementById("falsely").style.color = 'red';
        }
    }

    rejoice = (e) => {
        var answer = e.target.value;

        if (answer === "Rejoice") {
            document.getElementById("rejoice").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Rejoice") {
            document.getElementById("rejoice").style.color = 'red';
        }
    }

    glad = (e) => {
        var answer = e.target.value;

        if (answer === "glad") {
            document.getElementById("glad").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "glad") {
            document.getElementById("glad").style.color = 'red';
        }
    }

    saltiness = (e) => {
        var answer = e.target.value;

        if (answer === "saltiness") {
            document.getElementById("saltiness").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "saltiness") {
            document.getElementById("saltiness").style.color = 'red';
        }
    }

    salty = (e) => {
        var answer = e.target.value;

        if (answer === "salty") {
            document.getElementById("salty").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "salty") {
            document.getElementById("salty").style.color = 'red';
        }
    }

    trampled = (e) => {
        var answer = e.target.value;

        if (answer === "trampled") {
            document.getElementById("trampled").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "trampled") {
            document.getElementById("trampled").style.color = 'red';
        }
    }

    underfoot = (e) => {
        var answer = e.target.value;

        if (answer === "underfoot") {
            document.getElementById("underfoot").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "underfoot") {
            document.getElementById("underfoot").style.color = 'red';
        }
    }

    hill = (e) => {
        var answer = e.target.value;

        if (answer === "hill") {
            document.getElementById("hill").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hill") {
            document.getElementById("hill").style.color = 'red';
        }
    }

    glorify = (e) => {
        var answer = e.target.value;

        if (answer === "glorify") {
            document.getElementById("glorify").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "glorify") {
            document.getElementById("glorify").style.color = 'red';
        }
    }

    letter = (e) => {
        var answer = e.target.value;

        if (answer === "letter") {
            document.getElementById("letter").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "letter") {
            document.getElementById("letter").style.color = 'red';
        }
    }

    stroke = (e) => {
        var answer = e.target.value;

        if (answer === "stroke") {
            document.getElementById("stroke").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "stroke") {
            document.getElementById("stroke").style.color = 'red';
        }
    }

    pen = (e) => {
        var answer = e.target.value;

        if (answer === "pen") {
            document.getElementById("pen").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "pen") {
            document.getElementById("pen").style.color = 'red';
        }
    }

    accomplished = (e) => {
        var answer = e.target.value;

        if (answer === "accomplished") {
            document.getElementById("accomplished").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "accomplished") {
            document.getElementById("accomplished").style.color = 'red';
        }
    }

    sets = (e) => {
        var answer = e.target.value;

        if (answer === "sets") {
            document.getElementById("sets").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sets") {
            document.getElementById("sets").style.color = 'red';
        }
    }

    accordingly = (e) => {
        var answer = e.target.value;

        if (answer === "accordingly") {
            document.getElementById("accordingly").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "accordingly") {
            document.getElementById("accordingly").style.color = 'red';
        }
    }

    practices = (e) => {
        var answer = e.target.value;

        if (answer === "practices") {
            document.getElementById("practices").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "practices") {
            document.getElementById("practices").style.color = 'red';
        }
    }

    surpasses = (e) => {
        var answer = e.target.value;

        if (answer === "surpasses") {
            document.getElementById("surpasses").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "surpasses") {
            document.getElementById("surpasses").style.color = 'red';
        }
    }

    murders = (e) => {
        var answer = e.target.value;

        if (answer === "murders") {
            document.getElementById("murders").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "murders") {
            document.getElementById("murders").style.color = 'red';
        }
    }

    angry = (e) => {
        var answer = e.target.value;

        if (answer === "angry") {
            document.getElementById("angry").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "angry") {
            document.getElementById("angry").style.color = 'red';
        }
    }

    raca = (e) => {
        var answer = e.target.value;

        if (answer === "Raca") {
            document.getElementById("raca").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Raca") {
            document.getElementById("raca").style.color = 'red';
        }
    }

    answerable = (e) => {
        var answer = e.target.value;

        if (answer === "answerable") {
            document.getElementById("answerable").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "answerable") {
            document.getElementById("answerable").style.color = 'red';
        }
    }

    fool = (e) => {
        var answer = e.target.value;

        if (answer === "fool") {
            document.getElementById("fool").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "fool") {
            document.getElementById("fool").style.color = 'red';
        }
    }

    danger = (e) => {
        var answer = e.target.value;

        if (answer === "danger") {
            document.getElementById("danger").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "danger") {
            document.getElementById("danger").style.color = 'red';
        }
    }

    offering = (e) => {
        var answer = e.target.value;

        if (answer === "offering") {
            document.getElementById("offering").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "offering") {
            document.getElementById("offering").style.color = 'red';
        }
    }

    reconciled = (e) => {
        var answer = e.target.value;

        if (answer === "reconciled") {
            document.getElementById("reconciled").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "reconciled") {
            document.getElementById("reconciled").style.color = 'red';
        }
    }

    officer = (e) => {
        var answer = e.target.value;

        if (answer === "officer") {
            document.getElementById("officer").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "officer") {
            document.getElementById("officer").style.color = 'red';
        }
    }

    lustfully = (e) => {
        var answer = e.target.value;

        if (answer === "lustfully") {
            document.getElementById("lustfully").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "lustfully") {
            document.getElementById("lustfully").style.color = 'red';
        }
    }

    victim = (e) => {
        var answer = e.target.value;

        if (answer === "victim") {
            document.getElementById("victim").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "victim") {
            document.getElementById("victim").style.color = 'red';
        }
    }

    divorced = (e) => {
        var answer = e.target.value;

        if (answer === "divorced") {
            document.getElementById("divorced").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "divorced") {
            document.getElementById("divorced").style.color = 'red';
        }
    }

    vows = (e) => {
        var answer = e.target.value;

        if (answer === "vows") {
            document.getElementById("vows").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "vows") {
            document.getElementById("vows").style.color = 'red';
        }
    }

    footstool = (e) => {
        var answer = e.target.value;

        if (answer === "footstool") {
            document.getElementById("footstool").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "footstool") {
            document.getElementById("footstool").style.color = 'red';
        }
    }

    black = (e) => {
        var answer = e.target.value;

        if (answer === "black") {
            document.getElementById("black").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "black") {
            document.getElementById("black").style.color = 'red';
        }
    }

    simply = (e) => {
        var answer = e.target.value;

        if (answer === "simply") {
            document.getElementById("simply").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "simply") {
            document.getElementById("simply").style.color = 'red';
        }
    }

    resist = (e) => {
        var answer = e.target.value;

        if (answer === "resist") {
            document.getElementById("resist").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "resist") {
            document.getElementById("resist").style.color = 'red';
        }
    }

    slaps = (e) => {
        var answer = e.target.value;

        if (answer === "slaps") {
            document.getElementById("slaps").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "slaps") {
            document.getElementById("slaps").style.color = 'red';
        }
    }

    sue = (e) => {
        var answer = e.target.value;

        if (answer === "sue") {
            document.getElementById("sue").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sue") {
            document.getElementById("sue").style.color = 'red';
        }
    }

    coat = (e) => {
        var answer = e.target.value;

        if (answer === "coat") {
            document.getElementById("coat").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "coat") {
            document.getElementById("coat").style.color = 'red';
        }
    }

    forces = (e) => {
        var answer = e.target.value;

        if (answer === "forces") {
            document.getElementById("forces").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "forces") {
            document.getElementById("forces").style.color = 'red';
        }
    }

    mile = (e) => {
        var answer = e.target.value;

        if (answer === "mile") {
            document.getElementById("mile").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "mile") {
            document.getElementById("mile").style.color = 'red';
        }
    }

    miles = (e) => {
        var answer = e.target.value;

        if (answer === "miles") {
            document.getElementById("miles").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "miles") {
            document.getElementById("miles").style.color = 'red';
        }
    }

    borrow = (e) => {
        var answer = e.target.value;

        if (answer === "borrow") {
            document.getElementById("borrow").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "borrow") {
            document.getElementById("borrow").style.color = 'red';
        }
    }

    sends = (e) => {
        var answer = e.target.value;

        if (answer === "sends") {
            document.getElementById("sends").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sends") {
            document.getElementById("sends").style.color = 'red';
        }
    }

    unrighteous = (e) => {
        var answer = e.target.value;

        if (answer === "unrighteous") {
            document.getElementById("unrighteous").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "unrighteous") {
            document.getElementById("unrighteous").style.color = 'red';
        }
    }

    greet = (e) => {
        var answer = e.target.value;

        if (answer === "greet") {
            document.getElementById("greet").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "greet") {
            document.getElementById("greet").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/53 correct!");
    }

    render() {
        return (
            <div>
                <Container fluid="lg">
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 5</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px' }}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:1 Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him,</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>5:2 and he began to teach them. He said:</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:3 "Blessed are the poor in spirit, for theirs is the kingdom of heaven. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:4 Blessed are those who mourn, for they will be comforted.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:5 Blessed are the </Form.Text>
                            <Form.Control id="meek" type="text" size="sm" onChange={this.meek}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> for they will inherit the earth.  </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:6 Blessed are those who</Form.Text>
                            <Form.Control id="hunger" type="text" size="sm" onChange={this.hunger}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and </Form.Text>
                            <Form.Control id="thirst" type="text" size="sm" onChange={this.thirst}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>for righteousness, for they will be filled. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:7 Blessed are the </Form.Text>
                            <Form.Control id="merciful" type="text" size="sm" onChange={this.merciful}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>for they will be </Form.Text>
                            <Form.Control id="shown" type="text" size="sm" onChange={this.shown}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>mercy. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:8 Blessed are the</Form.Text>
                            <Form.Control id="pure" type="text" size="sm" onChange={this.pure}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>in heart, for they will see God. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:9 Blessed are the </Form.Text>
                            <Form.Control id="peacemakers" type="text" size="sm" onChange={this.peacemakers}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> for they will be called children of God.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:10 Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:11 Blessed are you when people </Form.Text>
                            <Form.Control id="insult" type="text" size="sm" onChange={this.insult}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you, persecute you and</Form.Text>
                            <Form.Control id="falsely" type="text" size="sm" onChange={this.falsely}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>say all kinds of evil against you because of me. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:12</Form.Text>
                            <Form.Control id="rejoice" type="text" size="sm" onChange={this.rejoice}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and be</Form.Text>
                            <Form.Control id="glad" type="text" size="sm" onChange={this.glad}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:13 You are the salt of the earth. But if the salt loses its</Form.Text>
                            <Form.Control id="saltiness" type="text" size="sm" onChange={this.saltiness}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> how can it be made </Form.Text>
                            <Form.Control id="salty" type="text" size="sm" onChange={this.salty}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>again? It is no longer good for anything, except to be thrown out and</Form.Text>
                            <Form.Control id="trampled" type="text" size="sm" onChange={this.trampled}></Form.Control>
                            <Form.Control id="underfoot" type="text" size="sm" onChange={this.underfoot}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:14 You are the light of the world. A town built on a </Form.Text>
                            <Form.Control id="hill" type="text" size="sm" onChange={this.hill}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>cannot be hidden.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:15 Neither do people light a lamp and put it under a bowl. Instead they put in on its stand, and it gives light to everyone in the house.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:16 In the same way, let your light shine before others, that they may see your good deeds and</Form.Text>
                            <Form.Control id="glorify" type="text" size="sm" onChange={this.glorify}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>your Father in heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:17 Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:18 For truly I tell you, until heaven and earth disappear, not the smallest</Form.Text>
                            <Form.Control id="letter" type="text" size="sm" onChange={this.letter}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>not the least</Form.Text>
                            <Form.Control id="stroke" type="text" size="sm" onChange={this.stroke}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of a</Form.Text>
                            <Form.Control id="pen" type="text" size="sm" onChange={this.pen}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>will by any means disappear from the Law until everything is </Form.Text>
                            <Form.Control id="accomplished" type="text" size="sm" onChange={this.accomplished}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:19 Therefore anyone who</Form.Text>
                            <Form.Control id="sets" type="text" size="sm" onChange={this.sets}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>aside one of the least of these commands and teaches others</Form.Text>
                            <Form.Control id="accordingly" type="text" size="sm" onChange={this.accordingly}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>will be called least in the kingdom of heaven, but whoever </Form.Text>
                            <Form.Control id="practices" type="text" size="sm" onChange={this.practices}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and teaches these commands will be called great in the kingdom of heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:20 For I tell you that unless your righteousness</Form.Text>
                            <Form.Control id="surpasses" type="text" size="sm" onChange={this.surpasses}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>that of the Pharisees and the teachers of the law, you will certainly not enter the kingdom of heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:21 You have heard that it was said to the people long ago, 'You shall not murder, and anyone who</Form.Text>
                            <Form.Control id="murders" type="text" size="sm" onChange={this.murders}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> will be subject to judgment.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:22 But I tell you that anyone who is </Form.Text>
                            <Form.Control id="angry" type="text" size="sm" onChange={this.angry}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>with a brother or sister will be subject to judgment. Again, anyone who says to a brother or sister,</Form.Text>
                            <Form.Control id="raca" type="text" size="sm" onChange={this.raca}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>is</Form.Text>
                            <Form.Control id="answerable" type="text" size="sm" onChange={this.answerable}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to the court. And anyone who says, 'You</Form.Text>
                            <Form.Control id="fool" type="text" size="sm" onChange={this.fool}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> will be in</Form.Text>
                            <Form.Control id="danger" type="text" size="sm" onChange={this.danger}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of the fire of hell.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:23 Therefore, if you are</Form.Text>
                            <Form.Control id="offering" type="text" size="sm" onChange={this.offering}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>your gift at the altar and there remember that your brother or sister has something against you,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:24 leave your gift there in front of the altar. First go and be</Form.Text>
                            <Form.Control id="reconciled" type="text" size="sm" onChange={this.reconciled}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to them; then come and offer your gift.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:25 Settle matters quickly with your adversary who is taking you to court. Do it while you are still together on the way, or your adversay may hand you over to the judge, and the judge may hand you over to the</Form.Text>
                            <Form.Control id="officer" type="text" size="sm" onChange={this.officer}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and you may be thrown into prison.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:26 Truly I tell you, you will not get out until you have paid the last penny.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:27 You have heard that it was said, 'You shall not commit adultery.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:28 But I tell you that anyone who looks at a woman</Form.Text>
                            <Form.Control id="lustfully" type="text" size="sm" onChange={this.lustfully}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> has already committed adultery with her in his heart.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:29 If your right eye causes you to stumble, gouge it out and throw it away. It is better for you to lose one part of your body than for your whole body to be thrown into hell.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:30 And if your right hand causes you to stumble, cut it off and throw it away. It is better for you to lose one part of your body than for your whole body to go into hell.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:31 It has been said, 'Anyone who divorces his wife must giver her a certificate of divorce.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:32 But I tell you that anyone who divorces his wife, except for sexual immorality, makes her the</Form.Text>
                            <Form.Control id="victim" type="text" size="sm" onChange={this.victim}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of adultery, and anyone who marries a</Form.Text>
                            <Form.Control id="divorced" type="text" size="sm" onChange={this.divorced}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>woman commits adultery.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:33 Again, you have heard it said to the people long ago, 'Do not break your oath, but fulfill to the Lord the</Form.Text>
                            <Form.Control id="vows" type="text" size="sm" onChange={this.vows}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you have made.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:34 But I tell you, do not swear an oath at all: either by heaven, for it is God's throne;</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:35 or by the earth, for it is his</Form.Text>
                            <Form.Control id="footstool" type="text" size="sm" onChange={this.footstool}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> or by Jerusalem, for it is the city of the Great King.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:36 And do not swear by your head, for you cannot make even one hair white or</Form.Text>
                            <Form.Control id="black" type="text" size="sm" onChange={this.black}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:37 All you need to say is</Form.Text>
                            <Form.Control id="simply" type="text" size="sm" onChange={this.simply}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>'Yes' or 'No'; anything beyond this comes from the evil one.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:38 You have heard that it was said, 'Eye for eye, and tooth for tooth.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:39 But I tell you, do not </Form.Text>
                            <Form.Control id="resist" type="text" size="sm" onChange={this.resist}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>an evil person. If anyone</Form.Text>
                            <Form.Control id="slaps" type="text" size="sm" onChange={this.slaps}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you on the right cheek, turn to them the other cheek also.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:40 And if anyone wants to </Form.Text>
                            <Form.Control id="sue" type="text" size="sm" onChange={this.sue}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you and take your shirt, hand over your</Form.Text>
                            <Form.Control id="coat" type="text" size="sm" onChange={this.coat}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>as well. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:41 If anyone </Form.Text>
                            <Form.Control id="forces" type="text" size="sm" onChange={this.forces}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you to go one</Form.Text>
                            <Form.Control id="mile" type="text" size="sm" onChange={this.mile}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>go with them two</Form.Text>
                            <Form.Control id="miles" type="text" size="sm" onChange={this.miles}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:42 Give to the one who asks you, and do not turn away from the one who wants to</Form.Text>
                            <Form.Control id="borrow" type="text" size="sm" onChange={this.borrow}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>from you.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:43 You have heard that it was said, 'Love your neighbor and hate your enemy.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:44 But I tell you, love your enemies and pray for those who persecute you,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:45 that you may be children of your Father in heaven. He causes his sun to rise on the evil and the good, and </Form.Text>
                            <Form.Control id="sends" type="text" size="sm" onChange={this.sends}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>rain on the righteous and the</Form.Text>
                            <Form.Control id="unrighteous" type="text" size="sm" onChange={this.unrighteous}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:46 If you love those who love you, what reward will you get? Are not even the tax collectors doing that?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:47 And if you</Form.Text>
                            <Form.Control id="greet" type="text" size="sm" onChange={this.greet}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>only your own people, what are you doing more than others? Do not even pagans do that?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>5:48 Be perfect, therefore, as your heavenly Father is perfect. </Form.Text>
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

export default UWC5App;