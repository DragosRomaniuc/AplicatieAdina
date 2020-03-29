// const express = require('express');
// const router = express.Router();
//am instalat express-promise-router cu comanda npm install express-promise-router in consonla
const router = require('express-promise-router')();
const accountRouter = require('./account');

//Ruta principala
router.use('/account', accountRouter);
// localhost/account/ -> se duce in accountRouter
module.exports = router;





// request localhost / 
// in documentul routes avem orice request vine pe localhost/
// localhost/account