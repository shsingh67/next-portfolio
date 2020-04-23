import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid, IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '250px'
  },
  cardDetails: {
    flex: 1,
  },
  position: {
    alignItems: "flex-start",

  }
});

const ProjectCard = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.root}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.children}
            </Typography>
          </CardContent>
        </div>
        <CardActions className={classes.position}>
          <IconButton href={props.link} target="_blank">
            <GitHubIcon />

          </IconButton>


        </CardActions>

      </Card>
    </Grid>
  );
}

export default ProjectCard;