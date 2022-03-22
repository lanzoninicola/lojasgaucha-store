import * as React from "react"
import styled from "styled-components"

import { GridFluidBaseContainer, Paddings, usePaddingTheme } from "@layouts"

const GridFluidBaseSection = styled(GridFluidBaseContainer)`
  ${Paddings}
`

const GridFluidSection = React.forwardRef(({ children, ...props }, ref) => {
  const {
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
  } = usePaddingTheme()

  return (
    <GridFluidBaseSection
      ref={ref}
      as="section"
      pt={paddingTop}
      pl={paddingLeft}
      pb={paddingBottom}
      pr={paddingRight}
      {...props}
    >
      {children}
    </GridFluidBaseSection>
  )
})

export default GridFluidSection
