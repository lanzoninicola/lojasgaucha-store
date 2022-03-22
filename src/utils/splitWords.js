/**
 * Returns an array of words.
 * @param {string} sentence
 * @param {string} separator
 */

function splitWords(sentence, { separator = " " } = {}) {
  if (typeof sentence !== "string") {
    console.error(
      `splitWords() function - First parameter must be a string instead of "${typeof sentence}"`
    )
    return sentence
  }

  return sentence.split(separator)
}

export default splitWords
