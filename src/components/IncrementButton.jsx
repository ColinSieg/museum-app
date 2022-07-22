import axios from 'axios'
import { useState, useEffect } from 'react'
import { URL } from '../globals'

const IncrementButton = (props) => {
  const [objID, setObjectID] = useState(0)
  const [newURL, setNewURL] = useState('')
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [medium, setMedium] = useState('')
  const [date, setDate] = useState('')
  const [locale, setLocale] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')

  if(objID < 0) {
    setObjectID(0)
  }

  async function incUp() {
    setObjectID(objID + 1)
    console.log(objID + 1)
    console.log(`${URL}/${objID+1}`)
  }

  async function incDown() {
    setObjectID(objID - 1)
    console.log(objID - 1)
    console.log(`${URL}/${objID-1}`)
  }

  async function getUrl() {
    const tempURL = await axios.get(`${URL}/${objID+1}`)
    setNewURL(tempURL)
    setTitle(tempURL.data.title)
    setArtist(tempURL.data.artistDisplayName)
    setMedium(tempURL.data.medium)
    setDate(tempURL.data.objectDate)
    setLocale(tempURL.data.locale)
    setLink(tempURL.data.objectURL)
    setImage(tempURL.data.primaryImageSmall)
  }

  useEffect(() => {
    getUrl()
  }, [objID])

  return (
  <div>
    <button onClick={incDown}>Previous Item</button>
    <button onClick={incUp}>Next Item</button>
    <ul>
      <li>Title: {title === '' ? 'No information available.' : title}</li>
      <li>Artist: {artist}</li>
      <li>Medium: {medium}</li>
      <li>Date created: {date}</li>
      <li>Locale: {locale}</li>
      <li>Link: <a href={link}>Met museum page</a></li>
    </ul>
    <img src={image} />
  </div>
)}

export default IncrementButton
