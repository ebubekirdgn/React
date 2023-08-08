import React from 'react'

// function User({data}) {

//   return (
//     <div>
//         User
//         <div>İsim : {data.name}</div>    
//         <div>Soyisim : {data.surname}</div>    
//         <div>Yaş : {data.age}</div>    
//     </div> 
//   )
// }

// Yöntem 2
function User({data :{name,surname,age}}) {

    return (
      <div>
          User
          <div>İsim : {name}</div>    
          <div>Soyisim : {surname}</div>    
          <div>Yaş : {age}</div>    
      </div> 
    )
  }
  
export default User;