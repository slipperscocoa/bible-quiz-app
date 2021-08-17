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

function CAC1App() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ padding: '15px', paddingTop: '90px', textAlign: 'left' }}>
      <h1 className='text-warning' style={{ textAlign: 'center' }}>Chapter Analysis</h1>
      <p className="text-white" style={{ fontSize: '16px', textAlign: 'center' }}>Proper names and places, as well as questions, exclamations, parenthetical statements, and Old Testament Scripture passages
         make up the Chapter Analysis content. This section is a study tool for those questions. Drop down each tab to read the verses
         containing this content. For a more detailed explanation, check out our help page!
      </p>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>The Genealogy of Jesus</h4>
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
            1:1 This is the genealogy of <b>Jesus</b> the Messiah the son of David, the son of Abraham:
            <br/>
            1:16 and Jacob the father of Joseph, the husband of Mary, and Mary was the mother of <b>Jesus</b> who is called the Messiah.
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
            1:1 This is the genealogy of Jesus the Messiah the son of <b>David</b>, the son of Abraham:
            <br/>
            1:6 and Jesse the father of King <b>David</b>. <b>David</b> was the father of Solomon, whose mother had been Uriah's wife,
            <br/>
            1:17 Thus there were fourteen generations in all from Abraham to <b>David</b>, fourteen from <b>David</b> to the exile in Babylon, and fourteen from the exile to the Messiah.
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
            1:1 This is the genealogy of Jesus the Messiah the son of David, the son of <b>Abraham</b>:
            <br/>
            1:2 <b>Abraham</b> was the father of Isaac, Isaac the father of Jacob, Jacob the father of Judah and his brothers,
            <br/>
            1:17 Thus there were fourteen generations in all from <b>Abraham</b> to David, fourteen from <b>David</b> to the exile in Babylon, and fourteen from the exile to the Messiah.
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
            1:2 Abraham was the father of <b>Isaac</b>, <b>Isaac</b> the father of Jacob, Jacob the father of Judah and his brothers,
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
            1:2 Abraham was the father of Isaac, Isaac the father of <b>Jacob</b>, <b>Jacob</b> the father of Judah and his brothers,
            <br/>
            1:16 and <b>Jacob</b> the father of Joseph, the husband of Mary, and Mary was the mother of Jesus who is called the Messiah.
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
            1:2 Abraham was the father of Isaac, Isaac the father of Jacob, Jacob the father of <b>Judah</b> and his brothers,
            <br/>
            1:3 <b>Judah</b> the father of Perez and Zerah, whose mother was Tamar, Perez the father of Hezron, Hezron the father of Ram,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Perez</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:3 Judah the father of <b>Perez</b> and Zerah, whose mother was Tamar, <b>Perez</b> the father of Hezron, Hezron the father of Ram,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zerah</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:3 Judah the father of Perez and <b>Zerah</b>, whose mother was Tamar, Perez the father of Hezron, Hezron the father of Ram,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Tamar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:3 Judah the father of Perez and Zerah, whose mother was <b>Tamar</b>, Perez the father of Hezron, Hezron the father of Ram,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Hezron</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:3 Judah the father of Perez and Zerah, whose mother was Tamar, Perez the father of <b>Hezron</b>, <b>Hezron</b> the father of Ram,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Ram</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:3 Judah the father of Perez and Zerah, whose mother was Tamar, Perez the father of Hezron, Hezron the father of <b>Ram</b>,
            <br/>
            1:4 <b>Ram</b> the father of Amminadab, Amminadab the father of Nahshon, Nahshon the father of Salmon,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Amminadab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:4 Ram the father of <b>Amminadab</b>, <b>Amminadab</b> the father of Nahshon, Nahshon the father of Salmon,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Nahshon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:4 Ram the father of Amminadab, Amminadab the father of <b>Nahshon</b>, <b>Nahshon</b> the father of Salmon,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Salmon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:4 Ram the father of Amminadab, Amminadab the father of Nahshon, Nahshon the father of <b>Salmon</b>,
            <br/>
            1:5 <b>Salmon</b> the father of Boaz, whose mother was Rahab, Boaz the father of Obed, whose mother was Ruth, Obed the father of Jesse,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Boaz</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:5 Salmon the father of <b>Boaz</b>, whose mother was Rahab, <b>Boaz</b> the father of Obed, whose mother was Ruth, Obed the father of Jesse,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Rahab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:5 Salmon the father of Boaz, whose mother was <b>Rahab</b>, Boaz the father of Obed, whose mother was Ruth, Obed the father of Jesse,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Obed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:5 Salmon the father of Boaz, whose mother was Rahab, Boaz the father of <b>Obed</b>, whose mother was Ruth, <b>Obed</b> the father of Jesse,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Ruth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:5 Salmon the father of Boaz, whose mother was Rahab, Boaz the father of Obed, whose mother was <b>Ruth</b>, Obed the father of Jesse,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Jesse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:5 Salmon the father of Boaz, whose mother was Rahab, Boaz the father of Obed, whose mother was Ruth, Obed the father of <b>Jesse</b>,
            <br/>
            1:6 and <b>Jesse</b> the father of King David. David was the father of Solomon, whose mother had been Uriah's wife,
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
            1:6 and Jesse the father of King David. David was the father of <b>Solomon</b>, whose mother had been Uriah's wife,
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Uriah</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:6 and Jesse the father of King David. David was the father of Solomon, whose mother had been <b>Uriah</b>'s wife,
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
            1:16 and Jacob the father of <b>Joseph</b>, the husband of Mary, and Mary was the mother of Jesus who is called the Messiah.
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
            1:16 and Jacob the father of Joseph, the husband of <b>Mary</b>, and <b>Mary</b> was the mother of Jesus who is called the Messiah.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Babylon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:17 Thus there were fourteen generations in all from Abraham to David, fourteen from David to the exile in <b>Babylon</b>, and fourteen from the exile to the Messiah.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>Joseph Accepts Jesus as His Son</h4>
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
            1:18 This is how the birth of <b>Jesus</b> the Messiah came about: His mother Mary was pledged to be married to
                 Joseph, but before they came together, she was found to be pregnant through the Holy Spirit.
            <br/>
            1:21 She will give birth to a son, and you are to give him the name <b>Jesus</b>, because he will save his people from their sins.
            <br/>
            1:25 But he did not consummate their marriage until she gave birth to a son. And he gave him the name <b>Jesus</b>.
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
            1:18 This is how the birth of Jesus the Messiah came about: His mother <b>Mary</b> was pledged to be married to
                 Joseph, but before they came together, she was found to be pregnant through the Holy Spirit.
            <br/>
            1:20 But after he had considered this, an angel of the Lord appeared to him in a dream and said, "Joseph son of David, do
                 not be afraid to take <b>Mary</b> home as your wife, because what is conceived in her is from the Holy Spirit."
            <br/>
            1:24 When Joseph woke up, he did what the angel of the Lord had commanded him and took <b>Mary</b> home as his wife.
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
            1:18 This is how the birth of Jesus the Messiah came about: His mother Mary was pledged to be married to
                 <b>Joseph</b>, but before they came together, she was found to be pregnant through the Holy Spirit.
            <br/>
            1:19 Because <b>Joseph</b> her husband was faithful to the law, and yet did not want to expose her to public disgrace, he had in mind to divorce her quietly.
            <br/>
            1:20 But after he had considered this, an angel of the Lord appeared to him in a dream and said, "<b>Joseph</b> son of David, do
                 not be afraid to take Mary home as your wife, because what is conceived in her is from the Holy Spirit."
            <br/>
            1:24 When <b>Joseph</b> woke up, he did what the angel of the Lord had commanded him and took Mary home as his wife.
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
            1:20 But after he had considered this, an angel of the Lord appeared to him in a dream and said, "Joseph son of <b>David</b>, do
                 not be afraid to take Mary home as your wife, because what is conceived in her is from the Holy Spirit."
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"the virgin will conceive and give birth to a son, and they will call him Immanuel"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:23 <b>"The virgin will conceive and give birth to a son, and they will call him Immanuel"</b> (which means "God with us").
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>(which means "God with us")</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1:23 "The virgin will conceive and give birth to a son, and they will call him Immanuel" <b>(which means "God with us")</b>.
          </Typography>
        </AccordionDetails>
      </Accordion>    
    </div>
  );
}

export default CAC1App; 