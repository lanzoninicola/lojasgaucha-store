import { isObject, isNotArray, error } from "./index"

function removePropsFromObject(object = {}, props = []) {
  if (!isObject(object)) {
    return error(`removePropsFromObject()`, `First parameter must be an object`)
  }

  if (isNotArray(props)) {
    return error(`removePropsFromObject()`, `Second parameter must be an array`)
  }

  const nextObject = { ...object }

  props.forEach(prop => {
    delete nextObject[prop]
  })

  return nextObject
}

export default removePropsFromObject
