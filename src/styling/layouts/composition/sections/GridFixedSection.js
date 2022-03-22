import * as React from "react"
import styled from "styled-components"

import { GridFixedBaseContainer, Paddings, usePaddingTheme } from "@layouts"

const GridFixedBaseSection = styled(GridFixedBaseContainer)`
  ${Paddings}
`

const GridFixedSection = React.forwardRef(({ children, ...props }, ref) => {
  const {
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
  } = usePaddingTheme()

  return (
    <GridFixedBaseSection
      ref={ref}
      as="section"
      pt={paddingTop}
      pl={paddingLeft}
      pb={paddingBottom}
      pr={paddingRight}
      {...props}
    >
      {children}
    </GridFixedBaseSection>
  )
})

export default GridFixedSection
