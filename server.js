'use strict';

const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const logger = require('morgan');
const favicon = require('serve-favicon');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const config = require('./config.js');
const debug = require('debug')('app4')

const app = express();
const router = express.Router();

// connect our database
require('./server/models/models').connect(config.dbUrl);

const compiler = webpack(webpackConfig);

app.set('port', config.port);

// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session(
    { 
        resave: true,
        saveUninitialized: true,
        secret: 'uwotm8' 
    }
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    filename: 'bundle.js',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.use(express.static(path.resolve(__dirname, "www")));  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/www') + '/index.html');
});

const user = require('./server/routes/routeUser');
app.use('/users',user);

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

const server = app.listen(app.get('port'), () => {
    debug('Express server listening on port: ' + server.address().port);
});