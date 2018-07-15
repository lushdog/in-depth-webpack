// if (page === 'subPageA') {
//   require.ensure(['./subPageA'], function () {
//     var subPageA = require('subPageA')
//   }, 'subPageA')
// } else if (page === 'subPageB') {
//   require.ensure(['./subPageB'], function () {
//     var subPageA = require('subPageB')
//   }, 'subPageB')
// }

if (page === 'subPageA') {
  import(/* webpackChunkName: 'subPageA' */ './subPageA').then(function (subPageA) {
  })
} else if (page === 'subPageB') {
  import(/* webpackChunkName: 'subPageB' */ './subPageB').then(function (subPageB) {
  })
}


export default 'pageA'