var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query(`SELECT car.id, year, name, model, nickname, country FROM car 
                        JOIN company ON company.id=car.company_id 
                        ORDER BY id;`, function (errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

// router.post('/', function (req, res) {
//     var newCompany = req.body;
//     pool.connect(function (errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             console.log('error', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query(`INSERT INTO car (name, country) VALUES ($1, $2);`, [newCompany.name, newCompany.country], function (errorMakingDatabaseQuery, result) {
//                 done();
//                 if (errorMakingDatabaseQuery) {
//                     console.log('error', errorMakingDatabaseQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(200);
//                 }
//             });
//         }
//     });
// });

module.exports = router;