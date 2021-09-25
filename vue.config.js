module.exports = {
    lintOnSave: false,
    devServer: {
        port: 1001,
        // 子项目服务支持跨域访问
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd',
        }
    }
}