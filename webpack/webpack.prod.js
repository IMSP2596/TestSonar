const { sharedData } = require('./webpack.config'); // Import shared data
const webpack = require('webpack');
module.exports={
    mode:'production',
    devtool:'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.repo_name': JSON.stringify(sharedData.REPO_NAME), // Use REPO_NAME
        }),
    ],
}
