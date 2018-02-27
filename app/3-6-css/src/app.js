// import './css/base.css'
import base from './css/base.css'
import baseLess from './css/base.less'
import common from './css/common.css'

var app = document.getElementById('app')
app.innerHTML = '<div class="'+ base.box + '"></div>'
// var flag = false 

// setInterval(function () {
//   if (flag) {
//     base.unuse()
//   } else {
//     base.use()
//   }
//   flag = !flag
// }, 500)