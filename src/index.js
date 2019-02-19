/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0, n, k, l;
  for(var i = 0; i < preferences.length; i++) {
    n = i + 1; 
    k = preferences[i];
    l = preferences[k - 1];
    if( preferences[l -1] == n && n != k ) {
        count++; delete preferences[i]; delete preferences[k - 1]; delete preferences[l -1];
    }
  }
  return count;
};
