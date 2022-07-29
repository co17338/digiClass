export const LOGIN =(user)=>{
  return{
      type: "LOGIN_USER",
      payload: user
  }

}

export const LOGOUT =()=>{
  return{
      type: "LOGOUT_USER",
      payload: " "
  }
}

export const SIGNUP =(user)=>{
  return{
      type: "SIGNUP_USER",
      payload: user
  }
}