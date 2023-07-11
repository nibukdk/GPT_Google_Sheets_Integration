/**
 * Simplifies the given paragraph in layman's term
 * @param {String} input value to simplify
 *  @return Simplified Text
 * @customfunction
 */
function GPT_SIMPLIFY(input) {
  const systemContent = "Simplify The Given Passage in layman's term."

  return Array.isArray(input) ?
    input.flat().map(text => fetchData(systemContent, text)) :
    fetchData(systemContent, input);
};


/**
 * Summarises the given paragraph in layman's term
 * @param {String} input value to summarize
 *  @return Summarized Bullet Points
 * @customfunction
 */
function GPT_SUMMARY(input) {
  const systemContent = "Summarize The Given Passage. Provide atleast 3 and atmost 5 bullet points"

  return Array.isArray(input) ?
    input.flat().map(text => fetchData(systemContent, text)) :
    fetchData(systemContent, input);
};