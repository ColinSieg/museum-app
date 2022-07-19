import './App.css'
import { URL } from './globals'
import RandomItem from './components/RandomItem.jsx'
import DisplayPrevious from './components/DisplayPrevious'
import DisplayNext from './components/DisplayNext'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <RandomItem />
      <DisplayPrevious />
      <DisplayNext />
      <Search />
    </div>
  )
}

export default App
