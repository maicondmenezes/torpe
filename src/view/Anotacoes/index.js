import React, {Component}     from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton, Button, Link, TextField, Typography }   from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SendIcon from '@material-ui/icons/Send';
import Sensor from './Sensor';

const styles = {
  areaDeAnotacoes : {    
    flex       : '1',
    alignItems : 'center',  
    width   : '100%',
  },  
  dadosParaAnalise : {
    display: 'flex',     
  },
  termoAtual : {
    flex       : '1',    
    margin     : '5px',
  },
  termoTraduzido : {
    flex       : '1',
    margin     : '5px',
  },
  dadosAnotados : {
    display : 'flex',
  },  
  menuDeAcoes : {
    display : 'flex',
    margin     : '10px',
    flexDirections : 'row',
  },  
}

export class Anotacoes extends Component {
  render(){   
    const { classes } = this.props;
    return(            
      <div className ={classes.areaDeAnotacoes}>
        <div className = {classes.dadosParaAnalise}>
          <div className = {classes.termoAtual}>
              <TextField             
                id         = 'termo'
                name       = 'termo'
                type       = 'text'
                label      = 'Termo'
                margin     = 'normal'
                value      = 'palavra'
                variant    = 'filled'
                InputProps = {{
                  readOnly: true,
                }}
                fullWidth
              />
            </div>
            <div className = {classes.termoTraduzido}>
              <TextField             
                  id         = 'traducaoSugerida'
                  name       = 'traducaoSugerida'
                  type       = 'text'
                  label      = 'Tradução Sugerida'
                  margin     = 'normal'
                  value      = 'Tradução do Google Translate'
                  variant    = 'filled'
                  InputProps = {{
                    readOnly: true,
                  }}
                  fullWidth
              />
            </div>
        </div>
        <div className = {classes.dadosAnotados}>
          <TextField             
            id         = 'traducaoAnotada'
            name       = 'traducaoAnotada'
            type       = 'text'
            label      = 'Tradução'
            margin     = 'normal'
            value      = 'Digite aqui a tradução que melhor expressar o significado do termo acima'
            variant    = 'filled'
            InputProps = {{
              readOnly: true,
            }}
            fullWidth
          />

          <Sensor
            title = 'Satisfação'
          />

          <Sensor
            title = 'Excitação'
          />

          <Sensor
            title = 'Controle'
          />

        </div>
        <div className = {classes.menuDeAcoes}>
          <IconButton aria-label= 'Termo Anterior'>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label= 'Próximo Termo' > 
            <SkipNextIcon />
          </IconButton>
          <IconButton aria-label= 'Salvar'>
            <SaveIcon />          
          </IconButton> 
          <IconButton aria-label= 'Enviar'>
            <SendIcon />
          </IconButton>
        </div>
      </div>    
    );
  }  
}

export default withStyles(styles)(Anotacoes)