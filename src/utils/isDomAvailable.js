/**
 * isDomAvailable
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */

const isDomAvailable =
  typeof window !== "undefined" &&
  !!window.document &&
  !!window.document.createElement

export default isDomAvailable
