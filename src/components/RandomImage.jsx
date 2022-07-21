import axios from "axios"
import { useState, useEffect } from "react"
import { randomNumber, URL } from "../globals"

const RandomImage = (props) => {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (props.objectIDs) {
      async function getImage () {
        let index = randomNumber(0, props.objectIDs.length)
        let ID = props.objectIDs[index]
        const resImg = await axios.get(`${URL}/${ID}`)
        setImage(resImg.data.primaryImageSmall)
        setTitle(resImg.data.title)
      }
      getImage()
    }
  }, [props.objectIDs])

  return <div><h2>{title}</h2><img src={image} alt=''/></div>
}

export default RandomImage