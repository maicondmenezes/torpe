import './Login.css'
import React, { Component }                   from 'react';
import { connect }                            from 'react-redux';
import { Loading, Notify }                    from '../../components/';
import ExitToAppIcon                          from '@material-ui/icons/ExitToApp';
import { Container, TextField, Button, Link } from '@material-ui/core/';

export class Login extends Component {

  login = () => {
    const { credentials } = this.props;
    this.props.login(credentials).then( () => {

    })
  }
  
  render() {
    return (
      <div>
        <Loading />
        <Notify />
        <Container 
          component = 'main'
          maxWidth = 'xs'
        >      
          <div className = 'mt-3 mt-md-5'>            
            <div className = 'mt-4'>
              <TextField             
                id       = 'email'
                name     = 'username'
                type     = 'email'
                label    = 'Login'
                margin   = 'normal'
                value    = {this.props.credentials.username}                
                required
                fullWidth
              />

              <TextField 
                id           = 'standard-password-input'
                name         = 'password'
                type         = 'password'
                label        = 'Password'
                margin       = 'normal'    
                autoComplete = 'current-password'
                value        = {this.props.credentials.password}                       
                required
                fullWidth
                
              />

              <Button
                type      = 'button'
                variant   = 'contained'
                color     = 'primary'        
                size      = 'large'
                className = 'LogInButton'
                startIcon = {<ExitToAppIcon />}
                onClick   = { () => this.login()}
                fullWidth                
              >
                Sign IN
              </Button>

              <div  className = 'SignInArea' >
                <Link href = 'mailto: mdmoliveira@inf.ufpe.edu.br'>
                  Esqueci minha senha
                </Link> 
                <br/>
                <Link href = {'/register'}>
                  Não sou cadastrado
                </Link> 
              </div>
            </div>
          </div>
          
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  credentials: '',
})

const mapDispatchToProps = { 
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( Login )