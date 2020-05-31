import { changeLoading } from './loading.action';
import { changeNotify }  from './notify.action';
import { Http }          from '../../settings/globalSettings';

export const actionTypes = {
  CHANGE : 'CHANGE',
  SUCCESS : 'SUCCESS',
  ERROR : 'ERROR'
}

export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})

export const registerError = (payload) => ({
  type: actionTypes.ERROR,
  payload
})

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload
})

export const registerUser = (data) => {
  return dispatch => {
    dispatch(changeLoading({
      open: true,
      msg : 'Creating Login User...'
    }))
    return Http.post('/register', data)
    .then( res => {
      dispatch(changeLoading({
        open: false,        
      }))
      if ( typeof res !== 'undefined' ) {        
        if ( res.data.error ) {
          dispatch( registerError(res.data.error) )
        }
        if (res.data.success) {
          console.log(res);
          dispatch( changeNotify({            
            open       : true,
            msg        : 'User successfully registered! You can go figth Now!!!',
            severity   : 'success'
          }))          
          dispatch(success(true))
        }
      }
    })
    .catch( () => {
      dispatch(changeLoading({
        open: false,        
      }))
    })
  }
}

