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

function CAC4App() {
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
      <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus is Tested in the Wilderness</h4>
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
            4:1 Then <b>Jesus</b> was led by the Spirit into the wilderness to be tempted by the devil.
            <br/>
            4:4 <b>Jesus</b> answered, "It is written: 'Man shall not live on bread alone, but on every word that comes 
                from the mouth of God.'"
            <br/>
            4:7 <b>Jesus</b> answered him, "It is also written: 'Do not put the Lord your God to the test.'"
            <br/>
            4:10 <b>Jesus</b> said to him, "Away from me, Satan! For it is written: 'Worship the Lord your God, and serve him only.'" 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>'Man shall not live on bread alone, but on every word that comes form the mouth of God'</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:4 Jesus answered, "It is written: <b>'Man shall not live on bread alone, but on every word that comes 
                from the mouth of God.'</b>"
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>'He will command his angels concerning you, and they will lift you up in their hands, so that you will not strike your foot against a stone.'</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:6 "If you are the Son of God," he said, "throw yourself down. For it is written: <b>'He will command his angels concerning you,
                 and they will lift you up in their hands, so that you will not strike your foot against a stone.'</b>"
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>'Do not put the Lord your God to the test.'</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:7 Jesus answered him, "It is also written: <b>'Do not put the Lord your God to the test.'</b>"
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>"Away from me, Satan!"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:10 Jesus said to him, "<b>Away from me, Satan!</b> For it is written: 'Worship the Lord your God, and serve him only.'"
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>'Worship the Lord your God, and serve him only.'</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:10 Jesus said to him, "Away from me, Satan! For it is written: <b>'Worship the Lord your God, and serve him only.'</b>"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Begins to Preach</h4>
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
            4:12 When <b>Jesus</b> heard that John had been put in prison, he withdrew to Galilee.
            <br/>
            4:17 From that time on <b>Jesus</b> began to preach, "Repent, for the kingdom of heaven has come near."
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
            4:12 When Jesus heard that <b>John</b> had been put in prison, he withdrew to Galilee.
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
            4:12 When Jesus heard that John had been put in prison, he withdrew to <b>Galilee</b>.
            <br/>
            4:15 “Land of Zebulun and land of Naphtali, the Way of the Sea, beyond the Jordan, <b>Galilee</b> of the Gentiles—
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Nazareth</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:13 Leaving <b>Nazareth</b>, he went and lived in Capernaum, which was by the lake in the area of Zebulun and Naphtali--
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
            4:13 Leaving Nazareth, he went and lived in <b>Capernaum</b>, which was by the lake in the area of Zebulun and Naphtali--
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Zebulun</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:13 Leaving Nazareth, he went and lived in Capernaum, which was by the lake in the area of <b>Zebulun</b> and Naphtali--
            <br/>
            4:15 “Land of <b>Zebulun</b> and land of Naphtali, the Way of the Sea, beyond the Jordan, Galilee of the Gentiles—
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Naphtali</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:13 Leaving Nazareth, he went and lived in Capernaum, which was by the lake in the area of Zebulun and <b>Naphtali</b>--
            <br/>
            4:15 “Land of Zebulun and land of <b>Naphtali</b>, the Way of the Sea, beyond the Jordan, Galilee of the Gentiles—
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
            4:14 to fulfill what was said through the prophet <b>Isaiah</b>:
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
            4:15 “Land of Zebulun and land of Naphtali, the Way of the Sea, beyond the <b>Jordan</b>, Galilee of the Gentiles—
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>“Land of Zebulun and land of Naphtali, the Way of the Sea, beyond the Jordan, Galilee of the Gentiles—the people living in darkness have seen a great light; on those living in the land of the shadow of death a light has dawned.”</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:15 <b>“Land of Zebulun and land of Naphtali, the Way of the Sea, beyond the Jordan, Galilee of the Gentiles—</b>
            <br/>
            4:16 <b>the people living in darkness have seen a great light; on those living in the land of the shadow of death a light has dawned.”</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Calls His First Disciples</h4>
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
            4:18 As <b>Jesus</b> was walking beside the Sea of Galilee, he saw two brothers, Simon called Peter and his brother Andrew. They
                 were casting a net into the lake, for they were fishermen.
            <br/>
            4:19 "Come, follow me," <b>Jesus</b> said, "and I will send you out to fish for people."
            <br/>
            4:21 Going on from there, he saw two other brothers, James son of Zebedee and his brother John. They were in boat with their
                 father Zebedee, preparing their nets. <b>Jesus</b> called them,
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
            4:18 As Jesus was walking beside the <b>Sea of Galilee</b>, he saw two brothers, Simon called Peter and his brother Andrew. They
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
          <Typography className={classes.heading}>Simon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, <b>Simon</b> called Peter and his brother Andrew. They
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
          <Typography className={classes.heading}>Peter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:18 As Jesus was walking beside the Sea of Galilee, he saw two brothers, Simon called <b>Peter</b> and his brother Andrew. They
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
          <Typography className={classes.heading}>James</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:21 Going on from there, he saw two other brothers, <b>James</b> son of Zebedee and his brother John. They were in boat with their
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
      <br/>
      <br/>
      <h4 className='text-warning' style={{ textAlign: 'center' }}>Jesus Heals the Sick</h4>
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
            4:23 <b>Jesus</b> went throughout Galilee, teaching in their synagogues, proclaiming the good news of the kingdom, and
                 healing every disease and sickness among the people. 
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
            4:23 Jesus went throughout <b>Galilee</b>, teaching in their synagogues, proclaiming the good news of the kingdom, and
                 healing every disease and sickness among the people.
            <br/>
            4:25 Large crowds from <b>Galilee</b>, the Decapolis, Jerusalem, Judea and the region across the Jordan followed him.  
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Syria</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:24 News about him spread all over <b>Syria</b>, and people brought to him all who were ill with various diseases, those
                 suffering severe pain, the demon-possessed, those having seizures, and the paralyzed; and he healed them. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Decapolis</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            4:25 Large crowds from Galilee, the <b>Decapolis</b>, Jerusalem, Judea and the region across the Jordan followed him. 
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
            4:25 Large crowds from Galilee, the Decapolis, <b>Jerusalem</b>, Judea and the region across the Jordan followed him. 
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
            4:25 Large crowds from Galilee, the Decapolis, Jerusalem, <b>Judea</b> and the region across the Jordan followed him. 
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
            4:25 Large crowds from Galilee, the Decapolis, Jerusalem, Judea and the region across the <b>Jordan</b> followed him. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CAC4App;  