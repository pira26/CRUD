const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    context: path.join(__dirname, 'src'),
    entry: ['./main.js'],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: './dist', 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
		    // 	test: /\.css$/,
            // 	loader: 'style-loader!css-loader'
		    // },
		    {
		        test: /\.jsx$/, // all files ending with .jsx
		        loader: 'babel-loader', // use the babel-loader for all .jsx files
		        exclude: /node_modules/ // exclude searching for files in the node_modules directory
		    },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
    },
    devServer: {
	    contentBase: path.resolve(__dirname, 'public'), // A directory or URL to serve HTML content from.
	    historyApiFallback: true, // fallback to /index.html for Single Page Applications.
	    inline: true, // inline mode (set to false to disable including client scripts (like livereload)
	    open: true, // open default browser while launching
	    compress: true, // Enable gzip compression for everything served:
	    hot: true // Enable webpack's Hot Module Replacement feature
	},                                                                                                                                                                                                                                                    
}