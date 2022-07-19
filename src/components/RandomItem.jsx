import axios from "axios"
import { useState, useEffect } from "react"
import { randomNumber, URL } from "../globals"

const Items = (props) => {
  const [objectIDs, setObjectIDs] = useState('')

  async function getItems () {
    const res = await axios.get(URL)
    setObjectIDs(res.data.objectIDs)
    // console.log(objectIDs)
  }
  useEffect(() => {
    getItems()
  }, [])

  return <a href={URL + '/' + objectIDs[randomNumber(0, objectIDs.length)]}><button>Click here!</button></a>
}

export default Items