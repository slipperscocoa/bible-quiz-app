import React from 'react'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var score = 0;

class UWC27App extends React.Component {
    
    remorse = (e) => {
        var answer = e.target.value;

        if (answer === "remorse") {
            document.getElementById("remorse").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "remorse") {
            document.getElementById("remorse").style.color = 'red';
        }
    }

    sinned = (e) => {
        var answer = e.target.value;

        if (answer === "sinned") {
            document.getElementById("sinned").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "sinned") {
            document.getElementById("sinned").style.color = 'red';
        }
    }

    thats = (e) => {
        var answer = e.target.value;

        if (answer === "That's") {
            document.getElementById("thats").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "That's") {
            document.getElementById("thats").style.color = 'red';
        }
    }

    hanged = (e) => {
        var answer = e.target.value;

        if (answer === "hanged") {
            document.getElementById("hanged").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hanged") {
            document.getElementById("hanged").style.color = 'red';
        }
    }

    treasury = (e) => {
        var answer = e.target.value;

        if (answer === "treasury") {
            document.getElementById("treasury").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "treasury") {
            document.getElementById("treasury").style.color = 'red';
        }
    }

    decided = (e) => {
        var answer = e.target.value;

        if (answer === "decided") {
            document.getElementById("decided").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "decided") {
            document.getElementById("decided").style.color = 'red';
        }
    }

    foreigners = (e) => {
        var answer = e.target.value;

        if (answer === "foreigners") {
            document.getElementById("foreigners").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "foreigners") {
            document.getElementById("foreigners").style.color = 'red';
        }
    }

    meanwhile = (e) => {
        var answer = e.target.value;

        if (answer === "Meanwhile") {
            document.getElementById("meanwhile").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Meanwhile") {
            document.getElementById("meanwhile").style.color = 'red';
        }
    }

    accused = (e) => {
        var answer = e.target.value;

        if (answer === "accused") {
            document.getElementById("accused").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "accused") {
            document.getElementById("accused").style.color = 'red';
        }
    }

    amazement = (e) => {
        var answer = e.target.value;

        if (answer === "amazement") {
            document.getElementById("amazement").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "amazement") {
            document.getElementById("amazement").style.color = 'red';
        }
    }

    custom = (e) => {
        var answer = e.target.value;

        if (answer === "custom") {
            document.getElementById("custom").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "custom") {
            document.getElementById("custom").style.color = 'red';
        }
    }

    judges = (e) => {
        var answer = e.target.value;

        if (answer === "judge's") {
            document.getElementById("judges").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "judge's") {
            document.getElementById("judges").style.color = 'red';
        }
    }

    suffered = (e) => {
        var answer = e.target.value;

        if (answer === "suffered") {
            document.getElementById("suffered").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "suffered") {
            document.getElementById("suffered").style.color = 'red';
        }
    }

    deal = (e) => {
        var answer = e.target.value;

        if (answer === "deal") {
            document.getElementById("deal").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "deal") {
            document.getElementById("deal").style.color = 'red';
        }
    }

    persuaded = (e) => {
        var answer = e.target.value;

        if (answer === "persuaded") {
            document.getElementById("persuaded").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "persuaded") {
            document.getElementById("persuaded").style.color = 'red';
        }
    }

    crime = (e) => {
        var answer = e.target.value;

        if (answer === "crime") {
            document.getElementById("crime").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "crime") {
            document.getElementById("crime").style.color = 'red';
        }
    }

    nowhere = (e) => {
        var answer = e.target.value;

        if (answer === "nowhere") {
            document.getElementById("nowhere").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "nowhere") {
            document.getElementById("nowhere").style.color = 'red';
        }
    }

    uproar = (e) => {
        var answer = e.target.value;

        if (answer === "uproar") {
            document.getElementById("uproar").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "uproar") {
            document.getElementById("uproar").style.color = 'red';
        }
    }

    starting = (e) => {
        var answer = e.target.value;

        if (answer === "starting") {
            document.getElementById("starting").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "starting") {
            document.getElementById("starting").style.color = 'red';
        }
    }

