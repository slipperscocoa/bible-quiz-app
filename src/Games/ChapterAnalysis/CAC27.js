import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from 'react-bootstrap/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function CAC27App() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: '15px', paddingTop: '90px', textAlign: 'left' }}>
      <Container fluid='lg'>
        <h1 className='text-warning' style={{ textAlign: 'center' }}>Chapter Analysis</h1>
        <p className="text-white" style={{ fontSize: '16px', textAlign: 'center' }}>Proper names and places, as well as questions, exclamations, parenthetical statements, and Old Testament Scripture passages
          make up the Chapter Analysis content. This section is a study tool for those questions. Drop down each tab to read the verses
          containing this content. For a more detailed explanation, check out our help page!
        </p>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Judas Hangs Himself</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Jesus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:1 Early in the morning, all the chief priests and the elders of the people made their plans how to have <b>Jesus</b> executed.
              <br />
              27:3 When Judas, who had betrayed him, say that <b>Jesus</b> was condemned, he was seized with remorse and returned the thirty
              pieces of silver to the chief priests and the elders.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Pilate</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:2 So they bound him, led him away and handed him oveer to <b>Pilate</b> the governor.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Judas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:3 When <b>Judas</b>, who had betrayed him, say that Jesus was condemned, he was seized with remorse and returned the thirty
                   pieces of silver to the chief priests and the elders.
              <br/>
              27:5 So <b>Judas</b> threw the money into the temple and left. Then he went away and hanged himself.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"What is that to us?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:4 "I have sinned," he said, "for I have betrayed innocent blood." <b>"What is that to us?"</b> they replied, "That's your responsibility."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Field of Blood</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:8 That is why it has been called the <b>Field of Blood</b> to this day.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jeremiah</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:9 Then what was spoken by <b>Jeremiah</b> the prophet was fulfilled: "They took the thirty pieces of silver, the price set on him by the people of Israel,"
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Before Pilate</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jesus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:11 Meanwhile <b>Jesus</b> stood before the governor, and the governor asked him, "Are you the king of the Jews?" "You have said so," <b>Jesus</b> replied.
              <br />
              27:14 But <b>Jesus</b> made no reply, not even to a single charge -- to the great amazement of the governor.
              <br />
              27:17 So when the crowd had gathered, Pilate asked them, "Which one do you want me to release to you: Jesus Barabbas, or <b>Jesus</b> who is called the Messiah?"
              <br />
              27:18 For he knew it was out of self-interest that they had handed <b>Jesus</b> over to him.
              <br />
              27:20 But the chief priests and the elders persuaded the crowd to ask for Barabbas and to have <b>Jesus</b> executed.
              <br />
              27:22 "What shall I do, then, with <b>Jesus</b> who is called the Messiah?" Pilate asked. They all answered, "Crucify him!"
              <br />
              27:26 Then he released Barabbas to them. But he had <b>Jesus</b> flogged, and handed him over to be crucified.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Are you the king of the Jews?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:11 Meanwhile Jesus stood before the governor, and the governor asked him, <b>"Are you the king of the Jews?"</b> "You have said so," Jesus replied.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Pilate</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:13 Then <b>Pilate</b> asked him, "Don't you hear the testimony they are bringing against you?"
              <br />
              27:17 So when the crowd had gathered, <b>Pilate</b> asked them, "Which one do you want me to release to you: Jesus Barabbas, or Jesus who is called the Messiah?"
              <br/>
              27:19 While <b>Pilate</b> was sitting on the judge's seat, his wife sent him this message: "Don't have anything to do with that innocent man, for I have suffered a great deal today in a dream because of him."
              <br/>
              27:22 "What shall I do, then, with Jesus who is called the Messiah?" <b>Pilate</b> asked. They all answered, "Crucify him!"
              <br/>
              27:23 "Why? What crime has he committed?" asked Pilate. But they shouted all the louder, "Crucify him!"
              <br/>
              27:24 When <b>Pilate</b> saw that he was getting nowhere, but that instead an uproar was starting, he took water and washed his hands in front of 
                    the crowd. "I am innocent of this man's blood," he said. "It is your responsibility!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Don't you hear the testimony they are bringing against you?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:13 Then Pilate asked him, <b>"Don't you hear the testimony they are bringing against you?"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jesus Barabbas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:16 At that time they had a well-known prisoner whose name was <b>Jesus Barabbas</b>.
              <br/>
              27:17 So when the crowd had gathered, Pilate asked them, "Which one do you want me to release to you: <b>Jesus Barabbas</b>, or Jesus who is called the Messiah?"
              <br/>
              27:20 But the chief priests and the elders persuaded the crowd to ask for <b>Barabbas</b> and to have Jesus executed.
              <br/>
              27:21 "Which of the two do you want me to release to you?" asked the governor. "<b>Barabbas</b>," they answered.
              <br/>
              27:26 Then he released <b>Barabbas</b> to them. But he had Jesus flogged, and handed him over to be crucified.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Which one do you want me to release to you: Jesus Barabbas, or Jesus who is called the Messiah?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:17 So when the crowd had gathered, Pilate asked them, <b>"Which one do you want me to release to you: Jesus Barabbas, or Jesus who is called the Messiah?"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Which of the two do you want me to release to you?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:21  <b>"Which of the two do you want me to release to you?"</b> asked the governor. "Barabbas," they answered.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"What shall I do, then, with Jesus who is called the Messiah?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:22  <b>"What shall I do, then, with Jesus who is called the Messiah?"</b> Pilate asked. They all answered, "Crucify him!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Crucify him!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:22 "What shall I do, then, with Jesus who is called the Messiah?" Pilate asked. They all answered, <b>"Crucify him!"</b>
              <br/>
              27:23 "Why? What crime has he committed?" asked Pilate. But they shouted all the louder, <b>"Crucify him!"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Why?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:23 "<b>Why?</b> What crime has he committed?" asked Pilate. But they shouted all the louder, "Crucify him!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"What crime has he committed?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:23 "Why? <b>What crime has he committed?</b>" asked Pilate. But they shouted all the louder, "Crucify him!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"It is your responsibility!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:24 When Pilate saw that he was getting nowhere, but that instead an uproar was starting, he took water and washed his hands in front of 
                    the crowd. "I am innocent of this man's blood," he said. <b>"It is your responsibility!"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"His blood is on us and on our children!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:25 All the people answered, <b>"His blood is on us and on our children!"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Soldiers Mock Jesus</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jesus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:27 Then the governor's soldiers took <b>Jesus</b> into the Praetorium and gathered the whole company of soldiers around him.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Hail, king of the Jews!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:29 and then twisted together a crown of thorns and set it on his head. They put a staff in his right hand. Then they
                    knelt in front of him and mocked him. <b>"Hail, king of the Jews!"</b> they said.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Crucifixion of Jesus</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Cyrene</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:32 As they were going out, they met a man from <b>Cyrene</b>, named Simon, and they forced him to carry the cross.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Simon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:32 As they were going out, they met a man from Cyrene, named <b>Simon</b>, and they forced him to carry the cross.
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Jesus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:34 There they offered <b>Jesus</b> wine to drink, mixed with gall; but after tasting it, he refused to drink it.
              <br/>
              27:37 Above his head they placed the written charge against him: THIS IS <b>JESUS</b>, THE KING OF THE JEWS.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Golgotha</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:33 They came to a place called <b>Golgotha</b> (which means "the place of the skull")
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>(which means "the place of the skull")</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:33 They came to a place called Golgotha <b>(which means "the place of the skull")</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"the place of the skull"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:33 They came to a place called Golgotha (which means <b>"the place of the skull"</b>)
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"You who are going to destroy the temple and build it in three days, save yourself!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:40 and saying, "<b>You who are going to destroy the temple and build it in three days, save yourself!</b> Come down from the cross, if you are the Son of God!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Come down from the cross, if you are the Son of God!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:40 and saying, "You who are going to destroy the temple and build it in three days, save yourself! <b>Come down from the cross, if you are the Son of God!</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"He saved others, but he can't save himself!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:42 "<b>He saved others,"</b> they said, <b>"but he can't save himself!"</b> "He's the king of Israel!" Let him come down now from the cross, and we will believe in him.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"He's the king of Israel!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:42 "He saved others," they said, "but he can't save himself!" <b>"He's the king of Israel!"</b> Let him come down now from the cross, and we will believe in him.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Death of Jesus</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jesus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:46 About three in the afternoon <b>Jesus</b> cried out in a loud voice, "Eli, Eli, ema sabachthani?" (which means, "My God,
                    my God, why have you forsaken me?").
              <br/>
              27:48 Immediately one of them ran and got a sponge. He filled it with wine vinegar, put it on a staff, and offered it to <b>Jesus</b> to drink.
              <br/>
              27:50 And when <b>Jesus</b> had cried out again in a loud voice, he gave up his spirit.
              <br/>
              27:53 They came out of the tombs after <b>Jesus</b>' resurrection and went into the holy city and appeared to many people.
              <br/>
              27:54 When the centurion and those with him who were guarding <b>Jesus</b> saw the earthquake and all that had happened, they were
                    terrified, and exclaimed, "Surely he was the Son of God!"
              <br/>
              27:55 Many women were there, watching from a distance. They had followed <b>Jesus</b> from Galilee to care for his needs.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Eli, Eli, ema sabachthani?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:46 About three in the afternoon Jesus cried out in a loud voice, <b>"Eli, Eli, ema sabachthani?"</b> (which means, "My God,
                    my God, why have you forsaken me?").
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>(which means, "My God, my God, why have you forsaken me?")</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:46 About three in the afternoon Jesus cried out in a loud voice, "Eli, Eli, ema sabachthani?" <b>(which means, "My God,
                    my God, why have you forsaken me?").</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"My God, my God, why have you forsaken me?" (Question)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:46 About three in the afternoon Jesus cried out in a loud voice, "Eli, Eli, ema sabachthani?" (which means, <b>"My God,
                    my God, why have you forsaken me?</b>").
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"My God, my God, why have you forsaken me?" (Old Testament Scripture)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:46 About three in the afternoon Jesus cried out in a loud voice, "Eli, Eli, ema sabachthani?" (which means, <b>"My God,
                    my God, why have you forsaken me?</b>").
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Elijah</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:47 When some of those standing there heard this, they said, "He's calling <b>Elijah</b>."
              <br/>
              27:49 The rest said, "Now leave him alone. Let's see if <b>Elijah</b> comes to save him."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Surely he was the Son of God!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              27:54 When the centurion and those with him who were guarding Jesus saw the earthquake and all that had happened, they were
                    terrified, and exclaimed, <b>"Surely he was the Son of God!"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Crucifixion of Jesus</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Zebedee</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:21 Going on from there, he saw two other brothers, James son of <b>Zebedee</b> and his brother John. They were in boat with their
              father <b>Zebedee</b>, preparing their nets. Jesus called them,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>John</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:21 Going on from there, he saw two other brothers, James son of Zebedee and his brother <b>John</b>. They were in boat with their
              father Zebedee, preparing their nets. Jesus called them,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Crucifixion of Jesus</h4>
        <br />

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Andrew</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother <b>Andrew</b>. They
              were casting a net into the lake, for they were fishermen.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC27App;