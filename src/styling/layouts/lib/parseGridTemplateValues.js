import { stringToArray, arrayToString, right } from "@utils/index"

const parseGridTemplateValues = (values = "") => {
  const parsedRowsProp = stringToArray(values, " ")
  let parsedRowsPropArray = parsedRowsProp.map(value => {
    if (right(value, 2) === "fr") {
      if (value === "1fr") {
        return "minmax(0, 1fr)"
      }
      return value
    }
    return ""
  })

  return arrayToString(parsedRowsPropArray, " ")
}

export default parseGridTemplateValues
