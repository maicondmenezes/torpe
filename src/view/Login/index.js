import './Login.css'
import React, { Component }                   from 'react';
import { connect }                            from 'react-redux';
import GoogleLogin                            from 'react-google-login';
import { login, changeValue }                 from '../../store/actions/auth.action';
import { Loading, Notify }                    from '../../components/';
import ExitToAppIcon                          from '@material-ui/icons/ExitToApp';
import ContactMailIcon                        from '@material-ui/icons/ContactMail';
import withStyles                             from '@material-ui/core/styles/withStyles';
import { Container, TextField, Button, Link } from '@material-ui/core/';
import { green }                              from '@material-ui/core/colors/';

const ColorButton = withStyles (theme => ({
  root: {
    color: '#fff',
    backgroundColor: green[500],
    '&:hover' : {
      backgroundColor: green[700]
    }
  }
}))(Button)

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
                onChange = { (text) => this.props.changeValue({username: text.target.value})}
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
                onChange     = { (text) => this.props.changeValue({password: text.target.value})}     
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
                  <GoogleLogin
                    clientId = '1046602992163-lcg3jivp3la2ekhcsthdftf18ktjrvs7.apps.googleusercontent.com'
                    onSuccess={this.props.credentials}
                    onFailure={this.props.credentials}
                    cookiePolicy={'single_host_origin'}
                  />                   
                  <br/>
                  <Link href = {'/register'}>
                    I dont have a login
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
  credentials: state.authReducer.credentials,
})

const mapDispatchToProps = {
  login, 
  changeValue
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( Login )