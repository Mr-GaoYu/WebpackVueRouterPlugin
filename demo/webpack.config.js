const path = require('path')
const WebpackVueRouterPlugin = require('jiti')(__dirname)('../src/WebpackConventionRouting')


module.exports = {
    mode: 'production',
    context: __dirname,
    devtool: false,
    target: 'node',
    entry: './index.js',
    stats: false,
    output: {
        filename: './output.js',
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new WebpackVueRouterPlugin()
    ]
}