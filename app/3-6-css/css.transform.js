module.exports = function (css) {
  if (window.innerWidth >= 768) {
    return css.replace('red', 'green')
  } else {
    return css.replace('red', 'orange')
  }
}