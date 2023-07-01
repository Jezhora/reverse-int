module.exports = function reverse (n) {
  return +Math.abs(n).toString().split('').reverse().join('');
}
// module.exports = function reverse (n) {
//     let i = 0;
//     const nS = Math.abs(n).toString();
//     let res = '';
    

//     while (i < nS.length) {
//         res = `${nS[i]}${res}`
//         i += 1;
//   }
//   let result = Number(res);
//   return result;
// }
  

