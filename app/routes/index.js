'use strict';

const routeCtrl = require('./routes');
module.exports = app => {
   app.use('/signup/user', routeCtrl);
};

