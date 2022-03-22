import * as React from "react"
import styled from "styled-components"

import { Flex, Paddings, usePaddingTheme } from "@layouts"

const FlexBaseSection = styled(Flex)`
  ${Paddings}
`

const FlexSection = React.forwardRef(({ children, ...props }, ref) => {
  const {
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
  } = usePaddingTheme()

  return (
    <FlexBaseSection
      ref={ref}
      as="section"
      pt={paddingTop}
      pl={paddingLeft}
      pb={paddingBottom}
      pr={paddingRight}
      {...props}
    >
      {children}
    </FlexBaseSection>
  )
})

export default FlexSection
