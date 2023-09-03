import React from 'react'

import { ExampleComponent,Button } from 'doganuif'
import 'doganuif/dist/index.css'

const App = () => {
  return (
    <>
      <Button text="Click" onClick= {()=> alert('asdas')}></Button>
      <ExampleComponent text="Merhaba Kro 😄" />
    </>
 
  )
}

export default App
