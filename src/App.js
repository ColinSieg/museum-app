import './App.css'
import { useState } from 'react'
import RandomItem from './components/RandomItem.jsx'
import RandomImage from './components/RandomImage'
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
        {displayItem ? (
          <RandomItem displayItem={displayItem} />
        ) : (
          'Click below for a new item'
        )}
        <RandomImage />
      </div>
      <div className="buttonContainer">
        <DisplayPrevious />
        <DisplayNext />
      </div>
      <button onClick={toggleItem}>
        {displayItem ? 'Clear' : 'New'} Random Item
      </button>
    </div>
  )
}

export default App
