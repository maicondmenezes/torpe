import React, {Component}     from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton, Button, Link, TextField, Typography }   from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SendIcon from '@material-ui/icons/Send';
import Slider from '@material-ui/core/Slider';

const styles = {
  areaDeAnotacoes : {  
    display: 'flex'  ,
    alignItems: 'center',
    flexDirection: 'column',
    flex       : '1',    
    width   : '100%',
  },  
  dadosParaAnalise : {
    flex: '1',
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'row',
    width   : '100%',    
  },
  termoAtual : {
    flex       : '1',    
    margin     : '5px',
    width   : '100%',  
  },
  termoTraduzido : {
    flex       : '1',
    margin     : '5px',
  },
  dadosDaTraducao : {
    flex: '1',
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'row',
    width   : '100%',
  },
  dadosAnotados : {
    flex: '1',
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'column',
    width   : '100%', 
    margin : '5px',
  }, 
  traducaoAnotada : {
    flex       : '1',    
    margin     : '5px',
    width   : '100%',
  }, 
  sentimentos : {
    display : 'flex',
    flex : '1',
    margin     : '10px',
    flexDirection : 'column',
  },
  satisfacao : {
    display : 'flex',
    flex : '1',
    margin     : '10px',
    flexDirections : 'row',
  },
  excitacao : {
    display : 'flex',
    flex : '1',
    margin     : '10px',
    flexDirections : 'row',
  },
  controle : {
    display : 'flex',
    flex : '1',
    margin     : '10px',
    flexDirections : 'row',
  },
  casoDeUso : {
    flex       : '1',    
    margin     : '5px',
    width   : '50%',    
  },
  menuDeAcoes : {
    display : 'flex',
    margin     : '10px',
    flexDirection : 'row',
  },
  rotuloSatifacao : {
    flex : '1',
    width : '100%'
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
        <div className = {classes.dadosDaTraducao}>
          <div className = {classes.dadosAnotados}>
            <div className  = {classes.traducaoAnotada} >
              <TextField             
                id         = 'traducaoAnotada'            
                name       = 'traducaoAnotada'
                type       = 'text'
                label      = 'Tradução'
                margin     = 'normal'
                value      = 'Digite aqui a tradução que melhor expressar o significado do termo acima'
                variant    = 'filled'  
                fullWidth          
              />
            </div>
            <div className = {classes.sentimentos}>
            <Typography
                className = {classes.rotuloSatifacao}
                component = 'h1'
                variant = 'h6'
              >Satisfação
                </Typography>
              <div className = {classes.satisfacao} >
              
                <Slider 
                  id = 'sensorDeSatifacao'
                  defaultValue={0}            
                  aria-labelledby='discrete-slider'
                  valueLabelDisplay='auto'
                  step={1}
                  marks
                  min={-4}
                  max={4}
                />
              </div>
              <div className = {classes.excitacao} >
                <Slider 
                  id = 'sensorDeExcitacao'
                  defaultValue={0}            
                  aria-labelledby='discrete-slider'
                  valueLabelDisplay='auto'
                  step={1}
                  marks
                  min={-4}
                  max={4}
                />
              </div>
              <div className = {classes.controle} >
                <Slider 
                  id = 'sensorDeControle'
                  defaultValue={2}            
                  aria-labelledby='discrete-slider'
                  valueLabelDisplay='auto'
                  step={1}
                  marks
                  min={-4}
                  max={4}
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className = {classes.casoDeUso} >
            <TextField             
              id         = 'casoDeUso'
              name       = 'casoDeUso'
              type       = 'text'
              label      = 'Caso de Uso'
              margin     = 'normal'
              value      = 'Nesta tela vai o caso de uso para analise; que será um texto longo com algumas linhas'
              variant    = 'filled'
              rows = '10'
              rowsMax = '10'
              InputProps = {{
                readOnly: true,
              }}
              fullWidth                          
              multiline
            />
          </div>
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