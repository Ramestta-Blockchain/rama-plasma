if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rama-plasma.node.min.js')
} else {
  module.exports = require('./rama-plasma.node.js')
}
