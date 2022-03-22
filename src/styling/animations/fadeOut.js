import * as React from "react"
import { motion } from "framer-motion"

const FadeOut = ({ duration, children }) => {
  const reveal = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: duration,
      },
    },
  }

  return (
    <motion.div variants={reveal} initial="visible" animate="hidden">
      {children}
    </motion.div>
  )
}

FadeOut.defaultProps = {
  duration: 1,
}

export default FadeOut
