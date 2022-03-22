import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "styled-components"

import { GridFixedContainer } from "@layouts/index"

import {
  isUndefined,
  isNotUndefined,
  isNotString,
  isObject,
  error,
  warn,
} from "@utils"

import { InputLabel } from "../index"

// TODO: make the focus run
// const [focusField, setFocusField] = React.useState()

// const handleFocustInputItem = e => {
//   setFocusField(e.target.name)
// }
// TODO: managing different style of input element, same as for textArea

const BaseInputText = styled.input`
  background: transparent;
  padding: 8px;

  &:focus {
    outline: none;
  }
`

const InputText = React.forwardRef(
  (
    {
      variant,
      name,
      placeholder,
      isRequired,
      isFocused,
      noLabel,
      label = { text: "", style: {} },
      ...props
    },
    ref
  ) => {
    const themeContext = React.useContext(ThemeContext)
    const themeStyle = themeContext?.form?.style?.inputText

    function renderInputText(props) {
      const InputTextVariant = themeStyle?.[props?.variant]

      const _props = {
        type: "text",
        id: props?.name,
        name: props?.name,
        placeholder: props?.placeholder,
        ...props,
      }

      if (isUndefined(InputTextVariant)) {
        return (
          <BaseInputText
            ref={ref}
            // onFocus={handleFocustInputItem}
            {..._props}
          />
        )
      }

      return <InputTextVariant ref={ref} {..._props} />
    }

    return (
      <GridFixedContainer columns="1fr" rAuto gap="4">
        {!noLabel && (
          <InputLabel htmlFor={name} text={label?.text} style={label?.style} />
        )}
        {renderInputText({ variant, name, placeholder, ...props })}
      </GridFixedContainer>
    )
  }
)

InputText.defaultProps = {
  isRequired: false,
  // isFocused: false,
  noLabel: false,
}

InputText.propTypes = {
  variant: (props, propName, componentName) => {
    if (isUndefined(props[propName]) || props[propName] === "") {
      return error(
        `${componentName}`,
        `"${propName}" prop is missing. It is required to define the style`
      )
    }

    if (isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" must be a string, instead of: ${typeof props[propName]}`
      )
    }
  },
  name: (props, propName, componentName) => {
    if (isUndefined(props[propName]) || props[propName] === "") {
      return error(`${componentName}`, `"${propName}" prop is missing`)
    }

    if (isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" must be a string, instead of: ${typeof props[propName]}`
      )
    }
  },
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  isFocused: PropTypes.bool,
  noLabel: PropTypes.bool,
  label: (props, propName, componentName) => {
    if (!isObject(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" must be an object, instead of: ${typeof props[
          propName
        ]}.`
      )
    }

    if (!props[propName].hasOwnProperty("text")) {
      return error(
        `${componentName}`,
        `The "${propName}" object doesn't contain the "text" prop: ${JSON.stringify(
          props[propName]
        )}. It is required to render the label text.`
      )
    }

    if (
      isUndefined(props[propName]["text"]) ||
      props[propName]["text"] === ""
    ) {
      return error(
        `${componentName}`,
        `The prop "text" of "${propName}" object is undefined or empty: ${JSON.stringify(
          props[propName]
        )}. It is required to render the label text.`
      )
    }

    if (props["noLabel"] === true && isNotUndefined(props[propName]["text"])) {
      warn(
        `${componentName}`,
        `You have set to "${props["noLabel"]}" the prop "noLabel" and assigned a label to the input field`
      )
    }

    if (
      isNotUndefined(props[propName]["style"]) &&
      !isObject(props[propName]["style"])
    ) {
      return error(
        `${componentName}`,
        `The "style" prop of "${propName}" object must be an object, instead of: ${typeof props[
          propName
        ]["label"]}.`
      )
    }
  },
}

export default InputText
