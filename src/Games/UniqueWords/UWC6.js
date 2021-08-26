import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 

var score = 0;

class UWC6App extends React.Component {

    announce = (e) => {
        var answer = e.target.value;

        if (answer === "announce") {
            document.getElementById("announce").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "announce") {
            document.getElementById("announce").style.color = 'red';
        }
    }

    trumpets = (e) => {
        var answer = e.target.value;

        if (answer === "trumpets") {
            document.getElementById("trumpets").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "trumpets") {
            document.getElementById("trumpets").style.color = 'red';
        }
    }

    honored = (e) => {
        var answer = e.target.value;

        if (answer === "honored") {
            document.getElementById("honored").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "honored") {
            document.getElementById("honored").style.color = 'red';
        }
    }

    room = (e) => {
        var answer = e.target.value;

        if (answer === "room") {
            document.getElementById("room").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "room") {
            document.getElementById("room").style.color = 'red';
        }
    }

    close = (e) => {
        var answer = e.target.value;

        if (answer === "close") {
            document.getElementById("close").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "close") {
            document.getElementById("close").style.color = 'red';
        }
    }

    babbling = (e) => {
        var answer = e.target.value;

        if (answer === "babbling") {
            document.getElementById("babbling").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "babbling") {
            document.getElementById("babbling").style.color = 'red';
        }
    }

    hallowed = (e) => {
        var answer = e.target.value;

        if (answer === "hallowed") {
            document.getElementById("hallowed").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "hallowed") {
            document.getElementById("hallowed").style.color = 'red';
        }
    }

    daily = (e) => {
        var answer = e.target.value;

        if (answer === "daily") {
            document.getElementById("daily").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "daily") {
            document.getElementById("daily").style.color = 'red';
        }
    }

    debts = (e) => {
        var answer = e.target.value;

        if (answer === "debts") {
            document.getElementById("debts").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "debts") {
            document.getElementById("debts").style.color = 'red';
        }
    }

    debtors = (e) => {
        var answer = e.target.value;

        if (answer === "debtors") {
            document.getElementById("debtors").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "debtors") {
            document.getElementById("debtors").style.color = 'red';
        }
    }

    somber = (e) => {
        var answer = e.target.value;

        if (answer === "somber") {
            document.getElementById("somber").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "somber") {
            document.getElementById("somber").style.color = 'red';
        }
    }

    disfigure = (e) => {
        var answer = e.target.value;

        if (answer === "disfigure") {
            document.getElementById("disfigure").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "disfigure") {
            document.getElementById("disfigure").style.color = 'red';
        }
    }

    obvious = (e) => {
        var answer = e.target.value;

        if (answer === "obvious") {
            document.getElementById("obvious").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "obvious") {
            document.getElementById("obvious").style.color = 'red';
        }
    }

    unhealthy = (e) => {
        var answer = e.target.value;

        if (answer === "unhealthy") {
            document.getElementById("unhealthy").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "unhealthy") {
            document.getElementById("unhealthy").style.color = 'red';
        }
    }

    within = (e) => {
        var answer = e.target.value;

        if (answer === "within") {
            document.getElementById("within").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "within") {
            document.getElementById("within").style.color = 'red';
        }
    }

    air = (e) => {
        var answer = e.target.value;

        if (answer === "air") {
            document.getElementById("air").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "air") {
            document.getElementById("air").style.color = 'red';
        }
    }

    reap = (e) => {
        var answer = e.target.value;

        if (answer === "reap") {
            document.getElementById("reap").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "reap") {
            document.getElementById("reap").style.color = 'red';
        }
    }

    barns = (e) => {
        var answer = e.target.value;

        if (answer === "barns") {
            document.getElementById("barns").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "barns") {
            document.getElementById("barns").style.color = 'red';
        }
    }

    feeds = (e) => {
        var answer = e.target.value;

        if (answer === "feeds") {
            document.getElementById("feeds").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "feeds") {
            document.getElementById("feeds").style.color = 'red';
        }
    }

    worrying = (e) => {
        var answer = e.target.value;

        if (answer === "worrying") {
            document.getElementById("worrying").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "worrying") {
            document.getElementById("worrying").style.color = 'red';
        }
    }

    add = (e) => {
        var answer = e.target.value;

        if (answer === "add") {
            document.getElementById("add").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "add") {
            document.getElementById("add").style.color = 'red';
        }
    }

    flowers = (e) => {
        var answer = e.target.value;

        if (answer === "flowers") {
            document.getElementById("flowers").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "flowers") {
            document.getElementById("flowers").style.color = 'red';
        }
    }

    labor = (e) => {
        var answer = e.target.value;

        if (answer === "labor") {
            document.getElementById("labor").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "labor") {
            document.getElementById("labor").style.color = 'red';
        }
    }

    spin = (e) => {
        var answer = e.target.value;

        if (answer === "spin") {
            document.getElementById("spin").style.color = 'green';
            score = score + 1;
        }
        else if (answer !== "spin") {
            document.getElementById("spin").style.color = 'red';
        }
    }

    reset = () => {
        score = 0;
    }

    getScore = () => {
        alert("You got " + score + "/24 correct!");
    }

