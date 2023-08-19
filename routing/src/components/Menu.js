import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function Menu() {
  const navigate = useNavigate();

  return (
    <div>
        <ul className='menu'>
        <li onClick={() => navigate(-1)}> Back</li>

            <li><Link to="/">Home</Link></li>
            <li><Link to="users">Users</Link></li>
            <li><Link to="contacts">Contacts</Link></li>
            <li onClick={() => navigate('Contacts')}> Contacts</li>
        </ul>
    </div>
  )
}

export default Menu