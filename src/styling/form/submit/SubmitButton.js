import * as React from "react"
import PropTypes from "prop-types"

import { PrimaryButtonOrange, PrimaryButtonBlue } from "@buttons"

const SubmitButton = ({ variant, color, children, ...props }) => {
  function renderPrimaryOrangeButton(props) {
    return (
      <PrimaryButtonOrange as="input" type="submit" {...props}>
        {children}
      </PrimaryButtonOrange>
    )
  }

  function renderPrimaryBlueButton(props) {
    return (
      <PrimaryButtonBlue as="input" type="submit" {...props}>
        {children}
      </PrimaryButtonBlue>
    )
  }

  function renderButtons({ variant, color, ...props }) {
    if (variant === "primary" && color === "blue") {
      return renderPrimaryBlueButton({ ...props })
    }

    if (variant === "primary" && color === "orange") {
      return renderPrimaryOrangeButton({ ...props })
    }
  }

  return renderButtons({ variant, color, children, ...props })
}

SubmitButton.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SubmitButton
