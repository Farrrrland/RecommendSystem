// 配置 axois 跨域
module.exports = {
    devServer: {
        proxy: {
            '/index': {
                target: 'https://111.229.81.92:8000',
                changeOrigin: true,             // 是否跨域
                ws: true,                       // 是否代理 websockets
                secure: true,                   // 是否https接口
                pathRewrite: {                  // 路径重置
                    '^/index': '/index'
                }
            }
        }
    }
};