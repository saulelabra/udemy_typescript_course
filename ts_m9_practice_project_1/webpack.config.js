const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts', //specifying the entry file of our project
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), //This path must match with the one in tsconfig.json and must be absolute
        publicPath: 'dist'
    },
    devtool: 'inline-source-map',
    module: { //specifies how to work with the files webpack finds
        rules: [
            {
                test: /\.ts$/, //This test is made to all files wether a rule must be applied or not (regular expression that evaluates to all files that end with .ts)
                use: 'ts-loader', //All these files will be handled by ts-loader
                exclude: /node_modules/
            }
        ]
    },
    resolve: { //Which file extensions to add to the imports it finds
        extensions: ['.ts', '.js']
    }
};