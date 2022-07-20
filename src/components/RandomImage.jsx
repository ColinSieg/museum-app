import axios from "axios"
import { useState, useEffect } from "react"
import { randomNumber, URL } from "../globals"
import { objectIDs } from './RandomItem'

const RandomImage = (props) => {
  const [image, setImage] = useState('')

  async function getImage () {

  }

  useEffect(() => {
    getImage()
  }, [])

  return
}
export default RandomImage