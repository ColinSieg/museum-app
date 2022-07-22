import axios from "axios"
import { useState, useEffect } from "react"
import { randomNumber, URL } from "../globals"

const RandomImage = (props) => {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [medium, setMedium] = useState('')
  const [date, setDate] = useState('')
  const [locale, setLocale] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (props.objectIDs) {
      async function getImage () {
        let index = randomNumber(0, props.objectIDs.length)
        let ID = props.objectIDs[index]
        const resImg = await axios.get(`${URL}/${ID}`)
        setTitle(resImg.data.title)
        setArtist(resImg.data.artistDisplayName)
        setMedium(resImg.data.medium)
        setDate(resImg.data.objectDate)
        setLocale(resImg.data.locale)
        setLink(resImg.data.objectURL)
        setImage(resImg.data.primaryImageSmall)
      }
      getImage()
    }
  }, [props.objectIDs])

  return <div>
    <h2>Title: {title === '' ? 'No information available.' : title}</h2>
    <ul>
      <li>Artist: {artist === '' ? 'No information available.' : artist}</li>
      <li>{medium === '' ? 'No information available.' : medium}</li>
      <li>{date === '' ? 'No information available.' : date}</li>
      <li>{locale === '' ? 'No information available.' : locale}</li>
      <li>{link === '' ? 'No information available.' : link}</li>
    </ul>
    <img src={image} alt='No image available'/></div>
}

export default RandomImage