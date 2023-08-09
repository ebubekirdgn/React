 import React, { useState } from 'react'
 
 function Form() {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [gender,setGender] = useState("0");

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
            <select value={gender} onChange={(event)=> setGender(event.target.value)}>
                <option value="0" >Erkek</option>
                <option value="1" >Kadın</option>
            </select>
        </div>
        <div>
            <strong>
                {gender ==='0' ? "Erkek" : "Kadın"}
            </strong>
        </div>
        
    </div>
   )
 }
 
 export default Form