import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var score = 0;

class UWC15App extends React.Component {
    declares = (e) => {
        var answer = e.target.value;

        if (answer === "declares") {
            document.getElementById("declares").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "declares") {
            document.getElementById("declares").style.color = 'red';
        }
    }

    nullify = (e) => {
        var answer = e.target.value;

        if (answer === "nullify") {
            document.getElementById("nullify").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "nullify") {
            document.getElementById("nullify").style.color = 'red';
        }
    }

    far = (e) => {
        var answer = e.target.value;

        if (answer === "far") {
            document.getElementById("far").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "far") {
            document.getElementById("far").style.color = 'red';
        }
    }

    vain = (e) => {
        var answer = e.target.value;

        if (answer === "vain") {
            document.getElementById("vain").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "vain") {
            document.getElementById("vain").style.color = 'red';
        }
    }

    teachings = (e) => {
        var answer = e.target.value;

        if (answer === "teachings") {
            document.getElementById("teachings").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "teachings") {
            document.getElementById("teachings").style.color = 'red';
        }
    }

    rules = (e) => {
        var answer = e.target.value;

        if (answer === "rules") {
            document.getElementById("rules").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "rules") {
            document.getElementById("rules").style.color = 'red';
        }
    }

    someones = (e) => {
        var answer = e.target.value;

        if (answer === "someone's") {
            document.getElementById("someones").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "someone's") {
            document.getElementById("someones").style.color = 'red';
        }
    }

    defiles = (e) => {
        var answer = e.target.value;

        if (answer === "defiles") {
            document.getElementById("defiles").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "defiles") {
            document.getElementById("defiles").style.color = 'red';
        }
    }

    offended = (e) => {
        var answer = e.target.value;

        if (answer === "offended") {
            document.getElementById("offended").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "offended") {
            document.getElementById("offended").style.color = 'red';
        }
    }

    plant = (e) => {
        var answer = e.target.value;

        if (answer === "plant") {
            document.getElementById("plant").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "plant") {
            document.getElementById("plant").style.color = 'red';
        }
    }

    roots = (e) => {
        var answer = e.target.value;

        if (answer === "roots") {
            document.getElementById("roots").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "roots") {
            document.getElementById("roots").style.color = 'red';
        }
    }

    dull = (e) => {
        var answer = e.target.value;

        if (answer === "dull") {
            document.getElementById("dull").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "dull") {
            document.getElementById("dull").style.color = 'red';
        }
    }

    enters = (e) => {
        var answer = e.target.value;

        if (answer === "enters") {
            document.getElementById("enters").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "enters") {
            document.getElementById("enters").style.color = 'red';
        }
    }

    stomach = (e) => {
        var answer = e.target.value;

        if (answer === "stomach") {
            document.getElementById("stomach").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "stomach") {
            document.getElementById("stomach").style.color = 'red';
        }
    }

    theft = (e) => {
        var answer = e.target.value;

        if (answer === "theft") {
            document.getElementById("theft").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "theft") {
            document.getElementById("theft").style.color = 'red';
        }
    }

