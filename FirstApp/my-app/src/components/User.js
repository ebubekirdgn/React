import React from 'react'

function User(props) {
    console.log(props);

  return (
    <div>
        User
        <div>İsim : {props.name}</div>    
        <div>Soyisim : {props.surname}</div>    
        <div>Yaş : {props.age}</div>    
    </div> 
  )
}

export default User;