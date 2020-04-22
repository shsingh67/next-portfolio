import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
   display: 'flex'
  },
  position: {
    alignItems: "flex-end"

  }
});

const ProjectCard = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.children}
          </Typography>
        </CardContent>

        <CardActions className={classes.position}>
          <GitHubIcon />
          <Button size="small" color="primary" href={props.link} target="_blank">
            GitHub
        </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectCard;