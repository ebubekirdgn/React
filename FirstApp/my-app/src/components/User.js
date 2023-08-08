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
// function User({data :{name,surname,age}}) {

//     return (
//       <div>
//           User
//           <div>İsim : {name}</div>    
//           <div>Soyisim : {surname}</div>    
//           <div>Yaş : {age}</div>   
//           <hr/>
//           <h3>Arkadaşlar</h3>
//           {
//             friends.map((friend => {
//                 <div><p>{friend}</p></div>
//             }))
//           }
//       </div> 
//     )
//   }

  function User({data ,friends}) {
console.log(friends)
    return (
      <div>
          User
          <div>İsim : {data.name}</div>    
          <div>Soyisim : {data.Usersurname}</div>    
          <div>Yaş : {data.age}</div>   
          <h3>Arkadaşlar</h3>
          {friends.map((friend) => (
                <div>{friend}</div>
            ))
          }
          <hr/>
      </div> 
    )
  }
  
export default User;