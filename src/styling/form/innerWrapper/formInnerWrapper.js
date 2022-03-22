import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { GridFixedContainer } from "@layouts"

import {
  isUndefined,
  isNotUndefined,
  isObject,
  isFunction,
  isNotString,
  error,
} from "@utils"

//TODO make a template from this

const StyledForm = styled.form``

const FormInnerWrapper = ({
  reactHookForm,
  handleSubmission,
  submissionStage,
  gap,
  children,
}) => {
  const _handleSubmit = reactHookForm?.handleSubmit

  const onSubmit = data => {
    handleSubmission(submissionStage, data)
  }

  return (
    <StyledForm onSubmit={_handleSubmit(onSubmit)}>
      <GridFixedContainer columns="1fr" rAuto gap={gap}>
        {children}
      </GridFixedContainer>
    </StyledForm>
  )
}

FormInnerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
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

    if (!props[propName].hasOwnProperty("handleSubmit")) {
      return error(
        `${componentName}`,
        `The "${propName}" object passed doen't have the "register" prop. This is required for the correct execution of "react-hook-form" module
        
        The parent should:
        1. call the useForm() hook from "react-hook-form": const {register, errors, handleSubmit} = useForm()
        2. passing prop to ${componentName} like this: <${componentName} reactHookForm={{ register, errors }} />`
      )
    }
  },
  handleSubmission: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      return error(
        `${componentName} - ${propName}`,
        `The "${propName}" function is missing. This function is required to pass data to the state of form`
      )
    }

    if (!isFunction(props[propName])) {
      return error(
        `${componentName}`,
        `The ${propName} must be a function, instead of: ${typeof props[
          propName
        ]}`
      )
    }
  },
  submissionStage: (props, propName, componentName) => {
    // if (isUndefined(props[propName])) {
    //   return error(
    //     `${componentName} - ${propName}`,
    //     `"${propName}" is required. This describes the single stage of a submission process. If this form doesn't need a "step-by-step submission" you can assign a default value, eg. "form-submission"`
    //   )
    // }

    if (isNotUndefined(props[propName]) && isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `The ${propName} must be a string, instead of: ${typeof props[
          propName
        ]}`
      )
    }
  },
}

export default FormInnerWrapper
