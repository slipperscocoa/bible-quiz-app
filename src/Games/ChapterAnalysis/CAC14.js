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

function CAC14App() {
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
        <h4 className='text-warning' style={{ textAlign: 'center' }}>John the Baptist Beheaded</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Herod</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:1 At that time <b>Herod</b> the tetrarch heard the reports about Jesus, 
              <br />
              14:3 Now <b>Herod</b> had arrested John and bound him and put him in prison because
                   of Herodias, his brother Philip's wife,
              <br/>
              14:5 <b>Herod</b> wanted to kill John, but he was afraid of the people, because they 
                    considered John a prophet. 
              <br/>
              14:6 On <b>Herod</b>'s birthday the daughter of Herodias danced for the guests and pleased <b>Herod</b> so much
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
                14:1 At that time Herod the tetrarch heard the reports about <b>Jesus</b>,
                <br/>
                14:12 John's disciples came and took his body and buried it. Then they went and told <b>Jesus</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'This is John the Baptist; he has risen from the dead!'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:2 and he said to his attendants, "<b>This is John the Baptist; he has risen from the dead!</b> That is why
                   miraculous powers are at work in him."
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
              14:2 and he said to his attendants, "This is <b>John</b> the Baptist; he has risen from the dead! That is why
                   miraculous powers are at work in him."
              <br/>
              14:3 Now Herod had arrested <b>John</b> and bound him and put him in prison because
                   of Herodias, his brother Philip's wife,
              <br/>
              14:4 for <b>John</b> had been saying to him: "It is not lawful for you to have her."
              <br/>
              14:5 Herod wanted to kill <b>John</b>, but he was afraid of the people, because they 
                    considered <b>John</b> a prophet.
              <br/>
              14:8 Prompted by her mother, she said, "Give me here on a platter the head of <b>John</b> the Baptist."
              <br/>
              14:10 and had <b>John</b> beheaded in the prison.
              <br/>
              14:12 <b>John</b>'s disciples came and took his body and buried it. Then they went and told Jesus.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Herodias</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:3 Now Herod had arrested John and bound him and put him in prison because
                   of <b>Herodias</b>, his brother Philip's wife,
              <br/>
              14:6 on Herod's birthday the daughter of <b>Herodias</b> danced for the guests and pleased Herod so much
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Philip</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:3 Now Herod had arrested John and bound him and put him in prison because
                   of Herodias, his brother <b>Philip</b>'s wife,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Feeds the Five Thousand</h4>
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
              14:13 When <b>Jesus</b> heard what had happened, he withdrew by boat privately to a solitary place. Hearing
                    of this, the crowds followed him on foot from the towns.
              <br />
              14:14 When <b>Jesus</b> landed and saw a large crowd, he had compassion on them and healed their sick.
              <br/>
              14:16 <b>Jesus</b> replied, "They do not need to go away. You give them something to eat."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Walks on the Water</h4>
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
              14:22 Immediately <b>Jesus</b> made the disciples get into the boat and go on ahead of him 
                    to the other side, while he dismissed the crowd.
              <br />
              14:25 Shortly before dawn <b>Jesus</b> went out to them, walking on the lake.
              <br />
              14:27 But <b>Jesus</b> immediately said to them: "Take courage! It is I. Don't be afraid."
              <br/>
              14:29 "Come," he said. Then Peter got down out of the boat, walked on the water and came toward <b>Jesus</b>.
              <br/>
              14:31 Immediately <b>Jesus</b> reached out his hand and caught him. "You of little faith," he said, "why did you doubt?"
              <br/>
              14:35 And when the men of that place recognized <b>Jesus</b>, they sent word to all the surrounding country. People
                    brought all their sick to him
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Take courage!'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:27 But Jesus immediately said to them: "<b>Take courage!</b> It is I. Don't be afraid."
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
              14:28 "Lord, if it's you," <b>Peter</b> replied, "tell me to come to you on the water."
              <br/>
              14:29 "Come," he said. Then <b>Peter</b> got down out of the boat, walked on the water and came toward Jesus.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Lord, save me!'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:30 But when he saw the wind, he was afraid and, beginning to sink, cried out, "<b>Lord, save me!</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"You of little faith, why did you doubt?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:31 Immediately Jesus reached out his hand and caught him. "<b>You of little faith,</b>" he said, "<b>why did you doubt?</b>"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Gennesaret</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              14:34 When they had crossed over, they landed at <b>Gennesaret</b>.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC14App;