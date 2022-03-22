import styled from "styled-components"
import { motion } from "framer-motion"

import { Size } from "../../index"
import { isFunction } from "@utils"
import { isColorTheme, colorTheme } from "@colors/lib"

const SizedBox = styled(motion.div)`
  ${Size}
  background: ${({ color }) => {
    if (color) {
      if (isFunction(color)) return color()
      if (isColorTheme(color)) return colorTheme(color)
      return color
    }
    return null
  }};
`

export default SizedBox
