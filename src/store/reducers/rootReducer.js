import { combineReducers } from 'redux';
import loadingReducer      from './loading.reducer'
import notifyReducer       from './notify.reducer'
import resgistroDoUsuarioReducer     from './resgistroDoUsuario.reducer'

const rootReducer = combineReducers ({
  loadingReducer,
  notifyReducer,
  resgistroDoUsuarioReducer
});

export default rootReducer;