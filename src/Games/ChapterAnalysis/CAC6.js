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

function CAC6App() {
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
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Treasures in Heaven</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>“If then the light within you is darkness, how great is that darkness!”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:23 But if your eyes are unhealthy, your whole body will be full of darkness. <b>If then the light within you is darkness, how great is that darkness!</b>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Do Not Worry</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Is not life more than food, and the body more than clothes?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:25 Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear.
              <b>Is not life more than food, and the body more than clothes?</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Are you not much more valuable than they?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:26 Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father
              feeds them.<b>Are you not much more valuable than they?</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“Can any one of you by worrying add a single hour to your life?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:27 <b>Can any one of you by worrying add a single hour to your life?</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“And why do you worry about clothes?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:28 <b>And why do you worry about clothes?</b> See how the flowers of the field grow. They do not labor or spin.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Solomon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:29 Yet I tell you that not even <b>Solomon</b> in all his splendor was dressed like one of these.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>“If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you—you of little faith?”</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:30 <b>If that is how God clothes the grass of the field, which is here today and tomorrow is thrown into the fire, will he not much more clothe you—you of little faith?</b>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"What shall we eat?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:31 So do not worry, saying, <b>'What shall we eat?'</b> or 'What shall we drink?' or 'What shall we wear?'
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"What shall we drink?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:31 So do not worry, saying, 'What shall we drink?' or <b>'What shall we drink?'</b> or 'What shall we wear?'
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>"What shall we wear?"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              6:31 So do not worry, saying, 'What shall we drink?' or 'What shall we drink?' or <b>'What shall we wear?'</b>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC6App;