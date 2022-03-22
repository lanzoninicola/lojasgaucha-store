import { isEmptyObject, isNotUndefined, error, warn } from "@utils"

export default function setGatsbyFluidData(
  graphQLData = {},
  currentDevice = ""
) {
  if (isEmptyObject(graphQLData)) {
    return error(
      `setGatsbyFluidData`,
      `GraphQL query result returned anything. "graphQLData" param value is: ${JSON.stringify(
        graphQLData
      )}`
    )
  }

  if (currentDevice === "") {
    return error(
      `setGatsbyFluidData`,
      `You have to pass the current device breakpoint information as second parameter of function. "currentDevice" param value is: ${JSON.stringify(
        currentDevice
      )}`
    )
  }

  /**
   *    USE CASE 1:
   *    the GraphQL query return a single record of specific image item due the filter used inside the query.
   *    In this case the result object contains also the breakpoints information of image
   */

  const hasDataBreakpointInfo = isNotUndefined(graphQLData?.[currentDevice])
  if (hasDataBreakpointInfo) {
    const edgesArray = graphQLData?.[currentDevice]?.edges

    if (edgesArray.length === 0) {
      warn(
        `setGatsbyFluidData`,
        `The GraphQL query returns nothing: ${JSON.stringify(
          edgesArray
        )}. Please check your query, configuration. Are you imported the component correctly?.`
      )
    }

    if (edgesArray.length > 1) {
      warn(
        `setGatsbyFluidData`,
        `The GraphQL query returns more than 1 item. Maybe you need to map the result or check the filter applied to the GraphQL query.`
      )
    }

    return edgesArray[0]?.node?.childImageSharp?.fluid
  }

  /**
   *    USE CASE 2:
   *    the GraphQL query return a collection of images.
   *    It requires mapping the data using the "mapGraphQLImageData" function,
   *    in the callback function will be passed the single record of fluid data to the component.
   */

  const isFluidData = graphQLData.hasOwnProperty("aspectRatio") ? true : false
  if (isFluidData) return graphQLData
}
