module.exports={
    devServer:{
        open:true,
        proxy:{
            '/4000': {
                target: 'http://localhost:4000',
                changeOrigin: true,
                pathRewrite:{
                    "^/4000":""
                }
            }
        }
        // proxy: 'http://localhost:4000'
    },
    lintOnSave:false,
}