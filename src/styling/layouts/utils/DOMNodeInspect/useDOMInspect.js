import * as React from "react"
import { removeChar, right, round } from "../../../utils/index"

function parsedResult(value) {
  if (value === undefined || value === "") {
    return value
  }

  if (right(value, 2) === "px") {
    value = removeChar(value, {
      charsN: 2,
      direction: "right",
    })

    return round(value)
  }

  return value
}

const useDOMInspect = () => {
  const [elementStyles, setElementStyles] = React.useState({})

  function handleElementStyles(DOMNodes = [], properties = []) {
    const isArray = Array.isArray(DOMNodes)
    if (!isArray) {
      console.error(
        "useDOMInspect() - The first parameter of function must be an array."
      )
      return []
    }
    if (DOMNodes.length > 2) {
      console.error(
        "useDOMInspect() - The first parameter of function accepts an array with maximum two values. The first one is the DOMElement and second one is its parent DOMElement"
      )

      return []
    }

    if (DOMNodes && typeof document !== undefined) {
      let propertiesStyles = {}

      const propertiesToInspect = ["height", "width", ...properties]

      DOMNodes.map((node, nodeIndex) => {
        propertiesToInspect.forEach(property => {
          let propertyStyleValues = [0, 0] // index[0]=DOMNode -- index[1]=DOMParentNode
          if (!propertiesStyles.hasOwnProperty([property])) {
            propertiesStyles = {
              ...propertiesStyles,
              [property]: propertyStyleValues,
            }
          }
          const propertyStyleValue = handleStyleProperty(property, node)
          propertiesStyles[property][nodeIndex] = propertyStyleValue
        })
      })

      setElementStyles({
        ...elementStyles,
        ...propertiesStyles,
      })
    }
  }

  function handleStyleProperty(property, DOMNode) {
    const propertyValue = getComputedStyle(DOMNode, null).getPropertyValue(
      property
    )

    return parsedResult(propertyValue)
  }

  return [elementStyles, handleElementStyles]
}

export default useDOMInspect
