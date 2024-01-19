function countVowels(str) {
  return str.toLowerCase().replace(/[^eyuoai]/g, '').length;
}

module.exports = countVowels;
