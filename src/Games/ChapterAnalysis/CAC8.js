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

function CAC8App() {
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
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Heals a Man With Leprosy</h4>
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
              8:1 When <b>Jesus</b> came down from the mountainside, large crowds followed him.
              <br/>
              8:3 <b>Jesus</b> reached out his hand and touched the man. "I am willing," he said. "Be clean!" Immediately he was cleansed of his leprosy.
              <br/>
              8:4 Then <b>Jesus</b> said to him, "See that you don't tell anyone. But go, show yourself to the priest and offer the gift Moses
                  commanded, as a testimony to them."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Be clean!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:3 Jesus reached out his hand and touched the man. "I am willing," he said. <b>"Be clean!"</b> Immediately he was cleansed of his leprosy.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Moses</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:4 Then Jesus said to him, "See that you don't tell anyone. But go, show yourself to the priest and offer the 
                  gift <b>Moses</b> commanded, as a testimony to them."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Faith of the Centurion</h4>
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
              8:5 When <b>Jesus</b> had entered Capernaum, a centurion came to him, asking for help.
              <br/>
              8:7 <b>Jesus</b> said to him, "Shall I come and heal him?"
              <br/>
              8:10 When <b>Jesus</b> heard this, he was amazed and said to those following him, "Truly I tell you, 
                   I have not found anyone in Israel with such great faith."
              <br/>
              8:13 Then <b>Jesus</b> said to the centurion, "Go! Let it be done just as you believed it would." And 
                   his servant was healed at that moment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Capernaum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:5 When Jesus had entered <b>Capernaum</b>, a centurion came to him, asking for help.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Shall I come and heal him?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:7 Jesus said to him, <b>"Shall I come and heal him?"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Israel</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:10 When Jesus heard this, he was amazed and said to those following him, "Truly I tell you, 
                   I have not found anyone in <b>Israel</b> with such great faith."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Abraham</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:11 I say to you that many will come from the east and the west, and will take their places at the
                   feast with <b>Abraham</b>, Isaac, and Jacob in the kingdom of heaven.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Isaac</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:11 I say to you that many will come from the east and the west, and will take their places at the
                   feast with Abraham, <b>Isaac</b>, and Jacob in the kingdom of heaven.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jacob</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:11 I say to you that many will come from the east and the west, and will take their places at the
                   feast with Abraham, Isaac, and <b>Jacob</b> in the kingdom of heaven.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Go!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:13 Then Jesus said to the centurion, "<b>Go!</b> Let it be done just as you believed it would." And 
                   his servant was healed at that moment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Heals Many</h4>
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
              8:14 When <b>Jesus</b> came into Peter's house, he saw Peter's mother-in-law lying in bed with a fever.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Peter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:14 When Jesus came into <b>Peter</b>'s house, he saw <b>Peter</b>'s mother-in-law lying in bed with a fever.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Isaiah</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:17 This was to fulfill what was spoken through the prophet <b>Isaiah</b>: "He took up our
                   infirmities and bore our diseases."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“He took up our infirmities and bore our diseases.”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:17 This was to fulfill what was spoken through the prophet Isaiah: <b>"He took up our
                   infirmities and bore our diseases."</b>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Cost of Folllowing Jesus</h4>
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
              8:18 When <b>Jesus</b> saw the crowd around him, he gave orders to cross to the other side of the lake.
              <br/>
              8:20 <b>Jesus</b> replied, "Foxes have dens and birds have nests, but the Son of Man has no place to lay his head."
              <br/>
              8:22 But <b>Jesus</b> told him, "Follow me, and let the dead bury their own dead."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Calms the Storm</h4>
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
              8:24 Suddenly a furious storm came up on the lake, so that the waves swept over the boat. But <b>Jesus</b> was sleeping.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Lord, save us!”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:25 The disciples went and woke him, saying, "<b>Lord, save us!</b> We're going to drown!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"We're going to drown!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8::25 The disciples went and woke him, saying, "Lord, save us! <b>We're going to drown!</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“You of little faith, why are you so afraid?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:26 He replied, <b>“You of little faith, why are you so afraid?”</b> Then he got up and rebuked the winds 
                   and the waves, and it was completely calm.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“What kind of man is this?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:27 The men were amazed and asked, <b>“What kind of man is this?</b> Even the winds and the waves obey him!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Even the winds and the waves obey him!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:27 The men were amazed and asked, “What kind of man is this? <b>Even the winds and the waves obey him!"</b>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Restores Two Demon-Possessed Men</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“What do you want with us, Son of God?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:29 <b>“What do you want with us, Son of God?”</b> they shouted. “Have you come here to torture us before the appointed time?”
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Have you come here to torture us before the appointed time?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:29 “What do you want with us, Son of God?” they shouted. <b>“Have you come here to torture us before the appointed time?”</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

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
              8:31 The demons begged <b>Jesus</b>, "If you drive us out, send us into the herd of pigs."
              <br/>
              8:34 Then the whole town went out to meet <b>Jesus</b>. And When they saw him, they pleaded with him to leave their region.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Go!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              8:32 He said to them, <b>"Go!"</b> So they came out and went into the pigs, and the whole herd rushed down the 
                   steep bank into the lake and died in the water.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC8App;