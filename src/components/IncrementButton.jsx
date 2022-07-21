import axios from 'axios'
import { useState, useEffect } from 'react'
import { URL } from '../globals'

const IncrementButton = (props) => {
  const [objID, setObjectID] = useState(1)
  const [newURL, setNewURL] = useState('')

  if(objID <= 0) {
    setObjectID(1)
  }

  function incUp() {
    setObjectID(objID + 1)
  }

  function incDown() {
    setObjectID(objID - 1)
  }

  async function getUrl() {
    setNewURL(await axios.get(`${URL}/${objID}`))
  }

  useEffect(() => {
    getUrl()
  }, [objID])

  console.log(objID)
  console.log(newURL)

  return (
  <div>
    <button onClick={incUp}>Next Item</button>
    <button onClick={incDown}>Previous Item</button>
    <div>
    </div>
  </div>
)}

export default IncrementButton
