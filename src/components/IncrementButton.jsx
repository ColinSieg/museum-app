import axios from 'axios'
import { useState } from 'react'
import { URL } from '../globals'

const IncrementButton = (props) => {
  const [objID, setObjectID] = useState(1)

  if(objID <= 0) {
    setObjectID(1)
  }

  function incUp() {
    setObjectID(objID + 1)
  }

  function incDown() {
    setObjectID(objID - 1)
  }

  console.log(objID)

  async function getUrl() {
    const newURL = await axios.get(`${URL}/${objID}`)
    console.log(newURL.data.artistAlphaSort)
  }

  getUrl()

  return (
  <div>
    <button onClick={incUp}>Next Item</button>
    <button onClick={incDown}>Previous Item</button>
    <div>
    </div>
  </div>
)}

export default IncrementButton
