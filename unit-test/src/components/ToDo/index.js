import { useState } from 'react'

const defaultItems = [
    {
        name: 'Item A'
    },
    {
        name: 'Item B'
    },
    {
        name: 'Item C'
    }
]

function ToDo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {

        setItems((prev) => [...prev, { name: text }])
        setText("");
    }

    return (
        <div>
            <label>
                Text 
                <input value={text} onChange={(e) => setText(e.target.value)}></input>
            </label>
            <button onClick={addItem}> Add </button>
            <br />
            {
                items.map((item, key) => (
                    <div key={key}>{item.name}</div>
                ))
            }
        </div>
    )
}
export default ToDo 