import * as React from "react"

import PrimaryInputText from "./lib/inputText/primaryInputText"
import FirebaseInputText from "./lib/inputText/firebaseInputText"
import FirebaseInputTextArea from "./lib/textArea/firebaseTextArea"
import PrimaryTextArea from "./lib/textArea/primaryTextArea"

const formTheme = () => {
  return {
    style: {
      inputText: {
        primary: React.forwardRef((props, ref) => (
          <PrimaryInputText ref={ref} {...props} />
        )),
        secondary: {},
        firebase: React.forwardRef((props, ref) => (
          <FirebaseInputText ref={ref} {...props} />
        )),
      },
      textArea: {
        primary: React.forwardRef((props, ref) => (
          <PrimaryTextArea ref={ref} {...props} />
        )),
        secondary: {},
        firebase: React.forwardRef((props, ref) => (
          <FirebaseInputTextArea ref={ref} {...props} />
        )),
      },
    },
  }
}

export default formTheme
