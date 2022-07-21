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
      <div className="buttonContainer">
        <button onClick={toggleItem}>
          {displayItem ? 'Clear' : 'New'} Random Item
        </button>
      </div>
      <div className="itemContainer">
        {displayItem ? (
          <RandomItem displayItem={displayItem} />
        ) : (
          'Click above for a new item'
        )}
        <RandomImage />
      </div>
      <div className="inputContainer">
        <IncrementButton />
      </div>
    </div>
  )
}

export default App
