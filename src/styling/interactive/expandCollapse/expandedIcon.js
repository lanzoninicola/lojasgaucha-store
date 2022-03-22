import * as React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import { SVGIcon } from "@icons"

const ExpandedIcon = ({
  shouldExpand,
  expandContent,
  contentId,
  contentExpanded,
  color,
}) => {
  const button = {
    rest: { scale: 1 },
    pressed: { scale: 0.9, rotate: [0, 270, 0] },
  }

  return (
    <>
      {shouldExpand && (
        <motion.div
          variants={button}
          initial="rest"
          whileTap="pressed"
          onClick={() => expandContent(contentId)}
        >
          {!contentExpanded && (
            <SVGIcon name="CIRCLE_PLUS" size="24" color={color} />
          )}
          {contentExpanded && (
            <SVGIcon name="CIRCLE_MINUS" size="24" color={color} />
          )}
        </motion.div>
      )}
    </>
  )
}

ExpandedIcon.defaultProps = {
  shouldExpand: true,
}

ExpandedIcon.propTypes = {
  shouldExpand: PropTypes.bool,
  expandContent: PropTypes.func.isRequired,
  contentId: PropTypes.number.isRequired,
  contentExpanded: PropTypes.bool.isRequired,
}

export default ExpandedIcon
