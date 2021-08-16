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

function CAC2App() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: '15px', paddingTop: '90px', textAlign: 'left' }}>
      <h1 className='text-warning' style={{ textAlign: 'center' }}>Chapter Analysis</h1>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>Proper names and places, as well as questions, exclamations, parenthetical statements, and Old Testament Scripture passages
         make up the Chapter Analysis content. This section is a study tool for those questions. Drop down each tab to read the verses
         containing this content. For a more detailed explanation, check out our help page!
      </p>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>The Magi Visit the Messiah</h4>
      <br/>
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
            2:1 After <b>Jesus</b> was born in Bethlehem in Judea, during the time of King Herod, Magi from the east came to Jerusalem
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bethlehem</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:1 After Jesus was born in <b>Bethlehem</b> in Judea, during the time of King Herod, Magi from the east came to Jerusalem
            <br/>
            2:5 "In <b>Bethlehem</b> in Judea," they replied, "for this is what the prophet has written:"
            <br/>
            2:6 "'But you, <b>Bethlehem</b>, in the land of Judah, are by no means least among the rulers of Judah, for out of you will come a ruler who will shepherd my people Israel.'"
            <br/>
            2:8 He sent them to <b>Bethlehem</b> and said, "Go and search carefully for the child. As soon as you find you, report to me, so that I too may go and worship him."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Judah</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:1 After Jesus was born in Bethlehem in <b>Judea</b>, during the time of King Herod, Magi from the east came to Jerusalem
            <br/>
            2:5 "In Bethlehem in <b>Judea</b>," they replied, "for this is what the prophet has written:"
            <br/>
            2:6 "'But you, Bethlehem, in the land of <b>Judah</b>, are by no means least among the rulers of <b>Judah</b>, for out of you will come a ruler who will shepherd my people Israel.'"
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
            2:1 After Jesus was born in Bethlehem in Judea, during the time of King Herod, Magi from the east came to <b>Jerusalem</b>
            <br/>
            2:3 When King Herod heard this he was disturbed, and all <b>Jerusalem</b> with him. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Herod</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:1 After Jesus was born in Bethlehem in Judea, during the time of King <b>Herod</b>, Magi from the east came to Jerusalem
            <br/>
            2:3 When King <b>Herod</b> heard this he was disturbed, and all Jerusalem with him. 
            <br/>
            2:7 Then <b>Herod</b> called the Magi secretly and found out from them the exact time the star had appeared.
            <br/>
            2:12 And having been warned in a dream not to go back to <b>Herod</b>, they returned to their country by another route.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"Where is the one who has been born king of Jews?"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:2 and asked, "<b>Where is the one who has been born king of Jews?</b> We saw his star when it rose and have come to worship him."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"But you, Bethlehem, in the land of Judah, are by no means least among the rulers of Judah, for out of you will come a ruler who will shepherd my people Israel."</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:6 <b>"But you, Bethlehem, in the land of Judah, are by no means least among the rulers of Judah, for out of you will come a ruler who will shepherd my people Israel."</b>
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
            2:11 On coming to the house, they saw the child with his mother <b>Mary</b>, and they bowed down and worshipped him. Then they
                 opened their treasures and presented him with the gifts of gold, frankincense, and myrrh.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>The Escape to Egypt</h4>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Joseph</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:13 When they had gone, an angel of the Lord appeared to <b>Joseph</b> in a dream. "Get up", he said, "take the child and his mother
                 and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Egypt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:13 When they had gone, an angel of the Lord appeared to Joseph in a dream. "Get up", he said, "take the child and his mother
                 and escape to <b>Egypt</b>. Stay there until I tell you, for Herod is going to search for the child to kill him."
            <br/>
            2:14 So he got up, took the child and his mother during the night and left for <b>Egypt</b>,
            <br/>
            2:15 where he stayed until the death of Herod. And so was fulfilled what the Lord had said through the prophet: "Out of <b>Egypt</b> I called my son."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Herod</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:13 When they had gone, an angel of the Lord appeared to Joseph in a dream. "Get up", he said, "take the child and his mother
                 and escape to Egypt. Stay there until I tell you, for <b>Herod</b> is going to search for the child to kill him."
            <br/>
            2:15 where he stayed until the death of <b>Herod</b>. And so was fulfilled what the Lord had said through the prophet: "Out of Egypt I called my son."
            <br/>
            2:16 When <b>Herod</b> realized that he had been outwitted by the Magi, he was furious, and he gave orders to kill all the boys in Bethlehem
                 and its vicinity who were two years old and under, in accordance with the time he had learned from the Magi.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"Out of Egypt I called my son."</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:15 where he stayed until the death of Herod. And so was fulfilled what the Lord had said through the prophet: <b>"Out of Egypt I called my son."</b>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Bethlehem</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:16 When Herod realized that he had been outwitted by the Magi, he was furious, and he gave orders to kill all the boys in <b>Bethlehem</b>
                 and its vicinity who were two years old and under, in accordance with the time he had learned from the Magi.
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
            2:17 Then what was said through the prophet <b>Jeremiah</b> was fulfilled:
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>“A voice is heard in Ramah, weeping and great mourning, Rachel weeping for her children and refusing to be comforted, because they are no more.”</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:18 <b>“A voice is heard in Ramah, weeping and great mourning, Rachel weeping for her children and refusing to be comforted, because they are no more.”</b>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Ramah</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:18 “A voice is heard in <b>Ramah</b>, weeping and great mourning, Rachel weeping for her children and refusing to be comforted, because they are no more.”
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Rachel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:18 “A voice is heard in Ramah, weeping and great mourning, <b>Rachel</b> weeping for her children and refusing to be comforted, because they are no more.”
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>The Return to Nazareth</h4>
      <br/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Herod</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:19 After <b>Herod</b> died, an angel of the Lord appeared in a dream to Joseph in Egypt
            <br/>
            2:22 But when he heard that Archelaus was reiging in Judea in place of his father <b>Herod</b>, he was afraid to go there. 
                 Having been warned in a dream, he withdrew to the district of Galilee,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Joseph</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:19 After Herod died, an angel of the Lord appeared in a dream to <b>Joseph</b> in Egypt
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Egypt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:19 After Herod died, an angel of the Lord appeared in a dream to Joseph in <b>Egypt</b>
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
            2:20 and said, "Get up, take the child and his mother and go to the land of <b>Israel</b>, for those who were trying to take the child's life are dead."
            <br/>
            2:21 So he got up, took the child and his mother and went to the land of <b>Israel</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Archelaus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:22 But when he heard that <b>Archelaus</b> was reiging in Judea in place of his father Herod, he was afraid to go there. 
                 Having been warned in a dream, he withdrew to the district of Galilee,
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
            1:22 But when he heard that Archelauswas reiging in <b>Judea</b> in place of his father Herod, he was afraid to go there. 
                 Having been warned in a dream, he withdrew to the district of Galilee,
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
            2:22 But when he heard that Archelauswas reiging in Judea in place of his father Herod, he was afraid to go there. 
                 Having been warned in a dream, he withdrew to the district of <b>Galilee</b>,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Narareth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            2:23 and he went and lived in a town called <b>Narareth</b>. So was fulfilled what was said through the prophets, that he would be called a Nazarene.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CAC2App; 