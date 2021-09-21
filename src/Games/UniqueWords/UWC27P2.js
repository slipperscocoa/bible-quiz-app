import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var score = 0;

class UWC27P2App extends React.Component {
    
    gall = (e) => {
        var answer = e.target.value;

        if (answer === "gall") {
            document.getElementById("gall").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "gall") {
            document.getElementById("gall").style.color = 'red';
        }
    }

    tasting = (e) => {
        var answer = e.target.value;

        if (answer === "tasting") {
            document.getElementById("tasting").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "tasting") {
            document.getElementById("tasting").style.color = 'red';
        }
    }

    lots = (e) => {
        var answer = e.target.value;

        if (answer === "lots") {
            document.getElementById("lots").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "lots") {
            document.getElementById("lots").style.color = 'red';
        }
    }

    passed = (e) => {
        var answer = e.target.value;

        if (answer === "passed") {
            document.getElementById("passed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "passed") {
            document.getElementById("passed").style.color = 'red';
        }
    }

    hurled = (e) => {
        var answer = e.target.value;

        if (answer === "hurled") {
            document.getElementById("hurled").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hurled") {
            document.getElementById("hurled").style.color = 'red';
        }
    }

    shaking = (e) => {
        var answer = e.target.value;

        if (answer === "shaking") {
            document.getElementById("shaking").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "shaking") {
            document.getElementById("shaking").style.color = 'red';
        }
    }

    cant = (e) => {
        var answer = e.target.value;

        if (answer === "can't") {
            document.getElementById("cant").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "can't") {
            document.getElementById("cant").style.color = 'red';
        }
    }

    trusts = (e) => {
        var answer = e.target.value;

        if (answer === "trusts") {
            document.getElementById("trusts").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "trusts") {
            document.getElementById("trusts").style.color = 'red';
        }
    }

    rescue = (e) => {
        var answer = e.target.value;

        if (answer === "rescue") {
            document.getElementById("rescue").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "rescue") {
            document.getElementById("rescue").style.color = 'red';
        }
    }

    heaped = (e) => {
        var answer = e.target.value;

        if (answer === "heaped") {
            document.getElementById("heaped").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "heaped") {
            document.getElementById("heaped").style.color = 'red';
        }
    }

    lema = (e) => {
        var answer = e.target.value;

        if (answer === "lema") {
            document.getElementById("lema").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "lema") {
            document.getElementById("lema").style.color = 'red';
        }
    }

    sabachthani = (e) => {
        var answer = e.target.value;

        if (answer === "sabachthani") {
            document.getElementById("sabachthani").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sabachthani") {
            document.getElementById("sabachthani").style.color = 'red';
        }
    }

    forsaken = (e) => {
        var answer = e.target.value;

        if (answer === "forsaken") {
            document.getElementById("forsaken").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "forsaken") {
            document.getElementById("forsaken").style.color = 'red';
        }
    }

    sponge = (e) => {
        var answer = e.target.value;

        if (answer === "sponge") {
            document.getElementById("sponge").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sponge") {
            document.getElementById("sponge").style.color = 'red';
        }
    }

    vinegar = (e) => {
        var answer = e.target.value;

        if (answer === "vinegar") {
            document.getElementById("vinegar").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "vinegar") {
            document.getElementById("vinegar").style.color = 'red';
        }
    }

    curtain = (e) => {
        var answer = e.target.value;

        if (answer === "curtain") {
            document.getElementById("curtain").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "curtain") {
            document.getElementById("curtain").style.color = 'red';
        }
    }

    torn = (e) => {
        var answer = e.target.value;

        if (answer === "torn") {
            document.getElementById("torn").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "torn") {
            document.getElementById("torn").style.color = 'red';
        }
    }

    top = (e) => {
        var answer = e.target.value;

        if (answer === "top") {
            document.getElementById("top").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "top") {
            document.getElementById("top").style.color = 'red';
        }
    }

    bottom = (e) => {
        var answer = e.target.value;

        if (answer === "bottom") {
            document.getElementById("bottom").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "bottom") {
            document.getElementById("bottom").style.color = 'red';
        }
    }

    rocks = (e) => {
        var answer = e.target.value;

        if (answer === "rocks") {
            document.getElementById("rocks").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "rocks") {
            document.getElementById("rocks").style.color = 'red';
        }
    }

    split = (e) => {
        var answer = e.target.value;

        if (answer === "split") {
            document.getElementById("split").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "split") {
            document.getElementById("split").style.color = 'red';
        }
    }

    guarding = (e) => {
        var answer = e.target.value;

        if (answer === "guarding") {
            document.getElementById("guarding").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "guarding") {
            document.getElementById("guarding").style.color = 'red';
        }
    }

    exclaimed = (e) => {
        var answer = e.target.value;

        if (answer === "exclaimed") {
            document.getElementById("exclaimed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "exclaimed") {
            document.getElementById("exclaimed").style.color = 'red';
        }
    }

    watching = (e) => {
        var answer = e.target.value;

        if (answer === "watching") {
            document.getElementById("watching").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "watching") {
            document.getElementById("watching").style.color = 'red';
        }
    }

    arimathea = (e) => {
        var answer = e.target.value;

        if (answer === "Arimathea") {
            document.getElementById("arimathea").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Arimathea") {
            document.getElementById("arimathea").style.color = 'red';
        }
    }

    wrapped = (e) => {
        var answer = e.target.value;

        if (answer === "wrapped") {
            document.getElementById("wrapped").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "wrapped") {
            document.getElementById("wrapped").style.color = 'red';
        }
    }

    linen = (e) => {
        var answer = e.target.value;

        if (answer === "linen") {
            document.getElementById("linen").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "linen") {
            document.getElementById("linen").style.color = 'red';
        }
    }

    big = (e) => {
        var answer = e.target.value;

        if (answer === "big") {
            document.getElementById("big").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "big") {
            document.getElementById("big").style.color = 'red';
        }
    }

    entrance = (e) => {
        var answer = e.target.value;

        if (answer === "entrance") {
            document.getElementById("entrance").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "entrance") {
            document.getElementById("entrance").style.color = 'red';
        }
    }

    opposite = (e) => {
        var answer = e.target.value;

        if (answer === "opposite") {
            document.getElementById("opposite").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "opposite") {
            document.getElementById("opposite").style.color = 'red';
        }
    }

    next = (e) => {
        var answer = e.target.value;

        if (answer === "next") {
            document.getElementById("next").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "next") {
            document.getElementById("next").style.color = 'red';
        }
    }

    preparation = (e) => {
        var answer = e.target.value;

        if (answer === "Preparation") {
            document.getElementById("preparation").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Preparation") {
            document.getElementById("preparation").style.color = 'red';
        }
    }

    alive = (e) => {
        var answer = e.target.value;

        if (answer === "alive") {
            document.getElementById("alive").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "alive") {
            document.getElementById("alive").style.color = 'red';
        }
    }

    deceiver = (e) => {
        var answer = e.target.value;

        if (answer === "deceiver") {
            document.getElementById("deceiver").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "deceiver") {
            document.getElementById("deceiver").style.color = 'red';
        }
    }

    deception = (e) => {
        var answer = e.target.value;

        if (answer === "deception") {
            document.getElementById("deception").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "deception") {
            document.getElementById("deception").style.color = 'red';
        }
    }

    putting = (e) => {
        var answer = e.target.value;

        if (answer === "putting") {
            document.getElementById("putting").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "putting") {
            document.getElementById("putting").style.color = 'red';
        }
    }

    seal = (e) => {
        var answer = e.target.value;

        if (answer === "seal") {
            document.getElementById("seal").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "seal") {
            document.getElementById("seal").style.color = 'red';
        }
    }

    posting = (e) => {
        var answer = e.target.value;

        if (answer === "posting") {
            document.getElementById("posting").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "posting") {
            document.getElementById("posting").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/38 correct!");
    }
    
    render() {
        return(
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 27: Part 2</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px'}}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:34 There they offered Jesus wine to drink, mixed with</Form.Text>
                            <Form.Control id="gall" type="text" size="sm" onChange={this.gall}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>but after</Form.Text>
                            <Form.Control id="tasting" type="text" size="sm" onChange={this.tasting}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it, he refused to drink it.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:35 When they had crucified him, they divided up his clothes by casting</Form.Text>
                            <Form.Control id="lots" type="text" size="sm" onChange={this.lots}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:36 And sitting down, they kept watch over him there.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:37 Above his head they placed the written charge against him: THIS IS JESUS, THE KING OF THE JEWS.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:38 Two rebels were crucified with him, one on his right and one on his left.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:39 Those who</Form.Text>
                            <Form.Control id="passed" type="text" size="sm" onChange={this.passed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>by</Form.Text>
                            <Form.Control id="hurled" type="text" size="sm" onChange={this.hurled}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>insults at him,</Form.Text>
                            <Form.Control id="shaking" type="text" size="sm" onChange={this.shaking}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>their heads</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:40 and saying, "You who are going to destroy the temple and build it in three days, save yourself! Come down from the cross, if you are the Son of God!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:41 In the same way the chief priests, the teachers of the law and the elders mocked him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:42 "He saved others," they said, "but he</Form.Text>
                            <Form.Control id="cant" type="text" size="sm" onChange={this.cant}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>save himself! He's the king of Israel! Let him come down now from the cross, and we will believe in him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:43 He</Form.Text>
                            <Form.Control id="trusts" type="text" size="sm" onChange={this.trusts}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>in God. Let God</Form.Text>
                            <Form.Control id="rescue" type="text" size="sm" onChange={this.rescue}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>him now if he wants him, for he said, 'I am the Son of God.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:44 In the same way the rebels who were crucified with him also</Form.Text>
                            <Form.Control id="heaped" type="text" size="sm" onChange={this.heaped}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>insults on him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:45 From noon until three in the afternoon darkness came over all the land.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:46 About three in the afternoon Jesus cried out in a loud voice, "Eli, Eli,</Form.Text>
                            <Form.Control id="lema" type="text" size="sm" onChange={this.lema}></Form.Control>
                            <Form.Control id="sabachthani" type="text" size="sm" onChange={this.sabachthani}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>(which means, "My God, my God, why have you </Form.Text>
                            <Form.Control id="forsaken" type="text" size="sm" onChange={this.forsaken}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>me?").</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:47 When some of those standing there heard this, they said, "He's calling Elijah."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:48 Immediately one of them ran and got a</Form.Text>
                            <Form.Control id="sponge" type="text" size="sm" onChange={this.sponge}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>He filled it with wine</Form.Text>
                            <Form.Control id="vinegar" type="text" size="sm" onChange={this.vinegar}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>put it on a staff, and offered it to Jesus to drink.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:49 The rest said, "Now leave him alone. Let's see if Elijah comes to save him."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:50 And when Jesus had cried out again in a loud voice, he gave up his spirit.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:51 At that moment the</Form.Text>
                            <Form.Control id="curtain" type="text" size="sm" onChange={this.curtain}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of the temple was</Form.Text>
                            <Form.Control id="torn" type="text" size="sm" onChange={this.torn}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>in two from</Form.Text>
                            <Form.Control id="top" type="text" size="sm" onChange={this.top}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to</Form.Text>
                            <Form.Control id="bottom" type="text" size="sm" onChange={this.bottom}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>The earth shook, the</Form.Text>
                            <Form.Control id="rocks" type="text" size="sm" onChange={this.rocks}></Form.Control>
                            <Form.Control id="split" type="text" size="sm" onChange={this.split}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:52 and the tombs broke open. The bodies of many holy people who had died were raised to life.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:53 They came out of the tombs after Jesus' resurrection and went into the holy city and appeared to many people.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:54 When the centurion and those with him who were</Form.Text>
                            <Form.Control id="guarding" type="text" size="sm" onChange={this.guarding}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>Jesus saw the earthquake and all that had happened, they were terrified, and</Form.Text>
                            <Form.Control id="exclaimed" type="text" size="sm" onChange={this.exclaimed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>"Surely he was the Son of God!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:55 Many women were there,</Form.Text>
                            <Form.Control id="watching" type="text" size="sm" onChange={this.watching}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>from a distance. They had followed Jesus from Galilee to care for his needs.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:56 Among them were Mary Magdalene, Mary the mother of James and Joseph, and the mother of Zebedee's sons.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:57 As evening approached, there came a rich man from</Form.Text>
                            <Form.Control id="arimathea" type="text" size="sm" onChange={this.arimathea}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>named Joseph, who had himself become a disciple of Jesus.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:58 Going to Pilate, he asked for Jesus' body, and Pilate ordered that it be given to him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:59 Joseph took the body,</Form.Text>
                            <Form.Control id="wrapped" type="text" size="sm" onChange={this.wrapped}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it in a clean</Form.Text>
                            <Form.Control id="linen" type="text" size="sm" onChange={this.linen}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>cloth,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:60 and placed it in his own new tomb that he had cut out of the rock. He rolled a</Form.Text>
                            <Form.Control id="big" type="text" size="sm" onChange={this.big}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>stone in front of the</Form.Text>
                            <Form.Control id="entrance" type="text" size="sm" onChange={this.entrance}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to the tomb and went away.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:61 Mary Magadalene and the other Mary were sitting there</Form.Text>
                            <Form.Control id="opposite" type="text" size="sm" onChange={this.opposite}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the tomb.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:62 The</Form.Text>
                            <Form.Control id="next" type="text" size="sm" onChange={this.next}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>day, the one after</Form.Text>
                            <Form.Control id="preparation" type="text" size="sm" onChange={this.preparation}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>Day, the chief priests and the Pharisees went to Pilate.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:63 "Sir," they said, "we remember that while he was still</Form.Text>
                            <Form.Control id="alive" type="text" size="sm" onChange={this.alive}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>that</Form.Text>
                            <Form.Control id="deceiver" type="text" size="sm" onChange={this.deceiver}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>said, 'After three days I will rise again.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:64 So give the order for the tomb to be made secure until the third day. Otherwise, his disciples may come and steal the body and tell the people that he has been raised from the dead. This last</Form.Text>
                            <Form.Control id="deception" type="text" size="sm" onChange={this.deception}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>will be worse than the first."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:65 "Take a guard," Pilate answered, "Go, make the tomb as secure as you know how."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:66 So they went and made the tomb secure by</Form.Text>
                            <Form.Control id="putting" type="text" size="sm" onChange={this.putting}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>a</Form.Text>
                            <Form.Control id="seal" type="text" size="sm" onChange={this.seal}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>on the stone and</Form.Text>
                            <Form.Control id="posting" type="text" size="sm" onChange={this.posting}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the guard.</Form.Text>
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

export default UWC27P2App;