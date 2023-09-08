// module.exports = (content, maxLength) => {
//   if (typeof content !== 'string') return 'Error';
//   if(typeof maxLength !== 'number') return 'Error';
//   if(maxLength <= 0) return 'Error';
//   if(content.length < 1) return 'Error';
//   if(content.length <= maxLength) return content;
//   return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
// };
module.exports = (content, maxLength) => {
  if (
    typeof content !== 'string' ||
    typeof maxLength !== 'number' ||
    maxLength <= 0 ||
    content.length < 1
  ) {
    return 'Error';
  }

  if (content.length <= maxLength) {
    return content;
  }

  return `${content.substr(0, content.lastIndexOf(' ', maxLength))}...`;
};