    unwashed = (e) => {
        var answer = e.target.value;

        if (answer === "unwashed") {
            document.getElementById("unwashed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "unwashed") {
            document.getElementById("unwashed").style.color = 'red';
        }
    }

    canaanite = (e) => {
        var answer = e.target.value;

        if (answer === "Canaanite") {
            document.getElementById("canaanite").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Canaanite") {
            document.getElementById("canaanite").style.color = 'red';
        }
    }

    urged = (e) => {
        var answer = e.target.value;

        if (answer === "urged") {
            document.getElementById("urged").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "urged") {
            document.getElementById("urged").style.color = 'red';
        }
    }

    keeps = (e) => {
        var answer = e.target.value;

        if (answer === "keeps") {
            document.getElementById("keeps").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "keeps") {
            document.getElementById("keeps").style.color = 'red';
        }
    }

    childrens = (e) => {
        var answer = e.target.value;

        if (answer === "children's") {
            document.getElementById("childrens").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "children's") {
            document.getElementById("childrens").style.color = 'red';
        }
    }

    toss = (e) => {
        var answer = e.target.value;

        if (answer === "toss") {
            document.getElementById("toss").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "toss") {
            document.getElementById("toss").style.color = 'red';
        }
    }

    crumbs = (e) => {
        var answer = e.target.value;

        if (answer === "crumbs") {
            document.getElementById("crumbs").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "crumbs") {
            document.getElementById("crumbs").style.color = 'red';
        }
    }

    collapse = (e) => {
        var answer = e.target.value;

        if (answer === "collapse") {
            document.getElementById("collapse").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "collapse") {
            document.getElementById("collapse").style.color = 'red';
        }
    }

    afterward = (e) => {
        var answer = e.target.value;

        if (answer === "Afterward") {
            document.getElementById("afterward").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Afterward") {
            document.getElementById("afterward").style.color = 'red';
        }
    }

    magadan = (e) => {
        var answer = e.target.value;

        if (answer === "Magadan") {
            document.getElementById("magadan").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "Magadan") {
            document.getElementById("magadan").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/25 correct!");
    }

    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 15</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px' }}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:1 Then some Pharisees and teachers of the law came to Jesus from Jerusalem and asked,</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:2 "Why do your disciples break the tradition of the elders? They don't wash their hands before they eat!"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:3 Jesus replied, "And why do you break the command of God for the sake of your tradition?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:4 For God said, 'Honor your father and mother' and 'Anyone who curses their father or mother is to be put to death.'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:5 But you say that if anyone</Form.Text>
                            <Form.Control id="declares" type="text" size="sm" onChange={this.declares}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>that what might have been used to help their father or mother is 'devoted to God,'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:6 they are not to 'honor their father or mother' with it. Thus you</Form.Text>
                            <Form.Control id="nullify" type="text" size="sm" onChange={this.nullify}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the word of God for the sake of your tradition.</Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>15:7 You hypocrites! Isaiah was right when he prophesied about you:</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:8 "'These people honor me with their lips, but their hearts are</Form.Text>
                            <Form.Control id="far" type="text" size="sm" onChange={this.far}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>from me.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:9 They worship me in</Form.Text>
                            <Form.Control id="vain" type="text" size="sm" onChange={this.vain}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>their </Form.Text>
                            <Form.Control id="teachings" type="text" size="sm" onChange={this.teachings}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> are merely human</Form.Text>
                            <Form.Control id="rules" type="text" size="sm" onChange={this.rules}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>.'"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:10 Jesus called the crowd to him and said, "Listen and understand.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:11 What goes into</Form.Text>
                            <Form.Control id="someones" type="text" size="sm" onChange={this.someones}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>mouth does not defile them, but what comes out of their mouth, that is what</Form.Text>
                            <Form.Control id="defiles" type="text" size="sm" onChange={this.defiles}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>them."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:12 Then the disciples came to him and asked, "Do you know that the Pharisees were</Form.Text>
                            <Form.Control id="offended" type="text" size="sm" onChange={this.offended}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>when they heard this?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:13 He replied, "Every</Form.Text>
                            <Form.Control id="plant" type="text" size="sm" onChange={this.plant}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>that my heavenly Father has not planted will by pulled up by the</Form.Text>
                            <Form.Control id="roots" type="text" size="sm" onChange={this.roots}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:14 Leave them; they are blind guides. If the blind lead the blind, both will fall into a pit."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:15 Peter said, "Explain the parable to us."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:16 "Are you still so</Form.Text>
                            <Form.Control id="dull" type="text" size="sm" onChange={this.dull}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>?" Jesus asked them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:17 "Don't you see that whatever</Form.Text>
                            <Form.Control id="enters" type="text" size="sm" onChange={this.enters}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the mouth goes into the</Form.Text>
                            <Form.Control id="stomach" type="text" size="sm" onChange={this.stomach}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and then out of the body?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:18 But the things that come out of a person's mouth come from the heart, and these defile them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:19 For out of the heart come evil thoughts--murder, adultery, sexual immorality,</Form.Text>
                            <Form.Control id="theft" type="text" size="sm" onChange={this.theft}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>false testimony, slander.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:20 These are what defile a person; but eating with</Form.Text>
                            <Form.Control id="unwashed" type="text" size="sm" onChange={this.unwashed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>hands does not defile them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:21 Leaving that place, Jesus withdrew to the region of Tyre and Sidon.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:22 A</Form.Text>
                            <Form.Control id="canaanite" type="text" size="sm" onChange={this.canaanite}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>woman from that vicinity came to him, crying out, "Lord, Son of David, have mercy on me! My daughter is demon-possessed and suffering terribly."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:23 Jesus did not answer a word. So his disciples came to him and</Form.Text>
                            <Form.Control id="urged" type="text" size="sm" onChange={this.urged}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>him, "Send her away, for she</Form.Text>
                            <Form.Control id="keeps" type="text" size="sm" onChange={this.keeps}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>crying out after us." </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:24 He answered, "I was sent only to the lost sheep of Israel."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:25 The woman came and knelt before him, "Lord, help me!" she said.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:26 He replied, "It is not right to take the</Form.Text>
                            <Form.Control id="childrens" type="text" size="sm" onChange={this.childrens}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>bread and</Form.Text>
                            <Form.Control id="toss" type="text" size="sm" onChange={this.toss}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it to the dogs."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:27 "Yes it is, Lord," she said. "Even the dogs eat the </Form.Text>
                            <Form.Control id="crumbs" type="text" size="sm" onChange={this.crumbs}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>that fall from their master's table."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:28 Then Jesus said to her, "Woman, you have great faith! Your request is granted." And her daughter was healed at that moment.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:29 Jesus left there and went along the Sea of Galilee. Then he went up on a mountainside and sat down.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:30 Great crowds came to him, bringing the lame, the blind, the crippled, the mute and many others, and laid them at his feet; and he healed them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:31 The people were amazed when they saw the mute speaking, the crippled made well, the lame walking and the blind seeing. And they praised the God of Israel.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:32 Jesus called his disciples to him and said, "I have compassion for these people; they have already been with me three days and have nothing to eat. I do not want to send them away hungry, or they may</Form.Text>
                            <Form.Control id="collapse" type="text" size="sm" onChange={this.collapse}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>on the way.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:33 His disciples answered, "Where could we get enough bread in this remote place to feed such a crowd?"</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:34 "How many loaves do you have?" Jesus asked, "Seven," they replied, "and a few small fish."</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:35 He told the crowd to sit down on the ground.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:36 Then he took the seven loaves and the fish, and when he had given thanks, he broke them and gave them to the disciples, and they in turn to the people.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:37 They all ate and were satisfied. </Form.Text>
                            <Form.Control id="afterward" type="text" size="sm" onChange={this.afterward}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the disciples picked up seven basketfuls of broken pieces that were left over.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:38 The number of those who ate was four thousand men, besides women and children.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>15:39 After Jesus had sent the crowd away, he got into the boat and went to the vicinity of </Form.Text>
                            <Form.Control id="magadan" type="text" size="sm" onChange={this.magadan}></Form.Control>
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

export default UWC15App;