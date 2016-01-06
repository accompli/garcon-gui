var webpack = require('webpack');  
require('es6-promise').polyfill();

module.exports = { 
    entry:  [
        'webpack/hot/only-dev-server',
       "./assets/jsx-output/main.js"
    ],
    
// entry: {
//        html : "./index.html",
//        script: "./jsx/app.js"
//    },

    
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: "file?name=[name].[ext]"},
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /jquery\/src\/selector\.js$/, loader: 'amd-define-factory-patcher-loader' },
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' 
        ]}
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
