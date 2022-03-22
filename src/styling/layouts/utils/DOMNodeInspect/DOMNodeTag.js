import * as React from "react"
import { SmallText } from "../../../typography"

const DOMNodeTag = ({ DOMNode, tag }) => {
  const [elementTagName, setElementTagName] = React.useState(null)

  function handleTagName(DOMNode) {
    if (tag) {
      setElementTagName(tag)
      return
    }

    setElementTagName(DOMNode?.nodeName)
  }

  React.useEffect(() => {
    handleTagName(DOMNode)
  }, [DOMNode])

  return (
    <>
      <SmallText
        variant="secondary"
        weight="400"
        color="white"
        size="8"
        pb="4px"
      >
        {elementTagName ? elementTagName.toUpperCase() : "No Tagname detected"}
      </SmallText>
    </>
  )
}

export default DOMNodeTag
