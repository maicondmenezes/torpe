import { combineReducers } from 'redux';
import loadingReducer from './loading.reducer'
import notifyReducer from './notify.reducer'
import registroDoUsuarioReducer from './registroDoUsuario.reducer'

const rootReducer = combineReducers ({
  loadingReducer,
  notifyReducer,
  registroDoUsuarioReducer,
});

export default rootReducer;