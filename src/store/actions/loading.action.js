export const actionTypes =  {
    CHANGE_LOADING : 'CHANGE_LOADING'
}

export const changeLoading = (payload) => ({
  type: actionTypes.CHANGE_LOADING,
  payload
})
