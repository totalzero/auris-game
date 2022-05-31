const path = require('path')

module.exports = {
    mode: 'development',
    entry: './build/src/setup.js',
    output: {
        filename: 'aurisbin.js',
        path: path.resolve(__dirname, 'build')
    }
}