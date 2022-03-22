import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SmallText } from "../../../typography"
import useDOMInspect from "./useDOMInspect"

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: 0;
`

const StyledListItem = styled.li`
  width: 180px;
  display: grid;
  justify-items: stretch;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  margin-bottom: 2px;
  padding: 0;
`

const DOMNodeInspectContent = ({ DOMNodes = [], properties = [] }) => {
  const [elementStyles, setElementStyles] = useDOMInspect()

  React.useEffect(() => {
    setElementStyles(DOMNodes, properties)
  }, [])

  const stylesList = Object.keys(elementStyles).map((property, index) => {
    console.log("DOMNodeInspectContent - property", property, elementStyles)
    let mainInfo = {}

    let otherInfo = {}

    if (property === "height" || property === "width") {
      mainInfo = { ...mainInfo, [property]: elementStyles[property] }
    } else {
      otherInfo = { ...otherInfo, [property]: elementStyles[property] }
    }

    const mainInfoRendered = Object.keys(mainInfo).map((item, index) => {
      return (
        <StyledListItem key={index}>
          <SmallText variant="secondary" weight="400" color="white" size="8">
            {`${item}`}
          </SmallText>

          {mainInfo[item].map((itemValue, index) => {
            return (
              <SmallText
                key={index}
                variant="secondary"
                weight="400"
                color="white"
              >
                {`${itemValue}`}
              </SmallText>
            )
          })}
        </StyledListItem>
      )
    })

    const otherInfoRendered = Object.keys(otherInfo).map((item, index) => {
      return (
        <StyledListItem key={index}>
          <SmallText variant="secondary" weight="400" color="white" size="8">
            {`${item}`}
          </SmallText>

          {otherInfo[item].map((itemValue, index) => {
            return (
              <SmallText
                key={index}
                variant="secondary"
                weight="400"
                color="white"
                size="8"
              >
                {`${itemValue}`}
              </SmallText>
            )
          })}
        </StyledListItem>
      )
    })

    return (
      <div key={index}>
        {mainInfoRendered}
        {otherInfoRendered}
      </div>
    )
  })

  return <StyledUl>{stylesList}</StyledUl>
}

DOMNodeInspectContent.propTypes = {
  DOMNode: PropTypes.object,
  DOMParentNode: PropTypes.object,
  properties: PropTypes.array,
}

export default DOMNodeInspectContent
