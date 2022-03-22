import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import DOMNodeTag from "./DOMNodeTag"
import DOMNodeCSSClassesList from "./DOMNodeCSSClassesList"
import DOMNodeInspectContent from "./DOMNodeInspectContent"
import useDOMInspect from "./useDOMInspect"

import { colorTheme } from "@colors/lib"
import { useViewportInfo } from "@hooks/index"

const StyledDOMNodeInspect = styled(motion.div)`
  max-width: 400px;
  z-index: 1;
  margin: 0;
  padding: 4px 4px 0px 4px;
  position: absolute;
  cursor: pointer;

  background: ${({ tag }) => {
    if (tag === "flex") return `rgba(165, 42, 42, 0.9)`
    if (tag === "grid") return `rgba(42, 187, 155, 0.9)`

    return colorTheme("blue", { opacity: "0.9" })
  }};
  border-radius: 5px;
`

const StyledDOMNodeOverflow = styled(motion.div)``

const DOMNodeInspect = ({ selfRef, props, tag, properties = [] }) => {
  const [DOMElement, setDOMElement] = React.useState([])
  const [DOMParentElement, setDOMParentElement] = React.useState(null)

  const DOMNodeInspectRef = React.useRef(null)
  //  const [elementStyles, setElementStyles] = useDOMInspect()

  const [propertiesInspected, setPropertiesInspected] = React.useState([])

  const [showDetails, setShowDetails] = React.useState(false)

  React.useEffect(() => {
    if (typeof document !== undefined) {
      const selfElement = selfRef?.current // HTMLElement object
      setDOMElement(selfElement)
      const parentElement = selfRef?.current?.parentElement
      setDOMParentElement(parentElement)

      setPropertiesInspected([...propertiesInspected, ...properties])

      /*
      TODO: detect the boundy box of DOMNodeInspect 
      and if it results outside of viewport adding a message on the bottom of the
      screeen warning the client that some elements are outside of viewport

      You can do it calculating the bounding box through "offsetTop", "offsetLeft" properties
      This properties must be detected in different way respect the detection of other CSS
      properties

      This is necessary because when you add DOMNodeInspect for a div hidden by overflow it
      modify the position of element inside the website, so it is not reliable
      
      const DOMNodeInspectElement = DOMNodeInspectRef?.current
      setElementStyles([DOMNodeInspectElement], ["offsetTop", "offsetLeft"]) 
      */
    }
  }, [])

  function toggleShowDetails() {
    setShowDetails(!showDetails)
  }

  return (
    <StyledDOMNodeInspect
      ref={DOMNodeInspectRef}
      drag
      // dragConstraints={{ left: 25, top: 25, right: 25, bottom: 25 }}
      id="DOMNodeInspect"
      whileHover={{
        scale: 1.8,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 1.8,
        zIndex: 10,
        transition: { duration: 0.2 },
      }}
      onClick={toggleShowDetails}
      tag={tag}
      {...props}
    >
      <DOMNodeTag tag={tag} DOMNode={DOMElement} />
      {showDetails && (
        <>
          <DOMNodeCSSClassesList DOMNode={DOMElement} />
          <DOMNodeInspectContent
            DOMNodes={[DOMElement, DOMParentElement]}
            properties={propertiesInspected}
          />
        </>
      )}
    </StyledDOMNodeInspect>
  )
}

export default DOMNodeInspect
