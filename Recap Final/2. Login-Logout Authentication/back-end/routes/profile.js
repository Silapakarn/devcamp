const express = require('express')
var router = express.Router();
const middleware = require('./middleware');

router.get('/', middleware, async function(req, res, next) {
    
    let token = req.headers.authorization;
    console.log(token);

    res.send([
        {item: 'Product A selected'},
        {item: 'Product B selected'}
    ])
})

module.exports = router;