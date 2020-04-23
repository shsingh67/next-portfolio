import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Chip, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    chip: {
        margin: theme.spacing(0.2),
    },
 
   
}));

export default function SkillsPanel() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Languages</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <Hidden xsDown>
                        <Chip label="Java" variant="outlined" className={classes.chip} />
                        <Chip label="Golang" variant="outlined" className={classes.chip} />
                        <Chip label="Python" variant="outlined" className={classes.chip} />
                        <Chip label="JavaScript" variant="outlined" className={classes.chip} />
                    </Hidden>

                    <Hidden smUp>
                    <Chip size="small" label="Java" variant="outlined" className={classes.chip} />
                    <Chip size="small" label="Golang" variant="outlined" className={classes.chip} />
                    <Chip size="small" label="Python" variant="outlined" className={classes.chip} />
                    <Chip size="small" label="JavaScript" variant="outlined" className={classes.chip} />
                    </Hidden>
                    

                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>DevOps</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Chip label="Jenkins" variant="outlined" className={classes.chip} />
                    <Chip label="Kubernetes" variant="outlined" className={classes.chip} />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Front-End</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Chip label="React.Js" variant="outlined" className={classes.chip} />
                    <Chip label="Next.Js" variant="outlined" className={classes.chip} />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Back-End</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Chip label="Spring Framework" variant="outlined" className={classes.chip} />
                    <Chip label="Hibernate ORM" variant="outlined" className={classes.chip} />
                    <Chip label="Spring Boot" variant="outlined" className={classes.chip} />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Databases</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Chip label="Kafka" variant="outlined" className={classes.chip} />
                    <Chip label="Orcale SQL" variant="outlined" className={classes.chip} />
                    <Chip label="MongoDB" variant="outlined" className={classes.chip} />
                    <Chip label="Cassandra" variant="outlined" className={classes.chip} />
                    <Chip label="DynamoDB" variant="outlined" className={classes.chip} />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}