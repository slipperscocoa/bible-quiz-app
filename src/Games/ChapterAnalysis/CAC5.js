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

function CAC5App() {
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
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Introduction to the Sermon on the Mount</h4>
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
              5:1 Now when <b>Jesus</b> saw the crowds, he went up on a mountainside and sat down. His disciples came to him,
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Salt and Light</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“But if the salt loses its saltiness, how can it be made salty again?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:13 "You are the salt of the earth. <b>But if the salt loses its saltiness, how can it be made salty again?</b>
              It is no longer good for anything, except to be thrown out and trampled underfoot.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Murder</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"You shall not murder"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:21 "You have heard that it was said to the people long ago, '<b>You shall not murder</b>, and anyone who murders will be subject to judgment.'"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"You fool!"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:22 But I tell you that anyone who is angry with a brother or sister will be subject to judgment. Again, anyone who says to a
              brother or sister, 'Raca', is answerable to the court. And anyone who says, <b>'You fool!'</b> will be in danger of the fire of hell.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Adultery</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"You shall not commit adultery"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:27 "You have heard that it was said, <b>'You shall not commit adultery'</b>."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Divorce</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Anyone who divorces his wife must give her a certificate of divorce.”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:31 "It has been said, '<b>Anyone who divorces his wife must give her a certificate of divorce.</b>'"
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Oaths</h4>
        <br />
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
              5:35 or by the earth, for it is his footstool; or by <b>Jerusalem</b>, for it is the city of the Great King.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Eye for Eye</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Eye for eye, and tooth for tooth'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:38 "You have heard that it was said, <b>'Eye for eye, and tooth for tooth'</b>."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Love for Enemies</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>'Love your neighbor'</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:43 "You have heard that it was said, '<b>Love your neighbor</b> and hate your enemy.'"
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“If you love those who love you, what reward will you get?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:46 “<b>If you love those who love you, what reward will you get?</b> Are not even the tax collectors doing that?”
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"Are not even the tax collectors doing that?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:46 “If you love those who love you, what reward will you get? <b>Are not even the tax collectors doing that?</b>”
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“And if you greet only your own people, what are you doing more than others?” </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:47 “<b>And if you greet only your own people, what are you doing more than others?</b> Do not even pagans do that?”
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Do not even pagans do that?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              5:47 “And if you greet only your own people, what are you doing more than others? <b>Do not even pagans do that?</b>”
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC5App;