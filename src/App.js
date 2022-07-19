import './App.css'
import { URL } from './globals'
import { useState } from 'react'
import RandomItem from './components/RandomItem.jsx'
import DisplayPrevious from './components/DisplayPrevious'
import DisplayNext from './components/DisplayNext'

function App() {
  const [displayItem, setDisplayItem] = useState(false)

  const toggleItem = () => {
    setDisplayItem(!displayItem)
  }

  return (
    <div className="App">
      <div className="itemContainer">
        {displayItem ? <RandomItem displayItem={displayItem} /> : 'Look'}
      </div>
      <div className="buttonContainer">
        <DisplayPrevious />
        <DisplayNext />
      </div>
      <button onClick={toggleItem}>Click here to browse!</button>
    </div>
  )
}

export default App
