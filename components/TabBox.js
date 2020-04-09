import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Chip } from '@material-ui/core';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  icon: {
    display: 'flex',
    flexGrow: 1,
    //marginLeft: theme.spacing(1)
  }
}));

export default function TabBox() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Araali Networks" {...a11yProps(0)} />
        <Tab label="Zaplabs" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.icon}>
          <ArrowRightIcon />
          Worked independently and took ownership of projects from design to implementation in Go and Python.
        </div>
        <div className={classes.icon}>
          <ArrowRightIcon />
          Contributed mainly to back-end code, resolving issues, creating new features and tools.
        </div>
        <div className={classes.icon}>
          <ArrowRightIcon />
          Took part in DevOps by helping setup Jenkins instance on AWS EC2, automating Jenkins instance through groovy scripts, and setting up remote jobs.
        </div>
        <Typography variant="subtitle1" gutterBottom>
          <br></br>Technologies:
          <Chip label="Golang" variant="outlined" />
          <Chip label="Python" variant="outlined" />
          <Chip label="GRPC" variant="outlined" />
          <Chip label="Protocol Buffers" variant="outlined" />
          <Chip label="Amazon Web Services" variant="outlined" />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.icon}>
          <ArrowRightIcon />
          Part of the back-end team at Zaplabs, under the Agile software development Life Cycle.
        </div>
        <div className={classes.icon}>
          <ArrowRightIcon />
          Contributed in many areas such as developing micro-services, resolving bugs, creating new features, and code refactoring.
        </div>
        <Typography variant="subtitle1" gutterBottom>
          <br></br>Technologies:
          <Chip label="Spring Framework" variant="outlined" />
          <Chip label="Hibernate ORM" variant="outlined" />
          <Chip label="Spring Boot" variant="outlined" />
          <Chip label="Orcale SQL" variant="outlined" />
          <Chip label="RESTful API" variant="outlined" />
        </Typography>
      </TabPanel>
    </div>
  );
}