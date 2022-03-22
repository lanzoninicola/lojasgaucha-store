import * as React from "react"

import { GridFixedContainer } from "@layouts"
import { InputTextArea } from "@input/index"
import { isUndefined, isObject, error } from "@utils"
import { ErrorMessage } from "../index"

// TODO: manage the focus of field
// TODO: adding local Storage

/**
 *    This component must be wrapped by the "FormInnerWrapper" component
 */

const FormTextArea = ({ reactHookForm, name, label, ...props }) => {
  const textAreaRef = React.createRef()
  const _register = reactHookForm?.register
  const _errors = reactHookForm?.errors
  const _validation = reactHookForm?.validation

  // React.useEffect(() => {
  //   console.log(textAreaRef)
  // }, [textAreaRef.current])

  return (
    <GridFixedContainer columns="1fr" rAuto gap="0">
      <InputTextArea
        ref={e => {
          _register(e, {
            required: _validation.errorMessage,
          })
          textAreaRef.current = e // you can still assign to ref
        }}
        name={name}
        label={label}
        {...props}
        // onFocus={handleFocustInputItem}
      />
      {_errors[name] && (
        <ErrorMessage text={_errors[name]?.message} style={_validation.style} />
      )}
    </GridFixedContainer>
  )
}

FormTextArea.propTypes = {
  reactHookForm: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      return error(
        `${componentName} - ${propName}`,
        `The "${propName}" object is missing. It is required to pass the required function of "react-hook-form" module.
        This object is passed by the parent, it contains the "register" function and "errors" object from "useForm()" hook.
        The parent should:
        1. call the useForm() hook from "react-hook-form": const {register, errors, handleSubmit} = useForm()
        2. passing prop to ${componentName} like this: <${componentName} reactHookForm={{ register, errors }} />`
      )
    }

    if (!isObject(props[propName])) {
      return error(
        `${componentName}`,
        `The ${propName} must be an object, instead of: ${typeof props[
          propName
        ]}`
      )
    }

    if (!props[propName].hasOwnProperty("register")) {
      return error(
        `${componentName}`,
        `The "${propName}" object passed doen't have the "register" prop. This is required for the correct execution of "react-hook-form" module
        The parent should:
        1. call the useForm() hook from "react-hook-form": const {register, errors, handleSubmit} = useForm()
        2. passing prop to ${componentName} like this: <${componentName} reactHookForm={{ register, errors }} />`
      )
    }

    if (!props[propName].hasOwnProperty("errors")) {
      return error(
        `${componentName}`,
        `The "${propName}" object passed doen't have the "errors" prop. This is required for the correct execution of "react-hook-form" module
        
        The parent should:
        1. call the useForm() hook from "react-hook-form": const {register, errors, handleSubmit} = useForm()
        2. passing prop to ${componentName} like this: <${componentName} reactHookForm={{ register, errors }} />`
      )
    }
  },
}

export default FormTextArea
