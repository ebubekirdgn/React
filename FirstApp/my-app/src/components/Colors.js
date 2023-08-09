import React,{ useState }  from 'react'

function Colors() {
    const [colors,setColors] = useState(["red","green","blue"]);
    const handleClick = () => {
      setColors([...colors,"Gri"])
    }
  return (

    
    <div>
      <h2>Renkler</h2>
      {colors.map((color,i)=> (
        <div key={i}> {color}</div>

      ))}
      <button onClick={handleClick}> Renk Değiştir</button>
    </div>
  )
}

export default Colors