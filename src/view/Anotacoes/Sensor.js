import React                         from 'react';
import { withStyles }                from '@material-ui/core/styles';
import { Slider, Typography }   from '@material-ui/core/';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@material-ui/icons/SentimentVeryDissatisfiedTwoTone';
import { blue, green, red } from '@material-ui/core/colors';
const styles = {
  sensorDeSentimento : {
    display : 'flex',
    flex : '1',    
    flexDirection : 'column',
    alignItems: 'center',
    width : '100%',
  },
  tituloDoSensor : {    
    textAlign : 'center',
    width : '100%',
  },
  regua : {
    display : 'flex',
    flex : '1',    
    flexDirection : 'row',
    alignItems: 'center',
    width : '100%',
  },
  iconeEsquerda : {    
    flex : '1',    
    width : '10%'
  },
  sensor : {
    width   : '80%',     
  },
  iconeDireita : {
    flex : '1',
    width : '10%'
  },
   
}

export class Sensor extends React.Component {
  render(){   
    const { classes } = this.props;
    return(
      <div className = {classes.sensorDeSentimento} >
        <div className = {classes.tituloDoSensor} >
          <Typography component = 'h2' variant = 'h6' >
            {this.props.titulo}          
          </Typography>
        </div>
        <div className = {classes.regua} >
          <div className = {classes.iconeEsquerda} > 
            <SentimentVeryDissatisfiedTwoToneIcon 
               style={{ color: red[900] }}
            />
          </div>
          <div className = {classes.sensor} >
            <Slider 
              id = {this.props.idDoSensor}
              defaultValue={0}            
              aria-labelledby='discrete-slider'
              valueLabelDisplay='auto'
              step={1}
              style={{ color: blue[900] }}
              marks
              min={-4}
              max={4}
            />
          </div>
          <div className = {classes.iconeDireita} >
            <SentimentVerySatisfiedTwoToneIcon
              style={{ color: green[900] }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Sensor)