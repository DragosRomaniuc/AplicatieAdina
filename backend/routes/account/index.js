const router = require('express-promise-router')();
const { Account } = require('../../models');



router.post('/createAccount', async (request, response, next) => {
    const { username, password } = request.body;
    // username echivalent cu request.body.username
    
    const createdAccount = new Account({  //dureaza 3 secunde si e asincrona
        username,
        password
     });

     createdAccount.save().then(()=>{
        response.send({
            status:"SUCCES",
            data: createdAccount
        })
     })

    
    
        
   
});


module.exports = router;



// localhost/account/

