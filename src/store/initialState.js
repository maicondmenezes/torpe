export default {  
  registroDoUsuario : {
    data : {
      picture  : '',
      name     : '',      
      email    : '',
      login    : '',
      password : '',
      
    },    
    error : {},
    success : false
  },
  loading : {
    open : false,
    msg  : 'putting grannies to work out' 
  },
  notify : {
    open       : false,
    vertical   : 'top',
    horizontal : 'center',
    time       : 3000,
    msg        : '',
    severity   : 'info'
  } 
}