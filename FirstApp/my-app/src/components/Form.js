 import React, { useState } from 'react'
 
 function Form() {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");

   return (
     <div>
        <div>
            <div>İsim</div>
            <input placeholder='İsim' value={name} onChange={(event)=> setName(event.target.value)}></input>
            <input placeholder='Soyisim' value={surname} onChange={(event)=> setSurname(event.target.value)}></input>
        </div>
        <div>
            <strong>
                {name}{surname}
            </strong>
        </div>
        <div>
            <select>
                <option>Erkek</option>
                <option>Kadın</option>
            </select>
        </div>
        
    </div>
   )
 }
 
 export default Form