    render() {
        return (
            <div>
                <Container fluid='lg'>
                    <Form className="text-white" style={{ paddingTop: '90px' }}>
                        <Form.Group>
                            <Form.Text><h1 className="text-warning">Matthew Chapter 6</h1></Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text><h3>Instructions:</h3></Form.Text>
                            <Form.Text style={{ fontSize: '15px' }}>Fill in each blank with the correct unique word. Green text means you gave the
                                right answer; incorrect responses remain red. Pay careful attention to spelling and punctuation!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:1 Be careful not to practice your righteousness in front of others to be seen by them. If you do, you will have no reward from your Father in heaven. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:2 So when you give to the needy, do not  </Form.Text>
                            <Form.Control id="announce" type="text" size="sm" onChange={this.announce}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>it with </Form.Text>
                            <Form.Control id="trumpets" type="text" size="sm" onChange={this.trumpets}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>as the hypocrites do in the synagogues and on the streets, to be </Form.Text>
                            <Form.Control id="honored" type="text" size="sm" onChange={this.honored}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>by others. Truly I tell you, they have received their reward in full. </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text style={{ fontSize: '20px' }}>6:3 But when you give to the needy, do not let your left hand know what your right hand is doing.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:4 so that your giving may be in secret. Then your Father, who sees what is done in secret, will reward you.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:5 And when you pray, do not be like the hypocrites, for they love to pray standing in the synagogues and on the street corners to be seen by others. Truly I tell you, they have received their reward in full.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:6 But when you pray, go into your </Form.Text>
                            <Form.Control id="room" type="text" size="sm" onChange={this.room}></Form.Control>
                            <Form.Control id="close" type="text" size="sm" onChange={this.close}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:7 And when you pray, do not keep on</Form.Text>
                            <Form.Control id="babbling" type="text" size="sm" onChange={this.babbling}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>like pagans, for they think they will be heard because of their many words.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:8 Do not be like them, for your Father knows what you need before you ask him.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:9 This, then, is how you should pray: "Our Father in heaven," </Form.Text>
                            <Form.Control id="hallowed" type="text" size="sm" onChange={this.hallowed}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}> be your name,  </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:10 your kingdom come, your will be done, on earth as it is in heaven.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:11 Give us today our </Form.Text>
                            <Form.Control id="daily" type="text" size="sm" onChange={this.daily}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>bread. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:12 And forgive us our </Form.Text>
                            <Form.Control id="debts" type="text" size="sm" onChange={this.debts}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>as we have also forgiven our</Form.Text>
                            <Form.Control id="debtors" type="text" size="sm" onChange={this.debtors}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:13 And lead us not into temptation, but deliver us from the evil one.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:14 For if you forgive other people when they sin against you, your heavenly Father will also forgive you.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:15 But if you do not forgive others their sins, your Father will not forgive your sins.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:16 When you fast, do not look </Form.Text>
                            <Form.Control id="somber" type="text" size="sm" onChange={this.somber}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>as the hypocrites do, for they </Form.Text>
                            <Form.Control id="disfigure" type="text" size="sm" onChange={this.disfigure}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>their faces to show others they are fasting. Truly I tell you, they have received their reward in full.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:17 But when you fast, put oil on your head and wash your face.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:18 so that is will not be</Form.Text>
                            <Form.Control id="obvious" type="text" size="sm" onChange={this.obvious}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you. </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:19 Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:20 But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:21 For where your treasure is, there your heart will be also.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:22 The eye is the lamp of the body. If your eyes are healthy, your whole body will be full of light.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:23 But if your eyes are</Form.Text>
                            <Form.Control id="unhealthy" type="text" size="sm" onChange={this.unhealthy}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>your whole body will be full of darkness. If then the light</Form.Text>
                            <Form.Control id="within" type="text" size="sm" onChange={this.within}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>you is darkness, how great is that darkness! </Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:24 No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:25 Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:26 Look at the birds of the </Form.Text>
                            <Form.Control id="air" type="text" size="sm" onChange={this.air}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>they do not sow or</Form.Text>
                            <Form.Control id="reap" type="text" size="sm" onChange={this.reap}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>or store away in </Form.Text>
                            <Form.Control id="barns" type="text" size="sm" onChange={this.barns}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>and yet your heavenly Father </Form.Text>
                            <Form.Control id="feeds" type="text" size="sm" onChange={this.feeds}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>them. Are you not much more valuable than they?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:27 Can any one of you by  </Form.Text>
                            <Form.Control id="worrying" type="text" size="sm" onChange={this.worrying}></Form.Control>
                            <Form.Control id="add" type="text" size="sm" onChange={this.add}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>a single hour to your life?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:28 And why do you worry about clothes? See how the</Form.Text>
                            <Form.Control id="flowers" type="text" size="sm" onChange={this.flowers}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>of the field grow. They do not</Form.Text>
                            <Form.Control id="labor" type="text" size="sm" onChange={this.labor}></Form.Control>
                            <Form.Text style={{ fontSize: '20px' }}>or</Form.Text>
                            <Form.Control id="spin" type="text" size="sm" onChange={this.spin}></Form.Control>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:29 Yet I tell you that not even Solomon in all his splendor was dressed like one of these.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:30 If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you--you of little faith?</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:31 So do not worry, saying 'What shall we eat? or 'What shall we drink?' or 'What shall we wear?'</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:32 For the pagans run after all these things, and your heavenly Father knows that you need them.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:33 But seek first his kingdom and his righteousness, and all these things will be given to you as well.</Form.Text>
                        </Form.Group>

                        <Form.Group style={{ padding: '20px' }}>
                            <Form.Text style={{ fontSize: '20px' }}>6:34 Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.</Form.Text>
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

export default UWC6App;