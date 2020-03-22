const express = require('express');
const router = express.Router();

//Ruta principala
router.get('/', (request, response) => {
    response.send("Am ajuns in routes/index.js");
})

module.exports = router;