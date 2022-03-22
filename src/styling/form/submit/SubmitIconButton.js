import * as React from "react"
import styled from "styled-components"

import { SVGIcon } from "@icons"
import { colorTheme } from "@colors/lib"

const StyledSubmitIconButton = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border: 0px;
  border-radius: 50%;
  background: ${({ bg }) => colorTheme(bg)};
  cursor: pointer;
`

const SubmitIconButton = ({ bg, children, ...props }) => {
  return (
    <StyledSubmitIconButton bg={bg}>
      <SVGIcon
        name="SEND"
        color="white"
        $style={{
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%,-50%)",
        }}
      />
    </StyledSubmitIconButton>
  )
}

export default SubmitIconButton
