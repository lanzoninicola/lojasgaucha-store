import styled from "styled-components"

import { colorTheme } from "@colors/lib"
import { Margins, Paddings, Size } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"

const FirebaseInputTextArea = styled.textarea`
  ${Margins}
  ${Paddings}
  ${Size}
  font-family: "Poppins", sans-serif;
  font-size: ${() => {
    const fontSize = { mobile: 16, laptop: 16, tablet: 16 }
    return useResponsiveSize(fontSize)
  }};
  line-height: ${() => {
    const fontSize = { mobile: 24, laptop: 24, tablet: 24 }
    return useResponsiveSize(fontSize)
  }};
  padding: 0px 4px;
  color: ${() => colorTheme("white")};
  border: 0;
  border-bottom: ${() => `1px solid ${colorTheme("orange")}`};
  background: transparent;
  border-color: ${() => colorTheme("orange")};
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${() => {
      const fontSize = { mobile: 14, laptop: 14, tablet: 14 }
      return useResponsiveSize(fontSize)
    }};
    opacity: 0.3;
  }
`

export default FirebaseInputTextArea
