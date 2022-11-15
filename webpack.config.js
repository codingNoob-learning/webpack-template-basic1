// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    // parcel main.js
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },


    module: {
        rules: [
            {
                // /\.css$/ -> .css로 끝나는 파일을 찾는 정규 표현식
                // /\.s?css$/ -> .scss 혹은 .css로 끝나는 파일을 찾는 정규 표현식
                test: /\.s?css$/,
                // loader 순서 중요함.
                use: [
                    'style-loader',
                    // css-loader로 해석한 부분을 style-loader가 html에 style 태그로 붙여넣어줌.
                    'css-loader',
                    // 현재 main.js에서 css 파일을 import시켰는데 js에서는 css를 해석할 수 없으므로 css-loader 패키지를 사용.
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),

        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}