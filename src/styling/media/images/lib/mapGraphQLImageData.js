import { isUndefined, isEmptyObject, error } from "@utils"

/**
 *    This function process the data returned by the GraphQL query.
 *    It executes the callback function for each item of edge array passed as parameter.
 *    The goal is passed the certain fluid object to the ImageQL component
 *
 * @param {object} graphQLData
 * @param {string} currentDevice
 * @param {function} cb
 *
 */

export default function mapGraphQLImageData(
  graphQLData = {},
  currentDevice = "",
  cb
) {
  if (isUndefined(graphQLData)) {
    return error(
      `mapGraphQLImageData`,
      `You have to pass the graphQL result as first parameter of function`
    )
  }

  if (isEmptyObject(graphQLData)) {
    return error(
      `mapGraphQLImageData`,
      `GraphQL query result returned anything. GraphQL data: ${JSON.stringify(
        graphQLData
      )}`
    )
  }

  if (isUndefined(currentDevice) || currentDevice === "") {
    return error(
      `mapGraphQLImageData`,
      `You have to pass the current device breakpoint information as second parameter of function`
    )
  }

  if (isUndefined(cb)) {
    return error(
      `mapGraphQLImageData`,
      `You have to pass the callback function as third parameter of function. It will be used in the map operation`
    )
  }

  const hasCurrentBreakpointData = graphQLData?.[currentDevice]

  if (isUndefined(hasCurrentBreakpointData)) {
    return error(
      `mapGraphQLImageData`,
      `The graphql query result doesn't contain the image data for the current device. 
      - Current device data: ${JSON.stringify(graphQLData?.[currentDevice])}
      - GraphQL data: ${JSON.stringify(graphQLData)}`
    )
  }

  if (isUndefined(cb)) {
    return error(
      `mapGraphQLImageData`,
      `The graphql query result doesn't contain the image data splitted in device breakpoints defined in the breakpoints theme. Check your query sintax.`
    )
  }

  const edgesArray = graphQLData?.[currentDevice]?.edges

  return edgesArray.map((edgeItem, index) => {
    const fluidData = edgeItem?.node?.childImageSharp?.fluid

    if (isUndefined(fluidData)) {
      return error(
        `mapGraphQLImageData`,
        `Fluid data object is ${typeof edgeItem?.node?.childImageSharp
          ?.fluid}. Check if you are using the "GatsbyImageSharpFluid_withWebp" fragment inside the GraphQL query`
      )
    }

    return cb(fluidData, index)
  })
}
