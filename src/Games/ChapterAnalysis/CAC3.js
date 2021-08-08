import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function CAC3App() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: '15px', paddingTop: '90px', textAlign: 'left' }}>
      <h1 className='text-warning' style={{ textAlign: 'center' }}>Chapter Analysis</h1>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>Proper names and places, as well as questions, exclamations, parenthetical statements, and Old Testament Scripture passages
         make up the Chapter Analysis content. This section is a study tool for those questions. Drop down each tab to read the verses,
         and then take a quiz to see how well you retained the information. For a more detailed explanation, check out our help page!
      </p>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>John the Baptist Prepares the Way</h4>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>John</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:1 In those days <b>John</b> the Baptist came, preaching in the wilderness of Judea
            <br/>
            3:4 <b>John</b>'s clothes were made of camel's hair, and he had a leather belt around his waist. His food was locusts and wild honey.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Judea</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:1 In those days John the Baptist came, preaching in the wilderness of <b>Judea</b>
            <br/>
            3:5 People went out to him from Jerusalem and all <b>Judea</b> and the whole region of the Jordan.
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
            3:3 This is he who was spoken of through the prophet <b>Isaiah</b>: “A voice of one calling in the wilderness, ‘Prepare the way for the Lord, make straight paths for him.’”
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>“A voice of one calling in the wilderness, ‘Prepare the way for the Lord, make straight paths for him.’”</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          3:3 This is he who was spoken of through the prophet Isaiah: <b>“A voice of one calling in the wilderness, ‘Prepare the way for the Lord, make straight paths for him.’”</b>
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
            3:5 People went out to him from <b>Jerusalem</b> and all Judea and the whole region of the Jordan.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Jordan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:5 People went out to him from Jerusalem and all Judea and the whole region of the <b>Jordan</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Jordan River</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:6 Confessing their sins, they were baptized by him in the <b>Jordan River</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"You brood of vipers!"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:7 But when he saw many of the Pharisees and Sadducees coming to where he was baptizing, he said to them: <b>"You
                brood of vipers!</b> Who warned you to flee from the coming wrath?"
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"Who warned you to flee from the coming wrath?"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:7 But when he saw many of the Pharisees and Sadducees coming to where he was baptizing, he said to them: "You
                brood of vipers! <b>Who warned you to flee from the coming wrath? </b>"
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
            3:9 And do not think you can say to yourselves, 'We have <b>Abraham</b> as our father.' I tell you that out of these 
                stones God can raise up children for <b>Abraham</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>The Baptism of Jesus</h4>
      <br/>
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
            3:13 Then <b>Jesus</b> came from Galilee to the Jordan to be baptized by John.
            <br/>
            3:15 <b>Jesus</b> replied, "Let it be so now; it is proper for us to do this to fulfill all righteousness." Then John consented. 
            <br/>
            3:16 As soon as <b>Jesus</b> was baptized, he went up out of the water. At that moment heaven was opened, and he 
                 saw the Spirit of God descending like a dove and alighting on him.
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
            3:13 Then Jesus came from <b>Galilee</b> to the Jordan to be baptized by John.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Jordan</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:13 Then Jesus came from Galilee to the <b>Jordan</b> to be baptized by John.
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
            3:13 Then Jesus came from Galilee to the Jordan to be baptized by <b>John</b>.
            <br/>
            3:14 But <b>John</b> tried to deter him saying, "I need to be baptized by you, and do you come to me?"
            <br/>
            3:15 Jesus replied, "Let it be so now; it is proper for us to do this to fulfill all righteousness." Then <b>John</b> consented.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"I need to be baptized by you, and do you come to me?"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            3:14 But John tried to deter him saying, <b>"I need to be baptized by you, and do you come to me?"</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CAC3App; 