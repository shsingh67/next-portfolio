import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Chip, Grid, useScrollTrigger, Slide, Container } from '@material-ui/core';
import TabBox from '../components/TabBox'
import ProjectCard from '../components/ProjectCard'
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import CreateIcon from '@material-ui/icons/Create';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SkillsPanel from '../components/SkillsPanel'
import Footer from '../components/Footer'


const drawerWidth = 240;
const drawerRightWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerRight: {
        [theme.breakpoints.up('sm')]: {
            width: drawerRightWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    drawerRightPaper: {
        width: drawerRightWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    leftPanel: {
        position: "absolute",
        bottom: "100px",
    },
    leftPanelMobile: {
        position: "absolute",
        bottom: "50px",
    },
    rightPanel: {
        position: "absolute",
        bottom: "10px",
    },
    dividerV: {
        height: "100px"
    },
    dividerH: {
        width: "auto"
    },
    nested: {
        paddingLeft: theme.spacing(12),
    },
}));

const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
}

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function Index(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const aboutRef = useRef(null);
    const expRef = useRef(null);
    const projRef = useRef(null);

    const handleAbout = () => {
        scrollToRef(aboutRef)
    }

    const handleExp = () => {
        scrollToRef(expRef)
    }

    const handleProj = () => {
        scrollToRef(projRef)
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                <ListItem button onClick={handleAbout}>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>

                <ListItem button onClick={handleExp}>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Experience" />
                </ListItem>

                <ListItem button onClick={handleProj}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />

                </ListItem>
            </List>
            <Hidden xsDown>
                <Grid container alignItems="center" justify="center" className={classes.leftPanel}>

                    <IconButton href="https://github.com/shsingh67" target="_blank">
                        <GitHubIcon />
                    </IconButton>

                    <Divider orientation="vertical" flexItem />
                    <IconButton href="https://www.linkedin.com/in/sharandeep-singh-4160b2159/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
            </Hidden>

            <Hidden smUp implementation="css">
                <Grid container alignItems="center" justify="center" className={classes.leftPanelMobile}>

                    <IconButton href="https://github.com/shsingh67" target="_blank">
                        <GitHubIcon />
                    </IconButton>

                    <Divider orientation="vertical" flexItem />
                    <IconButton href="https://www.linkedin.com/in/sharandeep-singh-4160b2159/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
            </Hidden>


        </div>
    );

    const drawerRight = (
        <div>
            <div className={classes.toolbar}>


                <Grid container spacing={2} direction="column" alignItems="center" justify="space-between" className={classes.rightPanel}>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">S</Typography>
                        <Typography variant="body2" color="textSecondary">H</Typography>
                        <Typography variant="body2" color="textSecondary">A</Typography>
                        <Typography variant="body2" color="textSecondary">R</Typography>
                        <Typography variant="body2" color="textSecondary">A</Typography>
                        <Typography variant="body2" color="textSecondary">N</Typography>
                        <Typography variant="body2" color="textSecondary">D</Typography>
                        <Typography variant="body2" color="textSecondary">E</Typography>
                        <Typography variant="body2" color="textSecondary">E</Typography>
                        <Typography variant="body2" color="textSecondary">P</Typography>
                    </Grid>

                    <Grid item >
                        <Typography variant="body2" color="textSecondary">S</Typography>
                        <Typography variant="body2" color="textSecondary">I</Typography>
                        <Typography variant="body2" color="textSecondary">N</Typography>
                        <Typography variant="body2" color="textSecondary">G</Typography>
                        <Typography variant="body2" color="textSecondary">H</Typography>
                    </Grid>

                    <Grid item>
                        <Divider orientation="vertical" className={classes.dividerV} />
                    </Grid>
                </Grid>

            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Sharandeep Singh
                    </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <nav className={classes.drawer} aria-label="options">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <Grid item xs={12} md={8} className={classes.content} >
                <div className={classes.toolbar} />
                <Box my={15}>
                    <Grid container direction="row" alignItems="center" justify="center">
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" align="center">Hi, my name is</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" align="center">Sharandeep Singh</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" align="center">I am a software engineer located in Union City, CA.</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box my={25}>
                    <div ref={aboutRef}>
                        <Grid container spacing={2} direction="row" alignItems="center" justify="center">
                            <Grid item>
                                <Typography variant="h4" >
                                    About
                                </Typography>
                            </Grid>

                            <Grid item xs={9}>
                                <Divider orientation="horizontal" className={classes.dividerH} />

                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="body1">
                                        Hello! I am Sharandeep, a Software Engineer with a versatile set of skills. I like to develop distributed applications
                                        that can be scaled to handle large amounts of traffic.<br></br> <br></br> My main focus is in back-end engineering, although I am also
                                        experienced in front-end development and DevOps.<br></br><br></br>
                                </Typography>
                            </Grid>

                            <Grid item xs={9}>
                                <SkillsPanel />
                            </Grid>
                        </Grid>
                    </div>
                </Box>

                <Box my={25}>
                    <div ref={expRef}>
                        <Grid container spacing={2} direction="row" alignItems="center" justify="center">
                            <Grid item>
                                <Typography variant="h4" >
                                    Experience
                                </Typography>
                            </Grid>

                            <Grid item xs={9}>
                                <Divider orientation="horizontal" className={classes.dividerH} />
                            </Grid>

                            <Grid item xs={11}>
                                <TabBox />
                            </Grid>
                        </Grid>

                    </div>


                </Box>

                <Box my={25}>
                    <div ref={projRef}>
                        <Grid container spacing={2} direction="row" alignItems="center" justify="center">
                            <Grid item>
                                <Typography variant="h4" >
                                    Projects
                                    </Typography>
                            </Grid>

                            <Grid item xs={9}>
                                <Divider orientation="horizontal" className={classes.dividerH} />
                            </Grid>
                        </Grid>

                    </div>
                    <Grid container direction="row" spacing={1}>

                        <ProjectCard title="Zule" link="https://github.com/shsingh67/next-hotels">
                            A simple web application that allows hotel search and booking.
                        </ProjectCard>

                        <ProjectCard title="Hotels Search Service" link="https://github.com/shsingh67/hotels-search-service">
                            Spring Boot micro-service that exposes a Rest API for searching hotels. The service uses Redis data storage to speed up query resutls.
                        </ProjectCard>

                        <ProjectCard title="Deployment Service" link="https://github.com/shsingh67/Services-Automation">
                            A proof of concept to show how deploying docker containers to AWS EC2 can be completely automated.
                        </ProjectCard>

                        <ProjectCard title="Portfolio Website" link="https://github.com/shsingh67/next-portfolio">
                            Portfolio website source code.
                        </ProjectCard>


                    </Grid>
                </Box>

                <Footer />

            </Grid>

            <Hidden xsDown implementation="css">
                <nav className={classes.drawerRight}>
                    <Drawer
                        container={container}
                        variant='permanent'
                        anchor='right'
                        classes={{
                            paper: classes.drawerRightPaper,
                        }}
                    >
                        {drawerRight}
                    </Drawer>
                </nav>
            </Hidden>
        </div >

    );
}

Index.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};

export default Index;