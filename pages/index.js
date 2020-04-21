import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Chip, Grid } from '@material-ui/core';
import TabBox from '../components/TabBox'
import ProjectCard from '../components/ProjectCard'

const drawerWidth = 240;

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
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
}

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
            <Divider />
            <List>
                {['About', 'Experience', 'Projects'].map((text, index) => (
                    <ListItem button key={text} >
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />

                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Box my={15}>
                    <Typography variant="subtitle1">Hi, my name is</Typography>
                    <Typography variant="h2">Sharandeep Singh</Typography>
                    <Typography variant="body1">I am a Software Engineer from San Jose State University, located in Union City, CA.</Typography>
                </Box>

                <Box my={25}>
                    <div ref={aboutRef}>
                        <Typography variant="h4" >About</Typography>
                    </div>
                    <Typography variant="body1">
                        Hello! I am Sharandeep, a Software Engineer with a versatile set of skills. I like to develop distributed applications
                    that can be scaled to handle large amounts of traffic.<br></br> <br></br> My main focus is in back-end engineering, although I am also
                    experienced in front-end development and DevOps.<br></br><br></br>
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        Languages:
                    <Chip label="Java" variant="outlined" className={classes.chip} />
                        <Chip label="Golang" variant="outlined" className={classes.chip} />
                        <Chip label="Python" variant="outlined" className={classes.chip} />
                        <Chip label="JavaScript" variant="outlined" className={classes.chip} />
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        DevOps:
                    <Chip label="Jenkins" variant="outlined" className={classes.chip} />
                        <Chip label="Kubernetes" variant="outlined" className={classes.chip} />
                    </Typography>


                    <Typography variant="subtitle1" gutterBottom>
                        Front-End:
                    <Chip label="React.Js" variant="outlined" className={classes.chip} />
                        <Chip label="Next.Js" variant="outlined" className={classes.chip} />
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        Back-End:
                    <Chip label="Spring Framework" variant="outlined" className={classes.chip} />
                        <Chip label="Hibernate ORM" variant="outlined" className={classes.chip} />
                        <Chip label="Spring Boot" variant="outlined" className={classes.chip} />
                    </Typography>

                    <Typography variant="subtitle1" gutterBottom>
                        Databases:
                    <Chip label="Kafka" variant="outlined" className={classes.chip} />
                        <Chip label="Orcale SQL" variant="outlined" className={classes.chip} />
                        <Chip label="MongoDB" variant="outlined" className={classes.chip} />
                        <Chip label="Cassandra" variant="outlined" className={classes.chip} />
                        <Chip label="DynamoDB" variant="outlined" className={classes.chip} />
                    </Typography>

                </Box>

                <Box my={25}>
                    <div ref={expRef}>
                        <Typography variant="h4" gutterBottom>
                            Experience
                    </Typography>
                    </div>
                    <TabBox />

                </Box>

                <Box my={25}>
                    <div ref={projRef}>
                        <Typography variant="h4" className={classes.text_5} gutterBottom>
                            Projects
                    </Typography>
                    </div>
                    <Grid container direction="row" spacing={1}>
                        <Grid item>
                            <ProjectCard title="Zule" link="https://github.com/shsingh67/next-hotels">
                                A simple web application that allows hotel search and booking.<br></br><br></br>
                            </ProjectCard>

                        </Grid>

                        <Grid item>
                            <ProjectCard title="Hotels Search Service" link="https://github.com/shsingh67/hotels-search-service">
                                Spring Boot micro-service that exposes a Rest API for searching hotels. The service uses Redis data storage to speed up query resutls.
                        </ProjectCard>

                        </Grid>
                        <Grid item>
                            <ProjectCard title="Deployment Service" link="https://github.com/shsingh67/Services-Automation">
                                A proof of concept to show how deploying docker containers to AWS EC2 can be completely automated.
                        </ProjectCard>

                        </Grid>
                    </Grid>
                </Box>

            </main>
        </div>
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