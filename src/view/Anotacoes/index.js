import React, {Component}     from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Container, Link, TextField, Typography }   from '@material-ui/core/';

const styles = {
  telaDeAnotacoes : {
    flex       : '1',
    margin     : '10px',
    padding    : '15px 0px',
    alignItems : 'center',  
  },  
}

export class Anotacoes extends Component {

  render(){   
    const { classes } = this.props;
    return(      
      <div className ={classes.telaDeAnotacoes}>
        <Typography
          className = 'mt-3 font-weight-normal'
          component = 'h1'
          variant = 'h6'
        >
          Anotações
        </Typography>
        <div className = {classes.dadosParaAnalise}>
          <div className = {classes.termoAtual}>
            <TextField             
              id       = 'filled-read-only-input'
              name     = 'termo'
              type     = 'text'
              label    = 'Termo'
              margin   = 'normal'
              value    = 'palavra'
              fullWidth
            />
          </div>
          <div className = {classes.termoTraduzido}>Termo Traduzido Pelo Google</div>
        </div>        
        <div className = {classes.termoAtual}></div>
      </div>    
    );
  }  
}

export default withStyles(styles)(Anotacoes)