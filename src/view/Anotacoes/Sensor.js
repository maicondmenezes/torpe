import React      from 'react';
import {makeStyles}  from '@material-ui/core/styles/';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {SentimentVerySatisfiedIcon,
        SentimentVeryDissatisfiedIcon 
        } from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export class Sensor extends React.Component {
  render(){
    const classes = useStyles();
    
    return(
      <div className={classes.root}>
      <Typography id='sensor-slider' gutterBottom>
        {this.props.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <SentimentVerySatisfiedIcon />
        </Grid>
        <Grid item xs>
          <Slider 
             defaultValue={30}            
             aria-labelledby='discrete-slider'
             valueLabelDisplay='auto'
             step={1}
             marks
             min={-4}
             max={4}
          />
        </Grid>
        <Grid item>
          <SentimentVeryDissatisfiedIcon />
        </Grid>
      </Grid>      
    </div>
    )
  }
}
export default (Sensor)