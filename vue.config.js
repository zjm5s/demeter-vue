// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}