export const URL =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects'

export function randomNumber(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min).toString()
}
