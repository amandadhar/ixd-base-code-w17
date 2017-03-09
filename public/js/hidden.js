function prefx(){
  var prefixes = ['moz', 'ms', 'o', 'webkit'];
 
  if ('hidden' in document) {
    return '';
  }
 
  // Loop through each prefix to see if it is supported.
  for (var i = 0; i < prefixes.length; i++) {
    var testPrefix = prefixes[i] + 'Hidden';
    if (testPrefix in document) {
      return prefixes[i];
    }
  }
 
  return;
}
