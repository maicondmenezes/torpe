import React, {Component}     from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { IconButton, TextField }   from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import SkipNextTwoToneIcon from '@material-ui/icons/SkipNextTwoTone';
import SkipPreviousTwoToneIcon from '@material-ui/icons/SkipPreviousTwoTone';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import Sensor from './Sensor';
import { blue } from '@material-ui/core/colors';

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
    display: 'flex', 
    alignItems: 'center',
    flexDirection: 'row',
    width   : '100%' 
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
    width   : '100%',
  }, 
  sentimentos : {
    display : 'flex',
    flex : '1',
    margin     : '10px',
    flexDirection : 'column',
  },
  casoDeUso : {
    flex       : '1',    
    margin     : '5px',
    width   : '50%',
    alignSelf : 'start',
  },
  menuDeAcoes : {
    display : 'flex',
    margin     : '10px',
    flexDirection : 'row',
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
              <IconButton 
                variant = 'contained'
                aria-label= 'Pesquisar'  
                size = 'large'               
                color = 'primary'                
                style={{ margin : '5px', flex : '1' }}                
                fullWidth
              >
                <SearchIcon style={{ color: blue[900] }}/>
              </IconButton>
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
            <Sensor
                titulo = 'Satisfação'
                idDoSensor = 'sensorDeSatisfacao'
            />            
            <Sensor
                titulo = 'Excitação'
                idDoSensor = 'sensorDeExcitacao'
            />            
            <Sensor
                titulo = 'Controle'
                idDoSensor = 'sensorDeControle'
            />            
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
              rows = '11'
              rowsMax = '11'
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
            <SkipPreviousTwoToneIcon />
          </IconButton>
          <IconButton aria-label= 'Próximo Termo' > 
            <SkipNextTwoToneIcon />
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