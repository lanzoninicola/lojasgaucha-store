import { isNotArray, error } from "./index"

function randomItemFromArray(arr) {
  if (isNotArray(arr)) {
    return error(`randomItemFromArray()`, `The parameter must be an array`)
  }
  const randomIndex = Math.floor(Math.random() * arr.length)

  return arr[randomIndex]
}

export default randomItemFromArray
