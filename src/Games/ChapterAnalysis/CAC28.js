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

function CAC28App() {
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
        <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Has Risen</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Mary Magdalene</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              28:1 After the Sabbath, at dawn on the first day of the week, <b>Mary Magdalene</b> and the other Mary went to look at the tomb.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Mary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              28:1 After the Sabbath, at dawn on the first day of the week, Mary Magdalene and the other <b>Mary</b> went to look at the tomb.
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
              28:5 The angel said to the women, "Do not be afraid, for I know that you are looking for <b>Jesus</b>, who was crucified."
              <br />
              28:9 Suddenly <b>Jesus</b> met them. "Greetings," he said. They came to him, clasped his feet and worshiped him.
              <br />
              28:10 Then <b>Jesus</b> said to them, "Do not be afraid. Go and tell my brothers to go to Galilee; there they will see me."
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Galilee</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              28:7 Then go quickly and tell his disciples: 'He has risen from the dead and is going ahead of you into <b>Galilee</b>. There you will see him.' Now I have told you.
              <br/>
              28:10 Then Jesus said to them, "Do not be afraid. Go and tell my brothers to go to <b>Galilee</b>; there they will see me."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <h4 className='text-warning' style={{ textAlign: 'center' }}>The Great Commission</h4>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Galilee</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              28:16 Then the eleven disciples went to <b>Galilee</b>, to the mountain where Jesus had told them to go.
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
              28:16 Then the eleven disciples went to Galilee, to the mountain where <b>Jesus</b> had told them to go.
              <br />
              28:18 Then <b>Jesus</b> come to them and said, "All authority in heaven and on earth has been given to me."
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default CAC28App;