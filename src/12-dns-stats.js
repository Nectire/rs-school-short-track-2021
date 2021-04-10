/**
 * Given an array of domainss, return the object with the appearances of the DNS.
 *
 * @param {Array} domainss
 * @return {Object}
 *
 * @example
 * domainss = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counts = {};
  for (let i = 0; i < domains.length; i++) {
    let str;
    let str2;
    let str3 = '';
    const num = 0;
    if (domains[i].match(/\.\w{1,3}(?!\w+\.)/)[num]) {
      str = domains[i].match(/\.\w{1,3}(?!\w+\.)/)[num];
      counts[str] = 1 + (counts[str] || num);
    }
    if (domains[i].match(/(?<=\.)\w+\.\w+/)) {
      str2 = `.${domains[i].match(/(?<=\.)\w+\.\w+/)[num].split('.').reverse().join('.')}`;
      counts[str2] = 1 + (counts[str2] || num);
    }
    str3 = `.${domains[i].split('.').reverse().join('.')}`;
    counts[str3] = 1 + (counts[str3] || num);
  }
  return counts;
}

module.exports = getDNSStats;
