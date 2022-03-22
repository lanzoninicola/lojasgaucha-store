import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FlexContainer } from "@layouts"

const StyledCarouselBaseContainer = styled(FlexContainer)``

const CarouselBaseContainer = ({ pl, pr, ml, mr, children, ...props }) => {
  return (
    <StyledCarouselBaseContainer
      row
      centerX
      // style={{
      //   scrollSnapType: "x mandatory",
      //   scrollBehavior: "smooth",
      // }}
      {...props}
    >
      {children}
    </StyledCarouselBaseContainer>
  )
}

export default CarouselBaseContainer

CarouselBaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
