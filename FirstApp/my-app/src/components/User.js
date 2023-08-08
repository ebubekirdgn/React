import React from 'react'
import PropTypes from 'prop-types';
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

//   function User({data ,friends}) {
// console.log(friends)
//     return (
//       <div>
//           User
//           <div>İsim : {data.name}</div>    
//           <div>Soyisim : {data.Usersurname}</div>    
//           <div>Yaş : {data.age}</div>   
//           <h3>Arkadaşlar</h3>
//           {
//           friends.map((friend,i) => (
//             <div  key={i}>{friend}</div>
//           ))
//           }
//           <hr/>
//       </div> 
//     )
//   }
function User({name ,age,city}) {
        return (
          <div>
              User
              <div>İsim : {name}</div>    
              <div>Yaş : {age}</div>    
              <div>Şehir : {city}</div>   
          </div> 
        )
      }

      User.propTypes = {
        name :PropTypes.string.isRequired,
        age :PropTypes.number
      }
export default User;