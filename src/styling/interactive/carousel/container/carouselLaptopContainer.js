import * as React from "react"
import PropTypes from "prop-types"

const StyledCarouselLaptopContainer = styled(CarouselBaseContainer)``

const CarouselLaptopContainer = ({ children, ...props }) => {
  return (
    <StyledCarouselLaptopContainer pt="64" pb="64" {...props}>
      {children}
    </StyledCarouselLaptopContainer>
  )
}

export default CarouselLaptopContainer

CarouselLaptopContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
