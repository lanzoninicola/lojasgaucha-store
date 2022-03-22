import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { colorTheme } from "@colors/lib"
import { SVGIcon } from "@icons/index"

const Clock = () => {
  return (
    <FlexContainer row centerY wAuto>
      <SVGIcon name="clock" color="blue" />
      <Text
        weight="600"
        variant="secondary"
        color={colorTheme("blue")}
        ml="10px"
      >
        11:30
      </Text>
    </FlexContainer>
  )
}

export default Clock
