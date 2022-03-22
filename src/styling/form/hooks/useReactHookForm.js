import * as React from "react"
import { useForm } from "react-hook-form"
import ErrorMessage from "../errors/errorMessage"

// TODO: At the moment this hook is not used

const useReactHookForm = ({ validation = { errorMessage: "", style: {} } }) => {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    // formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm()

  const _formValidation = {
    errorMessage: validation?.errorMessage ?? "An error occured",
    style: validation?.style ?? {
      color: "red",
      fontSize: "16px",
    },
  }

  const errorComponent = () => (
    <ErrorMessage
      text={_formValidation?.errorMessage}
      style={_formValidation?.style}
    />
  )

  const formValidation = {
    ..._formValidation,
    errorComponent,
  }

  return {
    register,
    errors,
    handleSubmit,
    watch,
    /*formState,*/
    formValidation,
  }
}

export default useReactHookForm
