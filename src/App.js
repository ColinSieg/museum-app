import './App.css'
import { useState } from 'react'
import RandomItem from './components/RandomItem.jsx'
import RandomImage from './components/RandomImage.jsx'
import IncrementButton from './components/IncrementButton.jsx'

function App() {
  const [displayItem, setDisplayItem] = useState(false)

  const toggleItem = () => {
    setDisplayItem(!displayItem)
  }

  return (
    <div className="App">
      <div className="flex-child">
        <div className="itemContainer">
          {displayItem ? (
            <RandomItem displayItem={displayItem} />
          ) : (
            <h2>Click below to view a random item from the Met!</h2>
          )}
          <RandomImage />
        </div>
        <div className="buttonContainer">
          <button onClick={toggleItem}>
            {displayItem ? 'Clear' : 'New'} Random Item
          </button>
        </div>
      </div>
      <div className="flex-child">
        <h2>Or start from the beginning of the collection!</h2>
        <div className="infoPanel">
          <IncrementButton />
        </div>
      </div>
    </div>
  )
}

export default App
