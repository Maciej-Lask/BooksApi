module.exports = (content, maxLength) => {
  if (typeof content !== 'string') return 'Error';
  if(typeof maxLength !== 'number') return 'Error';
  // should return an error if "maxLength" is lower or equal 0
  if(maxLength <= 0) return 'Error';
  if(content.length < 1) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
