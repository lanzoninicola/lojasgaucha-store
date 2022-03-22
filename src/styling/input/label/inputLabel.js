import * as React from "react"
import PropTypes from "prop-types"

import { Text } from "@typography"
import { colorTheme } from "@colors/lib"
import { isUndefined, removePropsFromObject, error } from "@utils"

const InputLabel = ({ htmlFor, text, style = {} }) => {
  const nextStyle = removePropsFromObject(style, ["weight", "color"])

  return (
    <Text
      as="label"
      htmlFor={htmlFor ?? ""}
      weight={style?.weight}
      color={colorTheme(style?.color)}
      capitalize="uppercase"
      ls="1px"
      mb="6px"
      $style={nextStyle}
    >
      {text && text}
    </Text>
  )
}

InputLabel.propTypes = {
  htmlFor: (props, propName, componentName) => {
    if (isUndefined(props[propName]) || props[propName] === "") {
      return error(
        `${componentName}`,
        `Please, add "name" prop (type "string") to the input component.`
      )
    }
  },
  text: PropTypes.string,
  style: PropTypes.object,
}

export default InputLabel
