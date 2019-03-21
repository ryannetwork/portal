import React, { Component, Fragment } from "react";
import {
  withStyles,
  CssBaseline,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";

const styles = theme => ({
  text: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  paper: {
    paddingBottom: 30,
    marginBottom:20
  },
  list: {
    marginBottom: theme.spacing.unit * 2,
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

const messages = [
  {
    id: 1,
    primary: 'Front End Developer - Remote',
    secondary: "Transforming complex layout PSDs into pixel-perfect presentation-layer HTML5/CSS3 templates",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Equity Dealer',
    secondary: `- Fast execution of orders manually on NOW/NEST/NEAT `,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Job Opportunity for Director',
    secondary: 'Provide direction to ensure policies and procedures to be adhered and financial information is secure and stored in compliance with current legislation.',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Windows Administrator L3 ',
    secondary: 'Proficiency in configuring and administering zero RPO and low RTO for enterprise mission critical applications using EMC DMX3, VMAX with SRDF-S, SRDF-A',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Job Opening for Freshers",
    secondary: 'We expect good communication and basic computer knowledge to perform the troubleshooting. Recommended qualification: BCA, BSC (CS), BE (CS). ',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Urgent Requirement for Civil Engineer',
    secondary: `Offering technical and feasibility investigations`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Jobs
        </Typography>
        <List className={classes.list}>
          {messages.map(({ id, primary, secondary, person }) => (
            <Fragment key={id}>
              {id === 1 && <ListSubheader className={classes.subHeader}>Today</ListSubheader>}
              {id === 3 && <ListSubheader className={classes.subHeader}>Yesterday</ListSubheader>}
              <ListItem button>
                {/* <Avatar alt="Profile Picture" src={person} /> */}
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
    )
  }
}
export default withStyles(styles)(Dashboard);
