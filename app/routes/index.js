'use strict';

const routeCtrl = require('./routes');
module.exports = app => {
   app.use('/loginmod', routeCtrl);
};

