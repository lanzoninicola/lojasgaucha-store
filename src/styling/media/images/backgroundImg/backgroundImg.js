import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import setGatsbyFluidData from "../lib/setGatsbyFluidData"
import BackgroundImage from "gatsby-background-image"
import { Size } from "@layouts"

const BaseBackgroundImg = ({ data, device, children }) => {
  return (
    <BackgroundImage fluid={setGatsbyFluidData(data, device)}>
      {children}
    </BackgroundImage>
  )
}

BaseBackgroundImg.propTypes = {
  data: PropTypes.object.isRequired,
  device: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const StyledBackgroundImg = styled(BaseBackgroundImg)`
  ${Size}
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const BackgroundImg = ({ children, ...props }) => {
  return (
    <StyledBackgroundImg h100 w100 {...props}>
      {children}
    </StyledBackgroundImg>
  )
}

export default BackgroundImg