    washed = (e) => {
        var answer = e.target.value;

        if (answer === "washed") {
            document.getElementById("washed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "washed") {
            document.getElementById("washed").style.color = 'red';
        }
    }

    released = (e) => {
        var answer = e.target.value;

        if (answer === "released") {
            document.getElementById("released").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "released") {
            document.getElementById("released").style.color = 'red';
        }
    }

    praetorium = (e) => {
        var answer = e.target.value;

        if (answer === "Praetorium") {
            document.getElementById("praetorium").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Praetorium") {
            document.getElementById("praetorium").style.color = 'red';
        }
    }

    company = (e) => {
        var answer = e.target.value;

        if (answer === "company") {
            document.getElementById("company").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "company") {
            document.getElementById("company").style.color = 'red';
        }
    }

    stripped = (e) => {
        var answer = e.target.value;

        if (answer === "stripped") {
            document.getElementById("stripped").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "stripped") {
            document.getElementById("stripped").style.color = 'red';
        }
    }

    scarlet = (e) => {
        var answer = e.target.value;

        if (answer === "scarlet") {
            document.getElementById("scarlet").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "scarlet") {
            document.getElementById("scarlet").style.color = 'red';
        }
    }

    twisted = (e) => {
        var answer = e.target.value;

        if (answer === "twisted") {
            document.getElementById("twisted").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "twisted") {
            document.getElementById("twisted").style.color = 'red';
        }
    }

    crown = (e) => {
        var answer = e.target.value;

        if (answer === "crown") {
            document.getElementById("crown").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "crown") {
            document.getElementById("crown").style.color = 'red';
        }
    }

    hail = (e) => {
        var answer = e.target.value;

        if (answer === "Hail") {
            document.getElementById("hail").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Hail") {
            document.getElementById("hail").style.color = 'red';
        }
    }

    cyrene = (e) => {
        var answer = e.target.value;

        if (answer === "Cyrene") {
            document.getElementById("cyrene").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Cyrene") {
            document.getElementById("cyrene").style.color = 'red';
        }
    }

    forced = (e) => {
        var answer = e.target.value;

        if (answer === "forced") {
            document.getElementById("forced").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "forced") {
            document.getElementById("forced").style.color = 'red';
        }
    }

    golgotha = (e) => {
        var answer = e.target.value;

        if (answer === "Golgotha") {
            document.getElementById("golgotha").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Golgotha") {
            document.getElementById("golgotha").style.color = 'red';
        }
    }

    skull = (e) => {
        var answer = e.target.value;

        if (answer === "skull") {
            document.getElementById("skull").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "skull") {
            document.getElementById("skull").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/32 correct!");
    }
    
    render() {
        return(
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 27: Part 1</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px'}}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:1 Early in the morning, all the chief priests and the elders of the people made their plans how to have Jesus executed.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:2 So they bound him, led him away and handed him over to Pilate the governor.</Form.Text>
                        </Form.Group>
                        
                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:3 When Judas, who had betrayed him, saw that Jesus was condemned, he was seized with</Form.Text>
                            <Form.Control id="remorse" type="text" size="sm" onChange={this.remorse}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> and returned the thirty pieces of silver to the chief priests and the elders.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:4 "I have </Form.Text>
                            <Form.Control id="sinned" type="text" size="sm" onChange={this.sinned}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>he said, "for I have betrayed innocent blood. "What is that to us?" they replied.</Form.Text>
                            <Form.Control id="thats" type="text" size="sm" onChange={this.thats}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>your responsibility."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:5 So Judas threw the money into the temple and left. Then he went away and</Form.Text>
                            <Form.Control id="hanged" type="text" size="sm" onChange={this.hanged}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>himself.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:6 The chief priests picked up the coins and said, "It is against the law to put this into the</Form.Text>
                            <Form.Control id="treasury" type="text" size="sm" onChange={this.treasury}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>since it is blood money."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:7 So they</Form.Text>
                            <Form.Control id="decided" type="text" size="sm" onChange={this.decided}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to use the money to buy the potter's field as a burial place for</Form.Text>
                            <Form.Control id="foreigners" type="text" size="sm" onChange={this.foreigners}></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:8 That is why it has been called the Field of Blood to this day.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:9 Then what was spoken by Jeremiah the prophet was fulfilled: "They took the thirty pieces of silver, the price set on him by the people of Israel,</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>27:10 and they used them to buy the potter's field, as the Lord commanded me."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:11</Form.Text>
                            <Form.Control id="meanwhile" type="text" size="sm" onChange={this.meanwhile}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>Jesus stood before the governor, and the governor asked him, "Are you the king of the Jews?" "You have said so," Jesus replied.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:12 When he was</Form.Text>
                            <Form.Control id="accused" type="text" size="sm" onChange={this.accused}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> by the chief priests and the elders, he gave no answer.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:13 Then Pilate asked him, "Don't you hear the testimony they are bringing against you?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:14 But Jesus made no reply, not even to a single charge -- to the great</Form.Text>
                            <Form.Control id="amazement" type="text" size="sm" onChange={this.amazement}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of the governor.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:15 Now it was the governor's</Form.Text>
                            <Form.Control id="custom" type="text" size="sm" onChange={this.custom}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>at the festival to release a prisoner chosen by the crowd.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:16 At that time they had a well-known prisoner whose name was Jesus Barabbas.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:17 So when the crowd had gathered, Pilate asked them, "Which one do you want me to release to you: Jesus Barabbas, or Jesus who is called the Messiah?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:18 For he knew it was out of self-interest that they had handed Jesus over to him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:19 While Pilate was sitting on the</Form.Text>
                            <Form.Control id="judges" type="text" size="sm" onChange={this.judges}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>seat, his wife sent him this message: "Don't have anything to do with that innocent man, for I have</Form.Text>
                            <Form.Control id="suffered" type="text" size="sm" onChange={this.suffered}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>a great</Form.Text>
                            <Form.Control id="deal" type="text" size="sm" onChange={this.deal}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>today in a dream because of him."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:20 But the chief priests and the elders</Form.Text>
                            <Form.Control id="persuaded" type="text" size="sm" onChange={this.persuaded}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the crowd to ask for Barabbas and to have Jesus executed.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:21 "Which of the two do you want me to release to you?" asked the governor. "Barabbas," they answered.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:22 "What shall I do, then, with Jesus who is called the Messiah?" Pilate asked. They all answered, "Crucify him!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:23 "Why? What</Form.Text>
                            <Form.Control id="crime" type="text" size="sm" onChange={this.crime}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>has he committed?" asked Pilate. But they shouted all the louder, "Crucify him!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:24 When Pilate saw that he was getting </Form.Text>
                            <Form.Control id="nowhere" type="text" size="sm" onChange={this.nowhere}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>but that instead an</Form.Text>
                            <Form.Control id="uproar" type="text" size="sm" onChange={this.uproar}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>was</Form.Text>
                            <Form.Control id="starting" type="text" size="sm" onChange={this.starting}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>he took water and</Form.Text>
                            <Form.Control id="washed" type="text" size="sm" onChange={this.washed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>his hands in front of the crowd. "I am innocent of this man's blood," he said. "It is your responsibility!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:25 All the people answered, "His blood is on us and on our children!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:26 The he</Form.Text>
                            <Form.Control id="released" type="text" size="sm" onChange={this.released}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>Barabbas to them. But he had Jesus flogged, and handed him over to be crucified.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:27 Then the governor's soldiers took Jesus into the</Form.Text>
                            <Form.Control id="praetorium" type="text" size="sm" onChange={this.praetorium}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and gathered the whole</Form.Text>
                            <Form.Control id="company" type="text" size="sm" onChange={this.company}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of soldiers around him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:28 They</Form.Text>
                            <Form.Control id="stripped" type="text" size="sm" onChange={this.stripped}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>him and put a</Form.Text>
                            <Form.Control id="scarlet" type="text" size="sm" onChange={this.scarlet}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>robe on him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:29 and then</Form.Text>
                            <Form.Control id="twisted" type="text" size="sm" onChange={this.twisted}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>together a</Form.Text>
                            <Form.Control id="crown" type="text" size="sm" onChange={this.crown}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of thorns and set it on his head. They put a staff in his right hand. Then they knelt in front of him and mocked him.</Form.Text>
                            <Form.Control id="hail" type="text" size="sm" onChange={this.hail}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>king of the Jews!" they said. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:30 They spit on him, and took the staff and struck him on the head again and again.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:31 After they had mocked him, they took off the robe and put his own clothes on him. Then they led him away to crucify him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:32 As they were going out, they met a man from</Form.Text>
                            <Form.Control id="cyrene" type="text" size="sm" onChange={this.cyrene}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>named Simon, and they</Form.Text>
                            <Form.Control id="forced" type="text" size="sm" onChange={this.forced}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>him to carry the cross.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>27:33 They came to a place called</Form.Text>
                            <Form.Control id="golgotha" type="text" size="sm" onChange={this.golgotha}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>(which means "the place of the")</Form.Text>
                            <Form.Control id="skull" type="text" size="sm" onChange={this.skull}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>").</Form.Text>
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

export default UWC27App;