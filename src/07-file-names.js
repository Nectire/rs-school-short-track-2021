/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(n) {
  const arrNames = [];
  const obj = {};
  n.reduce((prev, curr) => {
    obj[curr] = 1 + (obj[curr] || 0);
    // if (obj.hasOwnProperty(curr)) {
    if (Object.prototype.hasOwnProperty.call(obj, curr)) {
      if (obj[curr] > 1) {
        const str = `${curr}(${obj[curr] - 1})`;
        arrNames.push(str);
      } else {
        const filter = arrNames.filter((val) => val === curr);
        if (filter.length) {
          const str = `${curr}(${filter.length})`;
          arrNames.push(str);
        } else {
          arrNames.push(curr);
        }
      }
      // console.log(length, arrNames, obj);
      // console.log(obj, 'arrNames: ', arrNames, 'filterArrnames: ', length);
    }
    return n;
  }, '');
  // let length = arrNames.filter((val) => val.match('/doc(1)/'))
  // console.log(length);
  // console.log(obj);
  // console.log(n);
  // console.log(arrNames);
  return arrNames;
}

module.exports = renameFiles;
