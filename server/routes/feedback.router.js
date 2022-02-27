const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST

router.post('/', (req, res) => {
    console.log(req.body);
    const feeling = req.body.feeling;
    const understanding = req.body.understanding;
    const support = req.body.support;
    const comments = req.body.comments;

    const sqlText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;
      
    const valueArray = [feeling, understanding, support, comments];

    pool.query(sqlText, valueArray)
    .then((response) => {
        console.log('Added feedback to the database', req.body);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error adding feedback to the database', error);
        res.sendStatus(500);
    })
})

module.exports = router;