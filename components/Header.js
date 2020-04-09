import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Header = props => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Sharandeep Singh
                            </Typography>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Experience</Button>
                            <Button color="inherit">Project</Button>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </div>
        </>
    );
}

export default Header;