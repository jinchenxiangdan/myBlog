const path = require('path')

module.exports = (opts, ctx) => {
  return {
    name:'valine',
    define: {
      COMMENT_OPTIONS: opts || {},
    },
    enhanceAppFiles: [path.resolve(__dirname, 'comment.js')],
    // globalUIComponents: ['Valine']
  }
}