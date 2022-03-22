import * as React from "react"
import PropTypes from "prop-types"

const MapComponents = ({ array, RenderedComponent, ...props }) => {
  return (
    <>
      {array.map((arrayElement, index) => {
        return <RenderedComponent key={index} item={arrayElement} {...props} />
      })}
    </>
  )
}

// TODO make propTypes function to guide the user to use the component
MapComponents.propTypes = {
  array: PropTypes.array.isRequired,
  RenderedComponent: PropTypes.func.isRequired,
}

export default MapComponents

// <arrayMap through={array} Render={()=><CarouselCard>{children}</CarouselCard>}
