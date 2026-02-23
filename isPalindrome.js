/**
 * Check if a string is a palindrome
 * - ignores spaces, punctuation, and case
 * @param {string} input
 * @returns {boolean}
 */
function isPalindrome(input) {
  if (typeof input !== 'string') return false;

  const cleaned = input
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
