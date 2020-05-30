export const actionTypes =  {
  CHANGE_NOTIFY : 'CHANGE_NOTIFY'
}

export const changeNotify = (payload) => ({
type: actionTypes.CHANGE_NOTIFY,
payload
})
