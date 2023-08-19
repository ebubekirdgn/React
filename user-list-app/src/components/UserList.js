import React,{useEffect, useState} from 'react'
import axios from 'axios';




function UserList() {

const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(true);

useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res)=> setUsers(res.data))
    .finally(()=> setLoading(false))
},[]);
    
  return (
    <div>
        <h2>Users</h2>
        {loading && <div> Yükleniyor </div>}
        <ul className='userList'>

        {
             users.map((user)=> (
              <li key={user.key}>{user.name}</li>
             ))

        }
        </ul>
        
        

    </div>
  )
}

export default UserList