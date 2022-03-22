/**
 * Returns an array of chars of words or sentence.
 * @param {string} sentence
 * @param {object} option
 */

function splitWordChar(
  sentence,
  { separator = "", removeWhiteSpace = false } = {}
) {
  if (typeof sentence !== "string") {
    console.error(
      `splitWords() function - First parameter must be a string instead of "${typeof sentence}"`
    )
    return sentence
  }

  const newSentence = sentence.split(separator)

  return newSentence.filter(char => {
    if (removeWhiteSpace) {
      return char !== " "
    }
    return char
  })
}

export default splitWordChar
