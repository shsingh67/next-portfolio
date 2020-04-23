import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography, Box, AppBar } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    display: 'flex',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.prototype = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CenteredTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Araali Networks" {...a11yProps(0)} />
          <Tab label="ZapLabs" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
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
        </TabPanel>
      </SwipeableViews>

    </Paper >
  );
}