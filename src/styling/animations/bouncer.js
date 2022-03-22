import * as React from "react"
import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { error, isNotIncluded, isNotUndefined } from "@utils"
import useDeepCompareEffect from "use-deep-compare-effect"

const Bouncer = ({
  startX,
  endX,
  startY,
  endY,
  duration,
  stopOnHover,
  children,
}) => {
  const [isMouseEnter, setIsMouseEnter] = React.useState(false)
  let itemVariants = {}
  const itemTransition = {
    duration: `${duration}`,
    repeat: Infinity,
    ease: "easeInOut",
  }

  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  function setupVerticalDirection() {
    return {
      ...itemVariants,
      start: { y: `${startY}%`, transition: { ...itemTransition } },
      end: { y: `${endY}%`, transition: { ...itemTransition } },
      stop: { y: `${startY}%` },
    }
  }

  function setupHorizontalDirection() {
    return {
      ...itemVariants,
      start: { x: `${startX}%`, transition: { ...itemTransition } },
      end: { x: `${endX}%`, transition: { ...itemTransition } },
      stop: { x: `${startX}%` },
    }
  }

  function setupJumpDirection() {
    if (startY && endY) {
      itemVariants = setupVerticalDirection()
    }

    if (startX && endX) {
      itemVariants = setupHorizontalDirection()
    }
    return itemVariants
  }

  function hanleMouseHover(action) {
    switch (action) {
      case "enter":
        setIsMouseEnter(true)
        break
      case "leave":
        setIsMouseEnter(false)
        break
      default:
        setIsMouseEnter(false)
        break
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="end"
      style={{
        position: "relative",
      }}
    >
      <motion.div
        variants={setupJumpDirection()}
        initial="start"
        animate={isMouseEnter && stopOnHover ? "stop" : "end"}
        onMouseEnter={() => hanleMouseHover("enter")}
        onMouseLeave={() => hanleMouseHover("leave")}
        style={{
          display: "block", // do not remove this. It let the children compoenent bounce
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

Bouncer.propTypes = {
  children: PropTypes.node.isRequired,
  direction: (props, propName, componentName) => {
    if (
      isNotUndefined(props[propName]) &&
      isNotIncluded(props[propName], ["vertical", "horizontal"])
    ) {
      return error(
        `${componentName}`,
        `The ${propName} props accepts only the value: vertical, horizontal `
      )
    }
  },
}

export default Bouncer
