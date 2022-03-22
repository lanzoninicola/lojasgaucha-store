import * as React from "react"

// https://stackoverflow.com/faqs/60824250/hide-and-show-modal-on-mouseenter-and-mouseleave-using-react-hooks
const useHover = hoverEffects => {
  const ref = React.useRef()
  const _ref = React.useRef()
  const [hoveredStatus, setHoveredStatus] = React.useState("idle")
  const [hoverStyle, setHoverStyle] = React.useState({})
  const enter = () => setHoveredStatus("entered")
  const leave = () => setHoveredStatus("leaved")
  const handleHoverEffect = () => {
    let newHoverEffects = {}

    Object.keys(hoverEffects).forEach(effect => {
      newHoverEffects = {
        ...newHoverEffects,
        [effect]: hoverEffects[effect],
      }
    })

    setHoverStyle(newHoverEffects)
  }

  const removeHoverEffect = () => {
    setHoverStyle({})
  }

  React.useEffect(() => {
    if (ref.current) {
      _ref.current = ref.current // cache external ref value for cleanup use
      ref.current.addEventListener("mouseenter", enter)
      ref.current.addEventListener("mouseleave", leave)
    }

    if (typeof hoverEffects === "object" && hoveredStatus === "entered") {
      handleHoverEffect()
    }

    return () => {
      if (_ref.current) {
        _ref.current.removeEventListener("mouseenter", enter)
        _ref.current.removeEventListener("mouseleave", leave)
      }

      removeHoverEffect()
    }
  }, [hoveredStatus, hoverEffects])

  return [ref, hoverStyle]
}

export default useHover
