import { useState } from 'react'
import Header from './components/Header'
import Panel from './components/Panel'

function App() {
  const [logged, setLogged] = useState(false)

  return (
    <>
      <Header logged={logged}/>
      <Panel/>
    </>
  )
}

export default App
