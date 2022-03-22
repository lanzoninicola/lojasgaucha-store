import * as React from "react"
import PropTypes from "prop-types"
import { SVGIcon } from "@icons/index"
import { Text } from "@typography/index"
import { FlexContainer } from "@layouts/index"

const ErrorMessage = ({ text, style }) => {
  return (
    <FlexContainer row centerY mt="8" mb="8">
      <SVGIcon
        name="ALERT_TRIANGLE"
        size={{ mobile: 12, laptop: 24, tablet: 24 }}
        color="red"
      />
      <Text
        weight={style?.fontWeight}
        size={{ mobile: 12 }}
        color={style?.color ?? "red"}
        italic
        ml="8px"
      >
        {text ?? "An error occured"}
      </Text>
    </FlexContainer>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default ErrorMessage
