import * as React from "react"
import { SmallText } from "../../../typography"

const DOMNodeCSSClassesList = ({ DOMNode }) => {
  const [CSSClassList, setCSSClassList] = React.useState([])

  function handleCSSClassesName(DOMNode) {
    const CSSClassList = DOMNode?.classList // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList

    let elementCSSClassList = []
    if (CSSClassList) {
      CSSClassList.forEach(item => {
        elementCSSClassList.push(item)
      })
    }

    setCSSClassList([...elementCSSClassList])
  }

  React.useEffect(() => {
    handleCSSClassesName(DOMNode)
  }, [DOMNode])

  let classList =
    CSSClassList.length === 0 ? (
      <SmallText
        variant="secondary"
        weight="400"
        color="white"
        size="6"
        pb="4px"
      >
        {`CSS Classes not found`}
      </SmallText>
    ) : (
      CSSClassList.map((CSSClass, index) => {
        return (
          <SmallText
            key={index}
            variant="secondary"
            weight="400"
            color="white"
            size="6"
            pb="4px"
          >
            {CSSClass}
          </SmallText>
        )
      })
    )

  return classList
}

export default DOMNodeCSSClassesList
