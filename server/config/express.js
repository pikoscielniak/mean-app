var express = require("express"),
    stylus = require('stylus'),
    passport = require('passport');

module.exports = function (app, conifg) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.configure(function () {
        app.set('views', conifg.rootPath + '/server/views');
        app.set('view engine', 'jade');
        app.use(express.logger('dev'));
        app.use(express.cookieParser());
        app.use(express.bodyParser());
        app.use(express.session({secret: 'multi vision unicorns'}));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(stylus.middleware(
            {
                src: conifg.rootPath + '/public',
                compile: compile
            }
        ));
        app.use(express.static(conifg.rootPath + '/public'));
    });
}

