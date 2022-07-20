import axios from "axios"
import { useState, useEffect } from "react"
import { randomNumber, URL } from "../globals"

const Items = (props) => {
  const [objectIDs, setObjectIDs] = useState(null)

  async function getItems () {
    let rand = randomNumber(1,21)
    while (rand === 2 || rand === 20) {
      rand = randomNumber(1,21)
    }
    const res = await axios.get(`${URL}?departmentIds=${rand}`)
    setObjectIDs(res.data.objectIDs)
    // console.log(res.data.objectIDs)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div>
      {objectIDs ? <p>{URL + '/' + objectIDs[randomNumber(0, objectIDs.length)]}</p> : <p>Loading...</p>}
    </div>
  )
}

export default Items