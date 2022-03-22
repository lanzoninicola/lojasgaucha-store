import * as React from "react"
import styled from "styled-components"
import { SmallText } from "@typography/index"

import { useViewportInfo } from "@hooks/index"

const StyledDOMViewportInfo = styled.div`
  width: 65px;
  z-index: 1000;
  margin-top: 2px;
  margin-left: 2px;
  padding: 4px 4px 0px 4px;
  top: 0;
  position: absolute;
  cursor: pointer;

  background: red;
  border-radius: 5px;
`

const DOMViewportInfo = () => {
  const { width, height } = useViewportInfo()
  return (
    <StyledDOMViewportInfo>
      <SmallText variant="secondary" weight="400" color="white" pb="2px">
        {`Width: ${width}`}
      </SmallText>
      <SmallText variant="secondary" weight="400" color="white" pb="2px">
        {`Height: ${height}`}
      </SmallText>
    </StyledDOMViewportInfo>
  )
}

export default DOMViewportInfo
