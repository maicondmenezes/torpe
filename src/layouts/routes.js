import React, { Suspense, lazy, Component }                  from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CircularProgressBar }                        from '../components/';

const Login              = lazy( () => import('../view/Login'));
const Anotacoes              = lazy( () => import('../view/Anotacoes'));
const ResgistroDoUsuario           = lazy( () => import('../view/ResgistroDoUsuario'));
const GameScreen         = lazy( () => import('../view/GameScreen'));
const PresentationScreen = lazy( () => import('../view/PresentationScreen'));

const token = localStorage.getItem('access_token');

const PrivateRoute = ({Components, ...rest}) => (
  <Route {...rest} render = { props => (
    token ? (<Component {...props} />) : (<Redirect to={{pathname: '/Login', state: { from: props.location } }} />)
  )}/>
)

const Routes = () => (
  <Router>
    <Suspense fallback = {<div className = 'mt-5 pt-5'> <CircularProgressBar /> </div>} >
      <Switch>
        <Route exact = {true} path = '/'                   component = {Login}              />
        <Route                path = '/Login'              component = {Login}              />
        <Route                path = '/ResgistroDoUsuario' component = {ResgistroDoUsuario} />
        <PrivateRoute         path = '/Anotacoes'          component = {Anotacoes}          /> 
      </Switch>      
    </Suspense>
  </Router>
);

export default Routes;