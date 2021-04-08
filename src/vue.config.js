// 配置 axois 跨域
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://127.0.0.1/8080',
                changeOrigin: true,             // 是否跨域
                ws: true,                       // 是否代理 websockets
                secure: true,                   // 是否https接口
                pathRewrite: {                  // 路径重置
                    '^/api': '/api'
                }
            }
        }
    }
};