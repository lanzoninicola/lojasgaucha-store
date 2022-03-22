import * as React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const FadeIn = ({ triggerOnce, duration, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce,
    // Make sure to set the root margin for top and bottom, so the Intersection Observer gets triggered before the image enters the viewport.
    // This gives the image a chance to be loaded before the user even sees it.
    // Try to start with something like 200px 0px, but experiment with it until you find the right value.
    rootMargin: "50px 0px",
  })

  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={reveal}
      initial="hidden"
      animate={inView ? "visible" : null}
    >
      {children}
    </motion.div>
  )
}

FadeIn.defaultProps = {
  duration: 1,
  triggerOnce: true,
}

FadeIn.propTypes = {
  triggerOnce: PropTypes.bool,
}

export default FadeIn
