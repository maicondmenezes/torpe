import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeValue, registerUser } from '../../store/actions/registroDoUsuario.action';
import { _baseUrl } from '../../settings/globalSettings';
import { Button, Container, Link, TextField, Typography } from '@material-ui/core/';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Loading, Notify, Avatar } from '../../components/';

export class RegistroDoUsuario extends Component {  
  register = () => {
    this.props.registerUser(this.props.data)
        .then( () => {
          if (this.props.success) {
            window.location.replace(_baseUrl + 'Anotacoes')
          }
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
            <div className = 'text-center'>             
              <Typography
                className = 'mt-3 font-weight-normal'
                component = 'h1'
                variant = 'h6'
              >
                Cadastro de Anotadores
              </Typography>
            </div>

            <div className = 'mt-4'>      
              <div className = 'text-center'>
                <Avatar
                  size = 'large' 
                  alt = 'Photo'
                  picture = {this.props.data.picture}
                />
              </div>
              <TextField             
                id       = 'name'
                name     = 'name'
                type     = 'text'
                label    = 'Name'
                margin   = 'normal'
                value    = {this.props.data.name}
                onChange = { (text) => {
                  this.props.changeValue({name: text.target.value})
                  if (this.props.error.name) {
                    delete this.props.error.name;
                  }
                }}
                required
                fullWidth
              />
              {(this.props.error.name) &&
                <strong className = 'text-danger'>
                  {this.props.error.name[0]}
                </strong>
              }

              <TextField             
                id       = 'email'
                name     = 'email'
                type     = 'email'
                label    = 'Email'
                margin   = 'normal'
                value    = {this.props.data.email}
                onChange = { (text) => {
                  this.props.changeValue({email: text.target.value})
                  if (this.props.error.email) {
                    delete this.props.error.email;
                  }
                }}
                required
                fullWidth
              />
              {(this.props.error.email) &&
                <strong className = 'text-danger'>
                  {this.props.error.email[0]}
                </strong>
              }

              <TextField             
                id       = 'login'
                name     = 'login'
                type     = 'text'
                label    = 'Login'
                margin   = 'normal'
                value    = {this.props.data.login}
                onChange = { (text) => {
                  this.props.changeValue({login: text.target.value})
                  if (this.props.error.login) {
                    delete this.props.error.login;
                  }
                }}
                required
                fullWidth
              />
              {(this.props.error.login) &&
                <strong className = 'text-danger'>
                  {this.props.error.login[0]}
                </strong>
              }

              <TextField 
                id           = 'standard-password-input'
                name         = 'password'
                type         = 'password'
                label        = 'Password'
                margin       = 'normal'    
                autoComplete = 'current-password'
                value        = {this.props.data.password}  
                onChange = { (text) => {
                  this.props.changeValue({password: text.target.value})
                  if (this.props.error.password) {
                    delete this.props.error.password;
                  }
                }}
                required
                fullWidth
              />
              {(this.props.error.password) &&
                <strong className = 'text-danger'>
                  {this.props.error.password[0]}
                </strong>
              }

              <Button
                type      = 'button'
                variant   = 'contained'
                color     = 'primary'        
                size      = 'large'
                className = 'mb-3 mb-md-4 mt-4'
                startIcon = {<ExitToAppIcon />}
                onClick   = { () => this.register()}
                fullWidth                
              >
                Sign UP
              </Button>
            </div>
          </div>
        </Container>
                
        <div className = 'text-center'>
          <Link 
            to      = {'/login'}
            className = 'mt-4'
            variant   = 'body2'
            color     = 'secondary'
          >
            Log IN    
          </Link>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data    : state.registerReducer.data,
  success : state.registerReducer.success,
  error   : state.registerReducer.error
})

const mapDispatchToProps = {
  changeValue,
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps) (RegistroDoUsuario)
 