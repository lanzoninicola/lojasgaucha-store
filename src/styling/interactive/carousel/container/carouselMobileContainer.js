import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { CarouselBaseContainer } from "@interactive"

const StyledCarouselMobileContainer = styled(CarouselBaseContainer)``

const CarouselMobileContainer = ({ children, ...props }) => {
  return (
    <StyledCarouselMobileContainer ml="32" mr="32" {...props}>
      {children}
    </StyledCarouselMobileContainer>
  )
}

export default CarouselMobileContainer

CarouselMobileContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
