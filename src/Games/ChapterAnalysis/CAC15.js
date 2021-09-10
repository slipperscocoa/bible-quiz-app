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

function CAC15App() {
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
        <h4 className='text-warning' style={{ textAlign: 'center' }}>That Which Defiles</h4>
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
              15:1 Then some Pharisees and teachers of the law came to <b>Jesus</b> from Jerusalem and asked,
              <br />
              15:3 <b>Jesus</b> replied, "And why do you break the command of God for the sake of your tradition?"
              <br />
              15:10 <b>Jesus</b> called the crowd to him and said, "Listen and understand."
              <br />
              15:16 "Are you still so dull?" <b>Jesus</b> asked them.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Jerusalem</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:1 Then some Pharisees and teachers of the law came to Jesus from <b>Jerusalem</b> and asked,
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Why do your disciples break the tradition of the elders?'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:2 "<b>Why do your disciples break the tradition of the elders?</b> They don't wash their hands before they eat!"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'They don't wash their hands before they eat!'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:2 "Why do your disciples break the tradition of the elders? <b>They don't wash their hands before they eat!</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"And why do you break the command of God for the sake of your tradition?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:3 Jesus replied, "<b>And why do you break the command of God for the sake of your tradition?</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Honor your father and mother'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:4 For God said, <b>'Honor your father and mother'</b> and 'Anyone who curses their father or mother is to be put to death.'
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Anyone who curses their father or mother is to be put to death.'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:4 For God said, 'Honor your father and mother' and <b>'Anyone who curses their father or mother is to be put to death.'</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'You hypocrites!</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:7 <b>You hypocrites!</b> Isaiah was right when he prophesied about you:
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
              15:7 You hypocrites! <b>Isaiah</b> was right when he prophesied about you:
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'These people honor me with their lips, but their hearts are from me. They worship me in vain; their teachings are merely human rules.'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:8-9 "<b>'These people honor me with their lips, but their hearts are from me. They worship me in vain; their teachings are merely human rules.'</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Do you know that the Pharisees were offended when they heard this?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:12 Then the disciples came to him and said, "<b>Do you know that the Pharisees were offended when they heard this?</b>""
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
              15:15 <b>Peter</b> said, "Explain the parable to us."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Are you still so dull?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:16 "<b>"Are you still so dull?"</b>" Jesus asked them.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Don't you see that whatever enters the mouth goes into the stomach and then out of the body?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:17 "<b>Don't you see that whatever enters the mouth goes into the stomach and then out of the body?</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Faith of a Canaanite Woman</h4>
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
              15:21 Leaving that place, <b>Jesus</b> withdrew to the region of Tyre and Sidon.
              <br />
              15:23 <b>Jesus</b> did not answer a word. So his disciples came to him and urged him, "Send her away, for she keeps crying out after us."
              <br/>
              15:28 Then <b>Jesus</b> said to her, "Woman, you have great faith! Your request is granted." And her daughter was healed at that moment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Tyre</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:21 Leaving that place, Jesus withdrew to the region of <b>Tyre</b> and Sidon.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Sidon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:21 Leaving that place, Jesus withdrew to the region of Tyre and <b>Sidon</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Lord, Son of David, have mercy on me!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:22 A Canaanite woman from that vicinity came to him, crying out, "<b>Lord, Son of David, have mercy on me!</b> My
                    daughter is demon-possessed and suffering terribly."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>David</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:22 A Canaanite woman from that vicinity came to him, crying out, "Lord, Son of <b>David</b>, have mercy on me! My
                    daughter is demon-possessed and suffering terribly."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Lord, help me!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:25 The woman came and knelt before him, "<b>Lord, help me!</b>" she said.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Woman, you have great faith!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:28 Then Jesus said to her, "<b>Woman, you have great faith!</b> Your request is granted." And her daughter was healed at that moment.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Feeds the Four Thousand</h4>
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
              15:29 <b>Jesus</b> left there and went along the Sea of Galilee. Then he went up on a mountainside and sat down.
              <br />
              15:32 <b>Jesus</b> called his disciples to him and said, "I have compassion for these people; they have already been with me
                    three days and have nothing to eat. I do not want to send them away hungry, or they may collapse on way."
              <br />
              15:34 "How many loaves do you have?" <b>Jesus</b> asked. "Seven," they replied, "and a few small fish."
              <br />
              15:39 After <b>Jesus</b> had sent the crowd away, he got into the boat and went to the vicinity of Magadan.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Sea of Galilee</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:29 Jesus left there and went along the <b>Sea of Galilee</b>. Then he went up on a mountainside and sat down.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Where could we get enough bread in this remote place to feed such a crowd?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:33 His disciples answered, "<b>Where could we get enough bread in this remote place to feed such a crowd?</b>" 
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"How many loaves do you have?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:34 "<b>How many loaves do you have?</b>" Jesus asked. "Seven," they replied, "and a few small fish."
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Magadan</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              15:39 After Jesus had sent the crowd away, he got into the boat and went to the vicinity of <b>Magadan</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC15App;