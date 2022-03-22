import * as React from "react"
import { isDomAvailable, debounce } from "@utils/index"

// THANKS TO https://github.com/Swizec
// MIT License

function getDiagonal(w, h) {
  return Math.round(Math.sqrt(w * w + h * h))
}

function getDimensionObject(node) {
  const rect = node.getBoundingClientRect()

  return {
    width: rect.width,
    height: rect.height,
    diagonal: getDiagonal(rect.width, rect.height),
    top: "x" in rect ? rect.x : rect.top,
    left: "y" in rect ? rect.y : rect.left,
    x: "x" in rect ? rect.x : rect.left,
    y: "y" in rect ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom,
  }
}

function useDimensions({ liveMeasure = true }) {
  const [dimensions, setDimensions] = React.useState({})
  const [node, setNode] = React.useState(null)

  const ref = React.useCallback(node => {
    setNode(node?.parentElement)
  }, [])

  const calculateDimensions = React.useCallback(() => {
    if (isDomAvailable) {
      window.requestAnimationFrame(() =>
        setDimensions(getDimensionObject(node))
      )
    }
  }, [node])

  const calculationStart = React.useCallback(() => {
    debounce(calculateDimensions(), 200)

    if (isDomAvailable) {
      window.addEventListener("resize", calculateDimensions)
      // window.addEventListener("scroll", calculateDimensions)
    }
  }, [calculateDimensions])

  const calculationStop = React.useCallback(() => {
    if (isDomAvailable) {
      window.removeEventListener("resize", calculateDimensions)
      // window.removeEventListener("scroll", calculateDimensions)
    }
  }, [calculateDimensions])

  React.useLayoutEffect(() => {
    if (node) {
      if (liveMeasure) {
        calculationStart()
        return () => {
          calculationStop()
        }
      }
    }
  }, [node, liveMeasure, calculationStart, calculationStop])

  return [ref, dimensions, node]
}

export default useDimensions
