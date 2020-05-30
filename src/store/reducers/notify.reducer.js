import { actionTypes } from '../actions/notify.action';
import initialState    from '../initialState';

const notifyReducer =  (state = initialState.notify, { type, payload }) => {
  switch (type) {

  case actionTypes.CHANGE_NOTIFY :
    return { ...state, ...payload }

  default:
    return state
  }
}

export default notifyReducer;
