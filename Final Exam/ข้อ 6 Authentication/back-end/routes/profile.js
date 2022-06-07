const express = require('express')
var router = express.Router();


router.get('/', async function (req, res) {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorized');

    } else {
      try {
        // remove 'Bearer' prefix to validate pure token value
        const decoded = jwt.verify(
          token.replace('Bearer', '').trim(),
          'codecamp_very_$secr3T!'
        );
        console.log(decoded);
        // query user-specific information with decoded as a JSON object
   
        res.send([
          { item: 'Product A selected' },
          { item: 'Product B selected' },
        ]);
      } catch (e) {
        res.status(401).send('Unauthorized');
      }
    }
   });
   

module.exports = router;



// `INSERT INTO user (username, password, first_name, last_name, email, mobile_phone) VALUES (?,?,?,?,?,?)`, [username,hashedPassword,first_name,last_name,email,mobile_phone]