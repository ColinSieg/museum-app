import axios from 'axios'
import { useState, useEffect } from 'react'
import { URL } from '../globals'

const IncrementButton = (props) => {
  const [objID, setObjectID] = useState(1)
  const [newURL, setNewURL] = useState('')
  const [artist, setArtist] = useState('')
  const [medium, setMedium] = useState('')
  const [date, setDate] = useState('')
  const [locale, setLocale] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')

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
    setArtist(newURL.data.artistDisplayName)
    setMedium(newURL.data.medium)
    setDate(newURL.data.objectDate)
    setLocale(newURL.data.locale)
    setLink(newURL.data.objectURL)
    setImage(newURL.data.primaryImageSmall)
  }

  // async function getArtist() {
  //   let tempurl = await axios.get(`${URL}/${objID}`)
  //   setArtist(tempurl.data.artistDisplayName)
  // }

  // async function getMedium() {
  //   let tempurl = await axios.get(`${URL}/${objID}`)
  //   setMedium(tempurl.data.medium)
  // }

  // async function getDate() {
  //   let tempurl = await axios.get(`${URL}/${objID}`)
  //   setDate(tempurl.data.objectDate)
  // }

  // async function getLocale() {
  //   let tempurl = await axios.get(`${URL}/${objID}`)
  //   setLocale(tempurl.data.locale)
  // }

  // async function getLink() {
  //   let tempurl = await axios.get(`${URL}/${objID}`)
  //   setLink(tempurl.data.linkResource)
  // }

  // async function getImage() {
  //   let tempurl = await axios.get(`${URL}/${objID}`)
  //   setImage(tempurl.data.primaryImageSmall)
  // }

  useEffect(() => {
    getUrl()
  }, [objID])

  // useEffect(() => {
  //   getArtist()
  // })

  // useEffect(() => {
  //   getMedium()
  // })

  // useEffect(() => {
  //   getDate()
  // })

  // useEffect(() => {
  //   getLocale()
  // })

  // useEffect(() => {
  //   getLink()
  // })

  // useEffect(() => {
  //   getImage()
  // })

  return (
  <div>
    <button onClick={incDown}>Previous Item</button>
    <button onClick={incUp}>Next Item</button>
    <ul>
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
